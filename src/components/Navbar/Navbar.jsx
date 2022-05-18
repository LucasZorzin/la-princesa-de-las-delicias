import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import { BsBag } from 'react-icons/bs';
import './Navbar.scss';

function NavBar() {
    return (
        <>
            <Navbar id="navbar" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className='logo' src={logo} alt="La Princesa De Las Delicias" />
                        <span className='logo-title'>La Princesa De Las Delicias</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="nav-display">
                            <Nav className="me-auto nav-items">
                                <Nav.Link href="#home">Inicio</Nav.Link>
                                <Nav.Link href="#productos">Productos</Nav.Link>
                                <Nav.Link href="#sobre-nosotros">Sobre Nosotros</Nav.Link>
                                <Nav.Link href="#contacto">Contacto</Nav.Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                    <div id='cart-icon'><BsBag/></div>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;