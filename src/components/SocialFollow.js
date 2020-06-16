import React, { Component } from 'react';
import '../css/SocialFollow.css';
import "bootstrap/dist/css/bootstrap.min.css";

const fbLink = "https://www.facebook.com/DynamicsPerformanceTeam/";

const igLink = "https://www.instagram.com/dynamicsperformanceteam/?hl=en";

const mailLink = "mailto:dynamicsperformanceteam@gmail.com?subject=Hi, Dynamics Performance Team!";

class SocialFollow extends Component{
    render(){
        return(
            <div className="Social">
              <ul>

              <li>
                  <a href={fbLink} title="Youtube" target="_blank" rel="noopener noreferrer">
                    <img className="youtube" src={require("../images/youtubeIcon.png")} width="30px" height="30px" alt="error loading img"></img>
                  </a>
              </li>

              <li>
                  <a href={fbLink} title="Yelp" target="_blank" rel="noopener noreferrer">
                    <img className="yelp" src={require("../images/yelpIcon.png")} width="30px" height="30px" alt="error loading img"></img>
                  </a>
              </li>

              <li>
                  <a href={fbLink} title="Facebook" target="_blank" rel="noopener noreferrer">
                    <img className="facebook" src={require("../images/fbIcon.png")} width="30px" height="30px" alt="error loading img"></img>
                  </a>
              </li>
              <li>
                  <a href={igLink} title="Instagram" target="_blank" rel="noopener noreferrer">
                    <img className="instagram-icon" src={require("../images/igIcon.png")} width="30px" height="30px" alt="error loading img"></img>
                  </a>
                </li>
                <li>
                  <a href={mailLink} title="Email Us" target="_blank" rel="noopener noreferrer">
                    <img className="mail-icon" src={require("../images/mailIcon.png")} width="22px" height="22px" alt="error loading img"></img>
                  </a>
                </li>
                <li>
                  <a href="https://www.mailchimp.com" title ="Subscribe to our Newsletter!" target="_blank" rel="noopener noreferrer" alt="error loading img">Subscribe</a>
                </li>
              </ul>
            </div>
        );
      } 
}

export default SocialFollow;
