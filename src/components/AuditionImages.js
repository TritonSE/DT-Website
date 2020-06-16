import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import firstImg from '../images/audition/first.jpg';
import secondImg from '../images/audition/second.jpg';
import '../css/Audition.css';
import NoRightClickImg from './NoRightClickImg';

class AuditionImages extends Component {
    render() {
        return(
            <div>
                <NoRightClickImg src={firstImg} alt="Couldn't load IMG" imgClassName="auditionIMG image1"/>
                <NoRightClickImg src={secondImg} alt="Couldn't load IMG" imgClassName="auditionIMG image2"/>
            </div>
        );
    }
}

export default AuditionImages;