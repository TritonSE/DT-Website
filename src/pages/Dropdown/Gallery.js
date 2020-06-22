import React, { Component } from 'react';
import Toolbar from "../../components/Toolbar";
import GalleryImages from "../../components/GalleryImages.js";

class Gallery extends Component {
  render() {

    return(
      <div>
         <Toolbar />
         <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
             <h1 style={{color: '#FF4081'}}>
                 Dynamic Gallery
             </h1>
            <GalleryImages/>
         </div>
      </div>
    );
  }
}

export default Gallery

