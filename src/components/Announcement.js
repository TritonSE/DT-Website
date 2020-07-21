import React from 'react';
import '../css/Announcement.css';

class Announcement extends React.Component {
    hideAnnouncement = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <div className="Announcement-Container"> 
                <p className="Announcement-Text Announcement-Text-Padding"> Join us <a className="Announcement-Text" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline"}} href="https://www.youtube.com/channel/UCLVld8eG5THi_R1MpLobU4g"> here</a> for our virtual show "Legends" on August 1st at 6pm! </p>
            </div>
        )
    }
}

export default Announcement;