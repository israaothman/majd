
import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/header.scss';
import Image from 'react-bootstrap/Image'
import logo from '../assets/images/logo.png';

function Header() {

  return (
    <>
      <header className="header">
        <Navbar >
          <Navbar.Brand >
            <Image src={logo} width="15%" height="100em" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto font">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Gallery</Nav.Link>
              <Nav.Link href="#signup">Join Us</Nav.Link>
              <NavDropdown title="Login" id="basic-nav-dropdown">
              <Form inline>
                <NavDropdown.Item href="#action/3.1"> <FormControl type="text" placeholder="Email"  id="email"/></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"> <FormControl type="text" placeholder="Password"  id="pass" /></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4"> <Button >Login</Button></NavDropdown.Item>
                </Form>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <p>
        <h3>
         Dummy title
        </h3>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      </p>
      </header>
    </>
  );
}




export default Header;
