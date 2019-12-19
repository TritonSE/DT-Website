import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import BlinkingText from './BlinkingText.js'
import SocialFollow from './SocialFollow';
import { Link } from 'react-router-dom';
import '../css/Toolbar.css'

class Toolbar extends Component {
  //function to handle page redirects using React router (see App.js)
  handleAboutRedirect = page => e => {
		e.preventDefault();
		this.props.history.push("" + process.env.PUBLIC_URL + page);	// redirects to specified page
	}

  render() {
    const aboutPage = "/about";
		const supportPage = "/support";
    const contactPage = "../pages/contact";
    const homePage = "../pages/home"
  return(
    <div>
      <Navbar bg = "custom" expand="lg">
      <Navbar.Brand href="/Home">
        {/** Image for dynamics team*/}
      <img
        src = {require("../images/logo1.png")}
        style={{width:120, marginTop: 0}}
        alt = "Could not load"
        className = "floatingPhoto"
        />

        {/** Links images and text to home */}
        <Link className="App-link" 
					    onClick={this.handleAboutRedirect(homePage)}
          		  rel="noopener noreferrer"
        > </Link>

      {/** Component for text next to image component*/}
        <BlinkingText/>

      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">

            {/** Home part of Navbar */}
            <Nav.Link href="/Home">
              < h1 className="Home-Header">Home</h1>
              {/** Links home in navbar to home */}
              <Link className="App-link" 
					    onClick={this.handleAboutRedirect(homePage)}
          		  rel="noopener noreferrer"
        		  > </Link>
              </Nav.Link>

            {/** About part of Navbar */}
            <Nav.Link href="/About">
              <h2 className = "About-Header"> About </h2>
              {/** Links about in navbar to about page */}
              <Link className="App-link" 
					    onClick={this.handleAboutRedirect(aboutPage)}
          		  rel="noopener noreferrer"
        		  > </Link>	
              </Nav.Link>

            {/** Support part of Navbar */}
            <Nav.Link href="/Support">
              <h3 className = "Support-Header">Support</h3>
               {/** Links support in navbar to support page */}
              <Link className="App-link" 
					    onClick={this.handleAboutRedirect(supportPage)}
          		rel="noopener noreferrer"
        		> </Link>
            </Nav.Link>

            {/** Contact part of Navbar */}
            <Nav.Link href="/Contact">
            <h4 className = "Contact-Header">Contact</h4>
             {/** Links contact in navbar to contact page */}
            <Link className="App-link" 
					onClick={this.handleAboutRedirect(contactPage)}
          		rel="noopener noreferrer"
        		>
        		</Link>
            </Nav.Link>

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


  
