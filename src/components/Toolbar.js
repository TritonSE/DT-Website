import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import BlinkingText from './BlinkingText.js'
import SocialFollow from './SocialFollow';
import { Link } from 'react-router-dom';
import '../css/Toolbar.css'

class Toolbar extends Component {

  handleAboutRedirect = page => e => {
		e.preventDefault();
		this.props.history.push("" + page);	// redirects to specified page
	}

  render() {
    const aboutPage = "/about";
		const supportPage = "/support";
    const contactPage = "/contact";
    const homePage = "/home"
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
              <Link className="App-link" 
					    onClick={this.handleAboutRedirect(homePage)}
          		  rel="noopener noreferrer"
        		  > </Link>
              </Nav.Link>
            <Nav.Link href="/About">
              <h2 className = "About-Header"> About </h2>
              <Link className="App-link" 
					    onClick={this.handleAboutRedirect(aboutPage)}
          		  rel="noopener noreferrer"
        		  > </Link>	
              </Nav.Link>
            <Nav.Link href="/Support">
              <h3 className = "Support-Header">Support</h3></Nav.Link>
              <Link className="App-link" 
					onClick={this.handleAboutRedirect(supportPage)}
          		rel="noopener noreferrer"
        		></Link>
            <Nav.Link href="/Contact">
            <h4 className = "Contact-Header">Contact</h4>
            <Link className="App-link" 
					onClick={this.handleAboutRedirect(contactPage)}
          		rel="noopener noreferrer"
        		>
        		</Link>
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


  
