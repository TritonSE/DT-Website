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
    let visited = sessionStorage["check"];
    if(visited) {
      return;
    }
    window.location.reload();
      sessionStorage["check"]= true;
    
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
         <Tabs className="tabholder" fill defaultActiveKey="photos">
           <TabPane className="tab1" eventKey="photos" title="Photos">
             <div style={{width: "100%", height: "100%",marginTop:"30px"}}>
             <div className="text-modal-container"> 
               <h1 className="tab-title"> Photo Gallery </h1>
             </div> 
            <GalleryImages/>
            </div>
            </TabPane>
         
         </Tabs>
      </div>
    );
  }
}

export default Gallery

