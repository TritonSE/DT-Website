import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import LogoText from './LogoText.js'
import SocialFollow from './SocialFollow';
import { NavLink} from 'react-router-dom';
import { LinkContainer} from 'react-router-bootstrap';
//import "../css/Toolbar.css"

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
            <NavDropdown title="About" id="collasible-nav-dropdown" className = "Dropdown-Header">
                    <LinkContainer to = "/About/AboutUs" exact activeClassName = "active">
                      <NavDropdown.Item> 
                        About Us
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to = "/About/History" exact activeClassName = "active">
                      <NavDropdown.Item>
                        History
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to = "/About/Directors" exact activeClassName = "active">
                      <NavDropdown.Item> 
                        Board of Directors 
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to = "/About/OurMission" href = "/Dropdown/Mission">
                      <NavDropdown.Item> 
                      Our Mission
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to = "/Gallery" exact activeClassName = "active">
                      <NavDropdown.Item> 
                        Gallery 
                      </NavDropdown.Item>
                    </LinkContainer>
              </NavDropdown>
            {/** Support part of Navbar */}
            <NavLink 
              to = "/Support" 
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

          
             <NavLink 
              to="/Audition"
              href= "/Audition"
              exact activeClassName = "active"
              className= "Auditions-Header"
              style={{
                fontWeight: "bold",
                color: "black",
              }}
              activeStyle={{
                color: "rgb(15, 185, 185)"
              }}>
                Audition
              </NavLink>

              </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>

          {/** Social Media button component, only display if not in mobile*/}
          {this.state.hideIcons ? null : <SocialFollow />}

        </Navbar.Brand>
        
      </Navbar>
    </div>
  );
  }
}

export default Toolbar;

