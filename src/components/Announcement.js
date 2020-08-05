import React from 'react';
import '../css/Announcement.css';

class Announcement extends React.Component {
    hideAnnouncement = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <div style={{backgroundColor: "rgb(15,185,185)"}}className="Announcement-Container"> 
                <p className="Announcement-Text Announcement-Text-Padding"> Check out our 2020 show <a className="Announcement-Text" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline"}} href="https://www.youtube.com/channel/UCLVld8eG5THi_R1MpLobU4g"> here.</a></p>
            </div>
        )
    }
}

export default Announcement;