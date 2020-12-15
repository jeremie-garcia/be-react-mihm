import React, {useState} from 'react'
import {Circle, Popup} from "react-leaflet";
import {useDispatch} from "react-redux";
import {updateUpdating} from "../../features/updating/updatingSlice";
import {updateFpls} from "../../features/fpls/fplsSlice";


function FplMarker(props) {

    const [level, setLevel] = useState([props.beacon.level]);
    const dispatch = useDispatch();

    function update_state(state){
        setLevel(parseInt(state));
        const payload = {fpl_id: props.fpl.id, is_updated: true};
        dispatch(updateUpdating(payload));
    };

    function submit_new_fpl() {
        //todo avoir plus de logique pour ne pas reset si une balise est en cours de modifications
        //utilser une liste de balises en cours de modification pour chanque fpl. Si fpl dans la liste et liste des balises vide sinon non.
        const payload = {fpl_id: props.fpl.id, is_updated: false};
        dispatch(updateUpdating(payload));

        const newFpl = {...props.fpl};
        const new_beacon = {...props.beacon, level:level};
        //update beacons of the new FPL
        newFpl.beacons = newFpl.beacons.map(beacon=>
            beacon.name === props.beacon.name ?
                new_beacon : beacon );

        dispatch(updateFpls(newFpl));
    }

    return (
    <Circle center={props.center}
            radius = {8000}
            pathOptions= {{color : Number(props.beacon.level) === Number(level) ? "purple" : "red"}}
            key={props.beacon.name}>
        <Popup key={props.beacon.name + "tooltip"}>
            beacon : {props.beacon.name},
            level : {props.beacon.level},
            time {props.beacon.time}
            <form>
                <label>Modifier le niveau</label>
                <input id="input-speed" type="number" value={level} onChange={(event) => update_state(event.target.value)}/>
                <button type="button" onClick={submit_new_fpl}>Save</button>
            </form>

        </Popup>
    </Circle>
    )
}

export default FplMarker;