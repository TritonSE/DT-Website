import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Announcement.css';
import '../css/Global.css';

class Announcement2 extends React.Component {
    hideAnnouncement = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <div className="Announcement-Container Pink-Background"> 
                <p className="Announcement-Text Announcement-Text-Padding"> We are accepting virtual auditions until August 9th. Please click <Link style={{color: "white", textDecoration: "underline"}}to="/About/Audition"> here</Link> to download our information packets. </p>
            </div>
        )
    }
}

export default Announcement2;