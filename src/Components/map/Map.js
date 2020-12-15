import React from 'react'

import 'leaflet/dist/leaflet.css'

import {MapContainer, LayersControl, LayerGroup, Polyline} from "react-leaflet";
import {Marker, Popup, TileLayer, CircleMarker} from "react-leaflet";
import L from 'leaflet';
import FplMarker from './FplMarker';
import './Map.css';
import apt_icon from "./airport.svg";
import {useSelector} from "react-redux";
import {selectFpls} from "../../features/fpls/fplsSlice";
import {selectAirports} from "../../features/airports/airportsSlice";
import {selectBeacons} from "../../features/beacons/beaconsSlice";
import {selectSelection} from "../../features/selection/selectionSlice";

const { BaseLayer, Overlay } = LayersControl;

function Map(){

    const fpls = useSelector(selectFpls);
    const airports = useSelector(selectAirports);
    const beacons = useSelector(selectBeacons);
    const selection = useSelector(selectSelection);

    let iconApt = L.icon({
        iconRetinaUrl: apt_icon,
        iconUrl: apt_icon,
        iconSize: [20,20],
    });

    //process airports
    const airports_dict = airports.reduce((a,x) => ({...a, [x.id]: x}), {});
    const airportsMarkers = airports.map((apt) =>
            <Marker position={[apt.latitude, apt.longitude]}
                    icon = {iconApt}
                    key={apt.id}>
                <Popup>
                    Airport Name : {apt.name}
                    Airport Id : {apt.id}
                </Popup>
            </Marker>
    );

    //process beacons
    const beacons_dict = beacons.reduce((a,x) => ({...a, [x.id]: x}), {});
    const beaconsMarkers = beacons.map((beacon) =>
        <CircleMarker center={[beacon.latitude, beacon.longitude]}
                      radius = {2}
            key={beacon.id}>
            <Popup>
                Beacon Id : {beacon.id}
            </Popup>
        </CircleMarker>
    );
    const coords_dict = {...airports_dict, ...beacons_dict};

    const fpls_dict = fpls.reduce((a,x) => ({...a, [x.id]: x}), {});
    const getFplPositions = (fpl) => {
        const bPositions = fpl.beacons.map((b) => [coords_dict[b.name].latitude, coords_dict[b.name].longitude]);
        return [
            [coords_dict[fpl.d_airport].latitude,coords_dict[fpl.d_airport].longitude],
            ...bPositions,
            [coords_dict[fpl.a_airport].latitude,coords_dict[fpl.a_airport].longitude]
        ] };


    const selected_fpls = selection.map((id) => fpls_dict[id]);

    const fplPolylines = selected_fpls.map((fpl) =>
        <div key={fpl.id}>
            <Polyline
                positions={getFplPositions(fpl)}
                color="purple"
                weight={2}
            >

            </Polyline>
            <CircleMarker center={[coords_dict[fpl.d_airport].latitude,coords_dict[fpl.d_airport].longitude]}
                          radius = {2}
                          color="purple">
                <Popup>
                    Departure Airport : {fpl.d_airport}
                </Popup>
            </CircleMarker>
            <CircleMarker center={[coords_dict[fpl.a_airport].latitude,coords_dict[fpl.a_airport].longitude]}
                          radius = {2}
                          color="purple">
                <Popup>
                    Arrival Airport : {fpl.a_airport}
                </Popup>
            </CircleMarker>
            {

                fpl.beacons.map(beacon =>
                    <FplMarker
                        center={[coords_dict[beacon.name].latitude,coords_dict[beacon.name].longitude]}
                        key={beacon.name}
                        beacon = {beacon}
                        fpl = {fpl}
                    />)
            }
        </div>
    );

    return (

        <MapContainer center={[45.424209,4.2962527]} zoom={6} scrollWheelZoom={true}>
            <LayersControl>
                <BaseLayer checked name="OpenStreetMap">
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </BaseLayer>
                <Overlay checked name = "airports">
                    <LayerGroup  >
                        {airportsMarkers}
                    </LayerGroup>
                </Overlay>
                <Overlay  name = "balises">
                    <LayerGroup  >
                        {beaconsMarkers}
                    </LayerGroup>
                </Overlay>
                <Overlay  checked name = "fpls">
                    <LayerGroup  >
                        {fplPolylines}
                    </LayerGroup>
                </Overlay>
            </LayersControl>

        </MapContainer>
    )
}

export default Map;