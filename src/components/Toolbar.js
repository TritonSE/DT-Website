import React, { Component } from 'react';
import {Navbar,Nav,Col,Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import BlinkingText from './BlinkingText.js'
import SocialFollow from './SocialFollow';
import { NavbarText } from 'react-bootstrap/Navbar';
import '../css/Toolbar.css'

class Toolbar extends Component {
  render() {
  return(
    <div>
      <Navbar bg = "custom" expand="lg">
      <Navbar.Brand href="#home">
      <img
        src = {require("../images/logo1.png")}
        style={{width:120, marginTop: 0}}
        alt = "Could not load"
        className = "floatingPhoto"
        />
        <BlinkingText/>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/Home">
              < h1 className="Home-Header"> Home </h1>
              </Nav.Link>
            <Nav.Link href="/About">
              <h2 className = "About-Header"> About </h2>
              </Nav.Link>
            <Nav.Link href="/Support">
              <h3 className = "Support-Header">Support</h3></Nav.Link>
            <Nav.Link href="/Contact">
            <h4 className = "Contact-Header">Contact</h4>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>
          <SocialFollow />
        </Navbar.Brand>
      </Navbar>
    </div>
  );
  }
}

export default Toolbar;


  
