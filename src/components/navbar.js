import React from "react";
import { Navbar, Nav, Image, Container } from "react-bootstrap";
import logo from "../Images/logo.jpg";

const navbar = () => {
        return (
                <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
                        <Container>
                                <Navbar.Brand href="/">
                                        <Image src={logo} roundedCircle className="mr-2" alt="logo" width="50" height="50" />
                                        Deagle Boiz
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav className="ml-auto">
                                                <Nav.Link href="/servers">Servers</Nav.Link>
                                                <Nav.Link href="">Item 2</Nav.Link>
                                                <Nav.Link href="">Item 3</Nav.Link>
                                                <Nav.Link href="">Item 4</Nav.Link>
                                                <Nav.Link href="">Item 5</Nav.Link>
                                        </Nav>
                                </Navbar.Collapse>
                        </Container>
                </Navbar>
        );
};

export default navbar;
