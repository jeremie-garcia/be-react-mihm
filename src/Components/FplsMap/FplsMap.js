import Col from "react-bootstrap/Col";
import Fpls from "../fpls/Fpls";
import Map from "../map/Map";
import Row from "react-bootstrap/Row";
import React from "react";

function FplsMap(props) {

    return (
        <Row>
            <Col>
                <h4>Plans de vol</h4>
                <Fpls/>
            </Col>
            <Col xs={9}>
                <h4>Carte</h4>
                <Map/>
            </Col>
        </Row>

    )
}
export default FplsMap;

