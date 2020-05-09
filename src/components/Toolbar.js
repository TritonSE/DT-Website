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
          <Nav className ="ml-auto">
            
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

            <NavDropdown title="More" id="basic-nav-dropdown" className = "Dropdown-Header">
                    <LinkContainer to = "/Dropdown/Directors" exact activeClassName = "active">
                      <NavDropdown.Item> 
                        Board of Directors 
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to = "/Dropdown/mission" href = "/Dropdown/mission">
                      <NavDropdown.Item> 
                      Our Mission
                      </NavDropdown.Item>
                    </LinkContainer>
              </NavDropdown>
  
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

             <NavLink 
              to="/Auditions"
              href= "/Auditions"
              exact activeClassName = "active"
              className= "Auditions-Header"
              style={{
                fontWeight: "bold",
                color: "black",
              }}
              activeStyle={{
                color:"rgb(15, 185, 185)"
              }}>
                Auditions
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

