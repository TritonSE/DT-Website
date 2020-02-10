import React, { Component, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import '../css/SocialFollow.css';
import '../css/Global.css';
import "bootstrap/dist/css/bootstrap.min.css";

const fbIcon = "../images/fbIcon.png";
const fbLink = "https://www.facebook.com/DynamicsPerformanceTeam/";

const igIcon = "../images/igIcon.png";
const igLink = "https://www.instagram.com/dynamicsperformanceteam/?hl=en";

const mailIcon = "../images/mailIcon.png";
const mailLink = "mailto:dynamicsperformanceteam@gmail.com?subject=Hi, Dynamics Performance Team!";

class SocialFollow extends Component{
    render(){
        return(
            <div className="Social">
              <ul>
              <li>
                  <a href={fbLink} target="_blank">
                    <img src={require("../images/fbIcon.png")} width="30px" height="30px"></img>
                  </a>
              </li>
              <li>
                  <a href={igLink} target="_blank">
                    <img src={require("../images/igIcon.png")} width="30px" height="30px"></img>
                  </a>
                </li>
                <li>
                  <a href={mailLink} target="_blank">
                    <img src={require("../images/mailIcon.png")} width="22px" height="22px"></img>
                  </a>
                </li>
                <li>
                  <a href="https://www.mailchimp.com" target="_blank">Subscribe</a>
                </li>
              </ul>
            </div>
        );
      } 
}

export default SocialFollow;
