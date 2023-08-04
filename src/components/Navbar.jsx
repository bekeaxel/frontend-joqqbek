import {Navbar, Container, Nav, Form, Button, FormControl, NavItem} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import React from 'react';
import '../styles/navbar.css'


const navbar = () => {
    return (
    <Navbar expand="lg" collapseOnSelect sticky='top'>
        <Container className="fluid">
        {/* <i class="fa-solid fa-bars"></i> */}
            <NavLink className="navbar-brand" to="/">
                study thing
            </NavLink>
            <Navbar.Toggle type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="true" aria-label="Toggle Navigation">
                <span className="fa-solid fa-bars"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarContent" className="navbar-collapse">
                <Nav className="me-auto" >
                    <NavLink className="navbar-item" to={"/submit"}>Submit</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default navbar;