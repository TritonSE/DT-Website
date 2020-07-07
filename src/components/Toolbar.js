//Necessary Imports *DO NOT EDIT*
import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import LogoText from './LogoText.js'
import SocialFollow from './SocialFollow';
import { NavLink} from 'react-router-dom';
import { LinkContainer} from 'react-router-bootstrap';
import "../css/Toolbar.css"

//Necessary Variables. *CAN EDIT* 



/*This controls the default color the navbar text is*/
const defaultColor = "black"

/* These controls the color that the navbar links take when a user is actively on that page*/
const activeRed = "#FF4081"

/*This is the active blue color*/
const activeBlue =  "rgb(15, 185, 185)"

/**
 * This controls if the font in the navbar is bold or not. 
 */
const fontWeight = "bold"


/**
 * This is the Navigation Bar. It controls the NavBar you see at the top of the page. 
 */
class Toolbar extends Component {
 


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
              {/* this is the part you edit if you would like the "home" text to be different */}
                Home
            </NavLink>

            {/* This controls the About dropdown*/}
            <NavDropdown title="About" id="collapsible-nav-dropdown" className = "About-Dropdown">
                    <LinkContainer to = "/Dropdown/About">
                      <NavDropdown.Item> 
                        {/* this is the part you edit if you would like the "About Us" text to be different (in the dropdown)*/}
                        About Us
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to = "/Dropdown/History">
                      <NavDropdown.Item>
                        {/* this is the part you edit if you would like the "Histroy" text to be different (in the dropdown)*/}
                        History
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to = "/Dropdown/Directors">
                      <NavDropdown.Item>
                        {/* this is the part you edit if you would like the "Board of Direcotrs" text to be different (in the dropdown)*/} 
                        Board of Directors 
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to = "/Dropdown/mission">
                      <NavDropdown.Item>
                      {/* this is the part you edit if you would like the "Our Mission" text to be different (in the dropdown)*/}
                      Our Mission
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/Support">
                  <NavDropdown.Item>
                    {/* this is the part you edit if you would like the "Support Us" text to be different (in the dropdown)*/}
                    Support Us
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              {/* This controls the Audition part of the NavBar*/} 
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
              {/* this is the part you edit if you would like the "Audition" text to be different */}
                Audition
              </NavLink>
              
              {/** This controls the gallery portion of the NavBar */}
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
                  color: activeBlue
                }}>
                  {/* this is the part you edit if you would like the "Gallery" text to be different*/}
                 Gallery
              </NavLink>
              </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>

          {/** This is the social media icons*/}
          <div className = "social_media"> 
          <SocialFollow />
          </div>

        </Navbar.Brand>
        
      </Navbar>
    </div>
  );
  }
}

export default Toolbar;

