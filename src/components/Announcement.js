import React from 'react';
import '../css/Announcement.css';
import '../css/Global.css';

class Announcement extends React.Component {
    hideAnnouncement = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <div className="Announcement-Container Teal-Background"> 
                <p className="Announcement-Text Announcement-Text-Padding"> Check out our 2020 show <a className="Announcement-Text" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline"}} href="https://www.youtube.com/channel/UCLVld8eG5THi_R1MpLobU4g"> here.</a></p>
            </div>
        )
    }
}

export default Announcement;