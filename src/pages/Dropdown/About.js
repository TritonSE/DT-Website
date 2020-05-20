import React, { Component } from 'react';
import Toolbar from "../../components/Toolbar"

class About extends Component {
  render() {
    return(
      <div>
         <Toolbar bool={true}></Toolbar>
      <h1 className="Title2"> About Page</h1>
      </div>
    );
  }
}

export default About

