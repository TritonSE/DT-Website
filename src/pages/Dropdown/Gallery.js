import React, { Component } from 'react';
import Toolbar from "../../components/Toolbar";
import GalleryImages from "../../components/GalleryImages.js";
import Footer from '../../components/Footer.js';
import '../../css/Gallery.css';

class Gallery extends Component {
  render() {

    return(
      <div>
        <Toolbar />
        <h1 className="Title-Header">
            Dynamic Gallery
        </h1>
        <GalleryImages/>
        <Footer/>
      </div>
    );
  }
}

export default Gallery

