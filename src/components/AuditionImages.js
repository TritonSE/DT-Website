import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import first from '../images/audition/first.jpg';
import second from '../images/audition/second.jpg';
import '../css/Audition.css';

class AuditionImages extends Component {
    render() {
        return(
            <div>
                <div>
                <Image src={first} alt="Couldn't load IMG" className="auditionIMG image1"/>
            </div>
            <div>
                <Image src={second} alt="Couldn't load IMG" className="auditionIMG image2"/>
            </div>
            </div>
        );
    }
}

export default AuditionImages;