import React, { Component } from 'react';
import Toolbar from "../../components/Toolbar"
import Footer from "../../components/Footer";

class About extends Component {
  render() {
    return(
      <div>
         <Toolbar bool={true}></Toolbar>
      <h1 className="Title2"> About Page</h1>
      <Footer/>
      </div>
    );
  }
}

export default About

