import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function Header() {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand > <Link to="/"> Navbar </Link> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link > <Link to="/"> Home </Link> </Nav.Link>
            <Nav.Link > <Link to="/aboutus"> About Us </Link> </Nav.Link>
            <Nav.Link > <Link to="/products"> Products </Link> </Nav.Link>
            <Nav.Link > <Link to="/login"> SignUp </Link> </Nav.Link>

          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default Header;