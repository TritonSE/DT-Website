import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../css/Toolbar.css'

class Toolbar extends Component {
  render() {
  return(
    <Navbar bg = "custom" expand="lg" fixed = "top">
  <Navbar.Brand href="/home">Dynamics Dance Team</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/Home">
        <d1 className="Home-Header"> Home </d1>
        </Nav.Link>
      <Nav.Link href="/About">
        <d2 className = "About-Header"> About </d2>
        </Nav.Link>
      <Nav.Link href="/Support">
        <d3 className = "Support-Header">Support</d3></Nav.Link>
      <Nav.Link href="/Contact"> 
      <d4 className = "Contact-Header">Contact</d4>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);
  }
}


export default Toolbar;


  