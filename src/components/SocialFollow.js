import React, { Component } from 'react';
import '../css/SocialFollow.css';

class SocialFollow extends Component{
    render(){
        return(
            <div className="Social">
              <ul>
                <li><a href="www.facebook.com"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="www.twitter.com"><i class="fab fa-twitter"></i></a></li>
                <li><a href="www.instagram.com"><i class="fab fa-instagram"></i></a></li>
                <li><a href="www.mail.google.com"><i class="fas fa-envelope-open-text"></i> Subscribe</a></li>
              </ul>
            </div>
        );
    }
}

export default SocialFollow;