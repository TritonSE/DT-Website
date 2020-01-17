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
/**
  constructor(){
    super()
    this.handleAboutRedirect = this.handleAboutRedirect.bind(this);
    this.changeArray = this.changeArray.bind(this);
    this.changeClass = this.changeArray.bind(this);
  }
   */

  //function to handle page redirects using React router (see App.js)
  handleAboutRedirect = page => event => {
		event.preventDefault();
    this.props.history.push("" + page);	// redirects to specified page
  }
  
  changeArray(page){
    if(page === "../pages/home")
    {
      pageArray[0] = true;
      pageArray[1] = false;
      pageArray[2] = false;
      pageArray[3] = false;
    }
    if(page === "/about")
    {
      pageArray[1] = true;
      pageArray[0] = false;
      pageArray[2] = false;
      pageArray[3] = false;
    }
    if(page === "/support")
    {
      pageArray[2] = true;
      pageArray[0] = false;
      pageArray[1] = false;
      pageArray[3] = false;
    }
    if(page === "../pages/contact")
    {
      pageArray[0] = false;
      pageArray[1] = false;
      pageArray[2] = false;
      pageArray[3] = true;

    }

    console.log(page);
    for(var y = 0; y< pageArray.length; y++)
      console.log(y + " " + pageArray[y]);

      this.handleAboutRedirect(page)

    //this.changeClass()
  }

  changeClass(){
    if(pageArray[0])
    {
      homeClass = "activeHome";
      aboutClass = "About-Header";
      supportClass = "Support-Header";
      contactClass = "Contact-Header";
    }
    else{
      if(pageArray[1]){
        homeClass = "Home-Header";
        aboutClass = "activeAbout";
        supportClass = "Support-Header";
        contactClass = "Contact-Header";
      }
      else{
        if(pageArray[2]){
          homeClass = "Home-Header";
          aboutClass = "About-Header";
          supportClass = "activeSupport";
          contactClass = "Contact-Header";
        }
        else{
          homeClass = "Home-Header";
          aboutClass = "About-Header";
          supportClass = "Support-Header";
          contactClass = "activeContact";
        }
      }
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
					    onClick={this.changeArray(homePage)}
          		  rel="noopener noreferrer"
        > </Link>

      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">

            {/** Home part of Navbar */}
            <Nav.Link href="/Home">
              < h1 className= {homeClass} >Home</h1>
              {/** Links home in navbar to home */}
              <Link className="App-link" 
					    onClick={this.changeArray(homePage)}
                rel="noopener noreferrer"
        		  > </Link>
              </Nav.Link>

            {/** About part of Navbar */}
            <Nav.Link href="/About">
              <h2 className = {aboutClass}> About </h2>
              {/** Links about in navbar to about page */}
              <Link className="App-link" 
					    onClick={this.changeArray(aboutPage)}
          		  rel="noopener noreferrer"
        		  > </Link>	
              </Nav.Link>

            {/** Support part of Navbar */}
            <Nav.Link href="/Support">
              <h3 className = {supportClass}>Support</h3>
               {/** Links support in navbar to support page */}
              <Link className="App-link" 
					    onClick={this.changeArray(supportPage)}
          		rel="noopener noreferrer"
        		> </Link>
            </Nav.Link>

            {/** Contact part of Navbar */}
            <Nav.Link href="/Contact">
            <h4 className = {contactClass}>Contact</h4>
             {/** Links contact in navbar to contact page */}
            <Link className="App-link" 
					onClick={this.changeArray(contactPage)}
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


  
