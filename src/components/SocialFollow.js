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
                    <img src={require("../images/fbIcon.png")} width="33px" height="33px"></img>
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
                  <a href="#exampleModal" data-toggle="modal">
                    Subscribe
                  </a>
                </li>
              </ul>
                    <div class="modal fade" id="Home#exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                          </div>
                          <div class="modal-body">
                              Hello this a test.
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                          </div>
                        </div>
                        </div>
                    </div>
            </div>
        );
    }
}

class SocialIcon extends Component {
  render(){
    return(
      <li>
        <a href={this.props.link}>
          <img src={this.props.icon}/>
        </a>
      </li>
    );
  }
}

export default SocialFollow;