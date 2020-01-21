import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {NavLink} from 'reactstrap';
import BlinkingText from './BlinkingText.js'
import LogoText from './LogoText.js'
import SocialFollow from './SocialFollow';
import { Link } from 'react-router-dom';
import '../css/Toolbar.css'

class Toolbar extends Component {

  render() {
  return(
    <div>
      <Navbar bg = "custom" expand="lg">
      <Navbar.Brand href="/Home">
        {/** Image/Text for dynamics team*/}
        <LogoText/>

        {/** Links images and text to home */}
        <NavLink tag={Link}className="App-link" 
		  			to="/"
          		  rel="noopener noreferrer"
        > </NavLink>

      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">

            {/** Home part of Navbar */}
            <NavLink tag={Link} to="/Home">
              < h1 className="Home-Header">Home</h1>
              {/** Links home in navbar to home */}
              <Link className="App-link" 
					  to="/"
          		  rel="noopener noreferrer"
        		  > </Link>
              </NavLink>

            {/** About part of Navbar */}
            <NavLink tag={Link} to="/About">
              <h2 className = "About-Header"> About </h2>
              {/** Links about in navbar to about page */}
              <Link className="App-link" 
          		  rel="noopener noreferrer"
        		  > </Link>	
              </NavLink>

            {/** Support part of Navbar */}
            <NavLink tag={Link} to="/Support">
              <h3 className = "Support-Header">Support</h3>
               {/** Links support in navbar to support page */}
              <Link className="App-link" 
          		rel="noopener noreferrer"
        		> </Link>
            </NavLink>

            {/** Contact part of Navbar */}
            <NavLink tag={Link} to="/Contact">
            <h4 className = "Contact-Header">Contact</h4>
             {/** Links contact in navbar to contact page */}
            <Link className="App-link" 
          		rel="noopener noreferrer"
        		>
        		</Link>
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


  
