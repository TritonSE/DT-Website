// paragraph component for auditions page
import React, { Component } from "react";
import Dots from './Dots';
import "../css/Audition.css";
import "../css/Global.css";
class AuditionInfo extends Component {
  render() {
    return (
      <div className="font">
        <div>                  
          <p style={{fontWeight: "bold"}}className="Pink"> 
            Dynamics Performance Team is now accepting virtual audition submissions until August 9th! 
            Please download the PDF for your dancer's age and read the submitting instructions/team information. 
            Send all submissions to <a className="Teal Underline" href="mailto:email@example.com">dynamicsperformanceteam@gmail.com</a>
          </p>

          <Dots />

          <p>
            DPT is a non-profit organization and is not affiliated with
            one specific studio. Dancers from all studios and companies are
            welcome to audition.
          </p>
        </div>
      </div>
    );
  }
}

export default AuditionInfo;
