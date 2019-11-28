import React, { Component } from 'react';
import '../css/SocialFollow.css';

class SocialFollow extends Component{
    render(){
        return(
            <div className="Social">
              <ul>
              <li>
                <a href="www.facebook.com">
                <img className="Social"
                src = {require("../images/FACE.png")}
                alt = "Could not load"
                />
                </a>
              </li>
                
                <li>
                  <a href="www.instagram.com">
                  <img
                  src = {require("../images/INSTA.png")}
                  alt = "Could not load"
                  />
                  </a>
                </li>
                
                <li>
                  <a href="www.twitter.com">
                  <img
                  src = {require("../images/TWITT.png")}
                  alt = "Could not load"
                  />
                  </a>
                </li>

                <li>
                  <a href="www.mail.google.com">
                      <img
                      src = {require("../images/MAIL.png")}
                      alt = "Could not load"
                      />
                  <span>Subscribe</span>
                  </a> 
                </li>

              </ul>
            </div>
        );
    }
}

export default SocialFollow;