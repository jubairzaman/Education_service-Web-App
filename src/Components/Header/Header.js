import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="fs-1" to='/home' >JUBAIRS Academy</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className="nav ms-5 fs-5" to='/home' activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }} >Home</NavLink>
                        <NavLink className="nav ms-3 fs-5" to='/service' activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }} >Services</NavLink>
                        <NavLink className="nav ms-3 fs-5" to='/about' activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }} >About Us</NavLink>
                        <NavLink className="nav ms-3 fs-5" to='/contact' activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }} >Contact Us</NavLink>

                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;