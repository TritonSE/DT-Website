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
              <li>
                  <a href={fbLink}>
                    <img src={require("../images/fbIcon.png")} width="30px" height="30px"></img>
                  </a>
              </li>
              <li>
                  <a href={igLink}>
                    <img src={require("../images/igIcon.png")} width="30px" height="30px"></img>
                  </a>
                </li>
                <li>
                  <a href={mailLink}>
                    <img src={require("../images/mailIcon.png")} width="22px" height="22px"></img>
                  </a>
                </li>
                <li>
                  <a>
                    Subscribe
                  </a>
                </li>
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
          <img src={require(this.props.icon)}></img>
        </a>
      </li>
    );
  }
}

export default SocialFollow;