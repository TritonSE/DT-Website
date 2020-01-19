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
                <a href="#myModal" role="button" class="btn" data-toggle="modal">
                    Subscribe
                  </a>
                </li>
              </ul>

              <div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h3 id="myModalLabel">Modal header</h3>
                </div>
                <div class="modal-body">
                  <form method="post">
                      <button type="submit">Submit</button>
                  </form>
                </div>
                <div class="modal-footer">
                  <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                  <button class="btn btn-primary">Save changes</button>
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