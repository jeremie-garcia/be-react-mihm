import React from "react";
import './App.css';
import AppNavBar from "./navbar/AppNavBar";
import Footer from "./footer/Footer";
import Balises from "./balises/Balises";
import FplsMap from "./FplsMap/FplsMap";

import {
    BrowserRouter as Router,
    Switch,
    Route, Link
} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";

const pages = ['Carte', 'Balises']

function App() {
    return (
        <div className="App">
            <Router basename="/be-react-mihm">
                <AppNavBar elements={pages}/>
                <Switch>
                    <Route exact path='/'>
                        <Container>
                            <Jumbotron>
                                <h1> Visualisation de plans de vol</h1>
                                <p>
                                    Il s'agit d'une SPA (Single Page Application codée avec React pour le MIHM.
                                </p>
                                <p>
                                    <a href="https://github.com/jeremie-garcia/be-react-mihm/"> Pour les instructions du BE et les fichiers avec les données </a>
                                </p>
                            </Jumbotron>
                            <Row>
                                <Col>
                                    <h2>Détail des pages disponibles</h2>
                                    <p> La page <Link to={pages[0]}>Carte</Link> permet de voir les plans vols sur une carte et de les
                                        modifier.</p>
                                    <p> La page <Link to={pages[1]}>Balise</Link> permet de voir les balises dans une liste.</p>
                                </Col>
                            </Row>
                        </Container>
                    </Route>
                    <Route path={'/' + pages[0]}>

                        <Container>
                            <h1 className="py-2">Carte Interactive</h1>
                            <FplsMap/>
                        </Container>

                    </Route>
                    <Route path={'/' + pages[1]}>

                        <Container>
                            <h1 className="py-2 m-2">Liste des balises</h1>
                            <Row>
                                <Col>
                                    <Balises name="balise"/>
                                </Col>
                            </Row>
                        </Container>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
