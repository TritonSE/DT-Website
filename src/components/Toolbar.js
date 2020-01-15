import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import BlinkingText from './BlinkingText.js'
import LogoText from './LogoText.js'
import SocialFollow from './SocialFollow';
import { Link } from 'react-router-dom';
import '../css/Toolbar.css'

var pageArray = [true, false, false, false];
var homeClass = "activeHome";
var aboutClass = "activeAbout";
var supportClass = "activeSupport";
var contactClass = "activeContact";

class Toolbar extends Component {

  
  //function to handle page redirects using React router (see App.js)
  handleAboutRedirect = page => e => {
    if(page === "../pages/home")
      this.changeArray(0);
    if(page === "/about")
      this.changeArray(1);
    if(page === "/support")
      this.changeArray(2);
    if(page === "../pages/contact")
      this.changeArray(3);
		e.preventDefault();
		this.props.history.push("" + page);	// redirects to specified page
  }
  
  changeArray(indexChanged){
    for(var x = 0; x< pageArray.length; x++)
    {
        if(indexChanged === x)
          pageArray[x] = true;
        else
          pageArray[x] = false;

    }
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
        {/** Image/Text for dynamics team*/}
        <LogoText/>

        {/** Links images and text to home */}
        <Link className="App-link" 
					    onClick={this.handleAboutRedirect(homePage)}
          		  rel="noopener noreferrer"
        > </Link>

      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">

            {/** Home part of Navbar */}
            <Nav.Link href="/Home">
              < h1 className= {stuff} >Home</h1>
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


  
