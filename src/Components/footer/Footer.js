import React from "react";
import Container from "react-bootstrap/Container";
import './footer.css';

const Footer = () => (

    <footer className="footer fixed-bottom text-center py-3" bg="dark">
        <Container>
            <span className="text-white">BE React du cours Web Interactif MIHM 2020.</span>
            <p className="text-muted">Créé par Jérémie Garcia avec des données fournies par Mickael Royer</p>
        </Container>
    </footer>
);

export default Footer;