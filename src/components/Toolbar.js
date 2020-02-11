import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import LogoText from './LogoText.js'
import SocialFollow from './SocialFollow';
import { NavLink} from 'react-router-dom';
import '../css/Toolbar.css';
import '../css/Global.css';


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
              className= "Home-Header NavBarHeader"
              style={{
                fontWeight: "bold",
                color: "black",
              }} 
              activeStyle={{
                color: "#FF4081"
              }}> 
                Home
            </NavLink>

            {/** About part of Navbar */}
            <NavLink 
              to= "/about"
              href="/About" 
              className = "About-Header NavBarHeader" 
              style={{
                fontWeight: "bold",
                color: "black"
              }}
              activeStyle={{
                color: "#FF4081"
              }} > 
                About 	
            </NavLink>

            {/** Support part of Navbar */}
            <NavLink 
              to = "/support" 
              href="/Support" 
              className = "Support-Header NavBarHeader" 
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
              className = "Contact-Header NavBarHeader" 
              style={{
                fontWeight: "bold",
                color: "black",
              }}
              activeStyle={{
                color: "#FF4081"
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
