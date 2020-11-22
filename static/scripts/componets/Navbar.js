import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import Clock from "./Clock";

class NavBar extends React.Component{
    render() {
        return (
            <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark"
                    className="h-100"
            >
                <Navbar.Brand href="/">Kyle McCray</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"/>
                    <Nav className="justify-content-end" >
                        <Nav.Link eventKey={1} href="/home">Home</Nav.Link>
                        <Nav.Link eventKey={2} href="/about">
                            About Me
                        </Nav.Link>
                        <Nav.Link eventKey={3} href="/skills">
                            My Skills
                        </Nav.Link>
                        <Nav.Link eventKey={4} href="/contact">
                            Contact Me
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;