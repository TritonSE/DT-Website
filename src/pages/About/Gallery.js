import React, { Component } from 'react';
import Toolbar from "../../components/Toolbar";
import GalleryImages from "../../components/GalleryImages.js";
import Footer from '../../components/Footer.js';
import '../../css/Gallery.css';
import { Tabs, TabPane } from 'react-bootstrap';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
       isDesktop: true
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    console.log(window.innerHeight, window.innerWidth);
		window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
		if (window.innerWidth > 800 && !this.state.isDesktop){
			this.setState({ isDesktop: true });
		}
    
    if(window.innerWidth <= 800 && this.state.isDesktop){
			this.setState({ isDesktop: false });
		}
	}
  render() {

    return(
      <div>
         <Toolbar />
             <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
             <div className="text-modal-container"> 
               <h1 className="tab-title"> Photo Gallery </h1>
             </div> 
            <GalleryImages/>
            <Footer />
            </div>
         
      </div>
    );
  }
}

export default Gallery

