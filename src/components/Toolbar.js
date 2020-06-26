import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import LogoText from './LogoText.js'
import SocialFollow from './SocialFollow';
import { NavLink} from 'react-router-dom';
import { LinkContainer} from 'react-router-bootstrap';
import "../css/Toolbar.css"
class Toolbar extends Component {
  handlePaypal() {
    window.open("https://www.paypal.me/dynamicsperformance", "_blank");
  }

 render() {
  return(
    <div>
      <Navbar bg = "custom" expand="md">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <NavLink className = "logo-text" to="/" href = "/Home" >
        {/** Image/Text for dynamics team*/}
        <LogoText/>
      </NavLink>
      <Navbar.Collapse id="responsive-navbar-nav">
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
            <NavDropdown title="About" id="collapsible-nav-dropdown" className = "Dropdown-Header">
                    <LinkContainer to = "/Dropdown/About" exact activeClassName = "active">
                      <NavDropdown.Item> 
                        About Us
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to = "/Dropdown/History" exact activeClassName = "active">
                      <NavDropdown.Item>
                        History
                      </NavDropdown.Item>
                    </LinkContainer>
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
                color: "#FF4081"
              }}>
                Audition
              </NavLink>

              <NavDropdown title="Support"
            id="collapsible-nav-dropdown" className = "Support-Header">
                <LinkContainer to="/Support">
                  <NavDropdown.Item>
                    Support Us
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={this.handlePaypal} eventKey={3.2}
                style={{
                backgroundColor: "white",
                color: "black" 
                }}>
                Paypal
                </NavDropdown.Item>
            </NavDropdown>

              <NavLink
                to="/Gallery"
                href="/Gallery"
                exact activeClassName = "active"
                className= "Gallery-Header"
                style={{
                  fontWeight: "bold",
                  color: "black",
                }}
                activeStyle={{
                  color: "#FF4081"
                }}>
                 Gallery
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

