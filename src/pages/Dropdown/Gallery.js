import React, { Component } from 'react';
import Toolbar from "../../components/Toolbar";
import GalleryImages from "../../components/GalleryImages.js";
import Footer from '../../components/Footer.js';
import ReactModal from 'react-modal';
import '../../css/Gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }
  render() {

    return(
      <div>
         <Toolbar />
         <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
             <div className="text-modal-container"> 
               <h1 className="gallery-title"> DPT Gallery </h1>
               <h1 className="modal-text" onClick={() => {this.setState({showModal: true})}}> Youtube Playlist >>></h1>
             </div> 
            <GalleryImages/>
         </div>
         
         <ReactModal shouldCloseOnEsc={true} onRequestClose={()=>{this.setState({showModal: false})}} isOpen={this.state.showModal}>
           <div className="youtube-title-container"> 
              <h1 className="youtube-title"> DPT Youtube Playlist </h1>
              <img className="DTP-logo" src={require("../../images/logo1.png")}></img>
              <br />
              <p> For more videos, click <a target="_blank" href="https://www.instagram.com/dynamicsperformanceteam/?hl=en">here</a> to visit our Youtube channel! </p>
              <button className="modal-button" onClick={() => {this.setState({showModal: false})}}> Close </button>
           </div> 
          <iframe className="youtube-iframe" src="https://www.youtube.com/embed/+lastest?list=PLCyEpHAXCjJMDXWsfMdWfD1NHh3zoYa1m" frameborder="0" allowFullScreen></iframe>
         </ReactModal>
         <Footer/>
      </div>
    );
  }
}

export default Gallery

