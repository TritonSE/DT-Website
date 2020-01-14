import React, { Component } from 'react';
import '../css/SocialFollow.css';

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
                <SocialIcon icon={fbIcon} link={fbLink}/>
                <SocialIcon icon={igIcon} link={igLink}/>
                <SocialIcon icon={mailIcon} link={mailLink}/>
                <li><a>Subscribe</a></li>
              </ul>
            </div>
        );
    }
}

class SocialIcon extends Component {
  render(){
    return(
      <li>
        <a href={this.props.link}>
          <i src={this.props.icon}></i>
        </a>
      </li>
    );
  }
}

export default SocialFollow;