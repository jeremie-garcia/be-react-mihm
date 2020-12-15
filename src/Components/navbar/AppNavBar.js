import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import logo from './logo.svg';

function AppNavBar(props) {
    const elements = props.elements;

    const listItems = elements.map((elem) =>
        <LinkContainer to={elem} key={elem}>
            <Nav.Link>{elem}</Nav.Link>
        </LinkContainer>
    )

    return (
        <div className=" navbar-static-top">
            <Navbar collapseOnSelect bg="dark" variant="dark" expand="md" className="mb-3">
                <LinkContainer to="/">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        FPLS Explorer
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav activeKey={window.location.pathname}>
                        {listItems}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default AppNavBar;