import {Navbar, Container, Nav, NavLink} from 'react-bootstrap';
import React from 'react';
import '../styles/navbar.css'


const navbar = () => {
    return (
    <Navbar expand="lg" collapseOnSelect sticky='top'>
        <Container fluid>
            <Navbar.Brand>Our shit</Navbar.Brand>
            <Navbar.Toggle type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="true" aria-label="Toggle Navigation">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarContent">
                <Nav className="me-auto">
                    <NavLink className='navbar-item'>hej</NavLink> 
                    <NavLink className='navbar-item'>hej</NavLink> 
                    <NavLink className='navbar-item'>hej</NavLink> 
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default navbar;