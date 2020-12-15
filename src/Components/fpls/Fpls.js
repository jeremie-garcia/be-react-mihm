import {ListGroup, ListGroupItem} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {selectFpls} from "../../features/fpls/fplsSlice";
import {selectSelection, toggle} from "../../features/selection/selectionSlice";
import {selectUpdating} from "../../features/updating/updatingSlice";

function Fpls(props) {

    const fpls = useSelector(selectFpls);
    const selection = useSelector(selectSelection);
    const updating = useSelector(selectUpdating);
    const dispatch = useDispatch();

    const fpls_items = fpls.map((fpl) => (
        <ListGroupItem
            active={selection.includes(fpl.id)}
            key={fpl.id}
            onClick={() => dispatch(toggle(fpl.id))}>
            <p>{fpl.d_airport} &rarr; {fpl.a_airport} {updating.includes(fpl.id) ? '*' : ''}</p>
            <small>{fpl.id} -- {fpl.aircraft_type}</small>
        </ListGroupItem>));


    return (
        <div className="wrapper">
            <ListGroup style={{
                cursor: "pointer",
                width: '100%',
                height:'60vh',
                overflowY: 'scroll'
            }}>
                {fpls_items}
            </ListGroup>
        </div>
    );
};

export default Fpls;