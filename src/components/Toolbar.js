//Necessary Imports *DO NOT EDIT*
import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import LogoText from './LogoText.js'
import SocialFollow from './SocialFollow';
import { NavLink} from 'react-router-dom';
import { LinkContainer} from 'react-router-bootstrap';
import "../css/Toolbar.css"

//Necessary Variables. *CAN EDIT* 

/*this controls the URL that the support links to. Currently, it is Paypal */ 
const url = "https://www.paypal.me/dynamicsperformance"

/*This controls the default color the navbar text is*/
const defaultColor = "black"

/* These controls the color that the navbar links take when a user is actively on that page*/
const activeRed = "#FF4081"

/**
 * This controls if the font in the navbar is bold or not. 
 */
const fontWeight = "bold"


/**
 * This is the Navigation Bar. It controls the NavBar you see at the top of the page. 
 */
class Toolbar extends Component {
 
  
 /**
  * This function handles linking to the PayPal page in the NavBar.
  */
  handlePaypal() {
    window.open(url, "_blank");
  }

 render() {
  return(
    <div>
      <Navbar bg = "custom" expand="md">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      {/** This controls the logo shown in the top left of the website*/}
      <NavLink className = "logo-text" to="/" href = "/Home" >
        <LogoText/>
      </NavLink>
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className ="ml-auto">
            
            {/** This controls the "home" part of Navbar */}
            <NavLink  
              to="/" 
              href = "/Home" 
              exact activeClassName = "active" 
              className= "Home-Header" 
              style={{
                fontWeight: fontWeight,
                color: defaultColor,
              }} 
              activeStyle={{
                color: activeRed
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
                fontWeight: fontWeight,
                color: defaultColor,
              }}
              activeStyle={{
                color: activeRed
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
                color: defaultColor 
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
                  fontWeight: fontWeight,
                  color: defaultColor,
                }}
                activeStyle={{
                  color: activeRed
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

