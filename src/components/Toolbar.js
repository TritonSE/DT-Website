import '../css/Toolbar.css'
import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import BlinkingText from './BlinkingText.js'
import LogoText from './LogoText.js'
import SocialFollow from './SocialFollow';
import { NavLink} from 'react-router-dom';
import { LinkContainer} from 'react-router-bootstrap'


class Toolbar extends Component {
   
  render() {
  return(
    <div>
      <Navbar bg = "custom" expand="lg">
      <NavLink className = "logo-text" to="/" href = "/Home" >
        {/** Image/Text for dynamics team*/}
        <LogoText/>
      </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">

            {/** Home part of Navbar */}
            <NavLink  
              to="/" 
              href = "/Home" 
              exact activeClassName = "active" 
              className= "Home-Header" 
              style={{
                fontWeight: "bold",
                color: "black",
              }} 
              activeStyle={{
                color: "#FF4081"
              }}> 
                Home
            </NavLink>

            <LinkContainer activeClassName = "active" to = "/Dropdown">
            <NavDropdown title="About" id="basic-nav-dropdown" className = "About-Header">
              <LinkContainer to = "/Dropdown/directors" exact activeClassName = "active">
                <NavDropdown.Item style = {{color:"blue"}}> 
                  The Directors 
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer  to = "/Dropdown/join" href = "/Dropdown/join">
                <NavDropdown.Item> 
                  How to Join?
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to = "/Dropdown/performers" href = "/Dropdown/performers">
                <NavDropdown.Item> 
                The Performers
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to = "/Dropdown/mission" href = "/Dropdown/mission">
                <NavDropdown.Item> 
                Our Mission
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            </LinkContainer>

            {/** Support part of Navbar */}
            <NavLink 
              to = "/support" 
              href="/Support" 
              className = "Support-Header" 
              style={{
                fontWeight: "bold",
                color: "black"
              }}
              activeStyle={{
                color: "#FF4081"
              }}>
                Support
            </NavLink>

            {/** Contact part of Navbar */}
            <NavLink 
              to = "/contact" 
              href="/Contact" 
              className = "Contact-Header" 
              style={{
                fontWeight: "bold",
                color: "black",
              }}
              activeStyle={{
                color: "rgb(15, 185, 185)"
              }}>
                Contact
            </NavLink>

          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>

          {/** Social Media button component*/}
          <SocialFollow />

        </Navbar.Brand>
      </Navbar>
    </div>
  );
  }
}

export default Toolbar;

