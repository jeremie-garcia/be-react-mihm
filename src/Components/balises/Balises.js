import React from 'react';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';

import { useSelector } from 'react-redux'
import {selectBeacons} from "../../features/beacons/beaconsSlice";


function Balises(){
    const balises = useSelector(selectBeacons);
    const columns = [
        {
            dataField: "id",
            text: "ID"
        },
        {
            dataField: "latitude",
            text: "Lattitude"
        },
        {
            dataField: "longitude",
            text: "Longitude"
        }
    ];
    return (
            <div className="wrapper">
                <BootstrapTable striped hover keyField="id" data={balises} columns={columns} pagination={ paginationFactory() }/>
            </div>
    );
};

export default Balises;