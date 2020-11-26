import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
class NavBar extends React.Component{
    render() {
        return (
            <header>
                        <Navbar sticky="top" collapseOnSelect expand="lg"
                                className="container-fluid" id="MainNavBar"
                        >
                            <Navbar.Brand href="/">Kyle McCray</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto"/>
                                <Nav className="justify-content-end" >
                                    <Nav.Link as={Link} to="/">
                                        Home
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/about">
                                        About
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/skills">
                                        Skills
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
            </header>
        )
    }
}

export default NavBar;