import React from "react";
import "./header.css";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../doc/cemLogo.jpg";

function header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img width="200" height="50" src={Logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Service</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link id="contact-link" href="/home">
                cemconsultancy@gmail.com
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link id="contact-link">+91 123456789</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default header;
