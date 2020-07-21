// component for different levels of audition eligibility
import React, { Component } from "react";

class AuditionEligibility extends Component {
  render() {
    return (
      <div className="colored-bullets font Pink-Bullets">
        <div>
          <h2>DPT Senior Team eligibility:</h2>
          <ul>
            <li>12+ years old.</li>
            <a className="Teal Underline" href={require("../files/AGE_5-7_Dynamites_Audition_Information.pdf")} download="Age 5-7 DPT Audition Information">  Download Age 5-7 DPT Audition Information </a> 
          </ul>
        </div>

        <div>
          <h2>Dynamos Junior Team eligibility:</h2>
          <ul>
            <li>8-11 years old.</li>
            <a className="Teal Underline" href={require("../files/AGE_8-11_Dynamos_Audition_Information.pdf")} download="Age 8-11 DPT Audition Information">  Download Age 8-11 DPT Audition Information </a>
          </ul>
        </div>

        <div>
          <h2>Dynamites Mini Team eligibility:</h2>
          <ul>
            <li>5-7 years old.</li>
            <a className="Teal Underline" href={require("../files/AGE_12+_DPT_Audition_Information.pdf")} download="Age 12+ DPT Audition Information">  Download Age 12+ DPT Audition Information </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default AuditionEligibility;
