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
         <Tabs className="tabholder" fill defaultActiveKey="photos">
           <TabPane eventKey="photos" title="Photos">
             <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
             <div className="text-modal-container"> 
               <h1 className="tab-title"> Photo Gallery </h1>
             </div> 
            <GalleryImages/>
            <Footer />

            </div>
            </TabPane>
         
          <TabPane eventKey="videos" title="Videos">
           {this.state.isDesktop ? 
           <div>
          <div style={{alignItems: "center", justifyContent: "center"}}>
           <div className="gallery-text-container"> 
              <h1 className="tab-title"> Video Gallery </h1>
              <img className="DPT-logo" src={require("../../images/logo1.png")}></img>
              <br />
              <p style={{marginTop: "-4%"}}> For more videos, click <a target="_blank" href="https://www.youtube.com/channel/UCLVld8eG5THi_R1MpLobU4g">here</a> to subscribe to our Youtube channel! </p>
           </div> 
          <iframe className="youtube-iframe" src="https://www.youtube.com/embed/+lastest?list=PLCyEpHAXCjJMDXWsfMdWfD1NHh3zoYa1m" frameborder="0" allowFullScreen></iframe>
          </div>
          <Footer />
          </div>
          : 
          <div className="no-scroll"> 
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}> 
              <img className="DPT-logo" src={require("../../images/logo1.png")}></img>
              <h1 className="tab-title"> Video Gallery </h1>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>  
            <iframe className="youtube-iframe" src="https://www.youtube.com/embed/+lastest?list=PLCyEpHAXCjJMDXWsfMdWfD1NHh3zoYa1m" frameborder="0" allowFullScreen></iframe>
            <p className="subscribe-text"> For more videos, click <a target="_blank" href="https://www.youtube.com/channel/UCLVld8eG5THi_R1MpLobU4g">here</a> to subscribe to our Youtube channel! </p>
            </div>  
            <div className="bottom">
            <Footer />
            </div>


          </div>
          }
         </TabPane>
         </Tabs>

      </div>
    );
  }
}

export default Gallery

