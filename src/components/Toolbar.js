//Necessary Imports *DO NOT EDIT*
import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import LogoText from './LogoText.js'
import SocialFollow from './SocialFollow';
import { NavLink} from 'react-router-dom';
import { LinkContainer} from 'react-router-bootstrap';
import "../css/Toolbar.css"
import '../css/Global.css';


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
  constructor(props) {
    super(props);
    this.state = {
      hideIcons: false,
    }
  }
  
  componentDidMount() {
   if(this.props.bool === true){
      require('../css/Toolbar2.css');
    }
    else{
      require('../css/Toolbar.css');
    }

    // determine whether social icons should be hidden
    window.addEventListener('resize', this.updateDisplayIcons.bind(this));
    this.updateDisplayIcons()
  }

  updateDisplayIcons() {
    let hideIcons = window.innerWidth <= 1150;

    // only update icon display when necessary
    if (hideIcons !== this.state.hideIcons) {
      this.setState({hideIcons: hideIcons});
    }
  }

  componentWillUnmount() {
    window.location.reload(false);
  }

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
              exact activeClassName = "Pink-Active active" 
              className= "Home-Header Pink" 
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

            <NavDropdown title="About" id="collasible-nav-dropdown" className = "About-Dropdown">
                    <LinkContainer to = "/About/AboutUs" exact activeClassName = "active">
                      <NavDropdown.Item> 
                        {/* this is the part you edit if you would like the "About Us" text to be different (in the dropdown)*/}
                        About Us
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to = "/About/History">
                      <NavDropdown.Item>
                        {/* this is the part you edit if you would like the "Histroy" text to be different (in the dropdown)*/}
                        History
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to = "/About/Directors">
                      <NavDropdown.Item>
                        {/* this is the part you edit if you would like the "Board of Direcotrs" text to be different (in the dropdown)*/} 
                        Board of Directors 
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to = "/About/OurMission">
                      <NavDropdown.Item>
                      {/* this is the part you edit if you would like the "Our Mission" text to be different (in the dropdown)*/}
                      Our Mission
                      </NavDropdown.Item>
                    </LinkContainer>                    
                    <LinkContainer to = "/About/Audition">
                      <NavDropdown.Item>
                      {/* this is the part you edit if you would like the "Our Mission" text to be different (in the dropdown)*/}
                      Audition
                      </NavDropdown.Item>
                    </LinkContainer>
              </NavDropdown>

              <NavLink
              to="/Gallery"
              href="/Gallery"
              exact activeClassName = "Pink-Active active"
              className = "Gallery-Header Pink"
              style={{
                fontWieght: "bold",
                color:"black"
              }}>
                Gallery
              </NavLink>

              {/** This controls the Support dropdown for the navbar*/}
              <NavDropdown title="Support" id="collapsible-nav-dropdown" className = "Support-Dropdown">
                <LinkContainer to="/Support">
                  <NavDropdown.Item>
                    {/* this is the part you edit if you would like the "Support Us" text to be different (in the dropdown)*/}
                    Support Us
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={this.handlePaypal} eventKey={3.2}
                style={{
                backgroundColor: "white",
                color: defaultColor 
                }}>
                {/* this is the part you edit if you would like the "PayPal" text to be different (in the dropdown)*/}
                Paypal
                </NavDropdown.Item>
            </NavDropdown>
              
                </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>

          {/** This is the social media icons*/}
          {this.state.hideIcons ? null : <SocialFollow />}
        </Navbar.Brand>
        
      </Navbar>
    </div>
  );
  }
}

export default Toolbar;

