import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navigation.css';

function Navigation() {
    return (
        <Navbar className="ms-3 me-3" expand="lg">
            <Navbar.Brand href="#hunter_">hunter_</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex-grow-1 justify-content-evenly">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#work">Work</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;