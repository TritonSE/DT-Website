import React, { Component } from 'react';
import Toolbar from "../../components/Toolbar";
import GalleryImages from "../../components/GalleryImages.js";
import Footer from '../../components/Footer.js';
import '../../css/Gallery.css';
import { Tabs, TabPane } from 'react-bootstrap';

class Gallery extends Component {
  render() {
    return(
      <div>
         <Toolbar bool={true}/>
         <Tabs className="tabholder Teal" fill defaultActiveKey="photos">
           <TabPane eventKey="photos" title="Photos">
             <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
             <div className="photos-container"> 
               <h1 className="tab-title Pink"> Photo Gallery </h1>
             </div> 
            <GalleryImages/>
            <Footer />
            </div>
            </TabPane>
         
           <TabPane eventKey="videos" title="Videos">
              <div>
                <div style={{alignItems: "center", justifyContent: "center"}}>
                  <div className="videos-container"> 
                    <h1 className="tab-title Pink"> Video Gallery </h1>
                    <img className="DPT-logo" src={require("../../images/logo1.png")}></img>
                    <br />
                    <p className="subscribe-text"> For more videos, click <a className="Pink" target="_blank" href="https://www.youtube.com/channel/UCLVld8eG5THi_R1MpLobU4g">here</a> to subscribe to our Youtube channel! </p>
                  </div> 
                </div>

                <iframe className="youtube-iframe" src="https://www.youtube.com/embed/+lastest?list=PLCyEpHAXCjJMDXWsfMdWfD1NHh3zoYa1m" frameborder="0" allowFullScreen></iframe>
                <Footer />
              </div>
          </TabPane>
         </Tabs>
      </div>
    );
  }
}

export default Gallery

