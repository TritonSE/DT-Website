// paragraph component for auditions page
import React, { Component } from "react";
import "../css/Audition.css";
import "../css/Global.css";
class AuditionInfo extends Component {
  render() {
    return (
      <div className="font">
        <div>
          <p>
            Our current season is still underway—our next season’s auditions
            will be held in <b className="audition-info">August 2020</b>.
            Subscribe to our mailing list for a reminder and up to date
            announcements! To inquire about individual auditions, please email
            DPT at dynamicsperformanceteam@gmail.com or call at 408-622-0249.
          </p>
        </div>

        <div>
          <p>
            To be eligible to audition for the Dynamics Performance Team,
            dancers must have one year of dance experience and must be taking
            technique class on a regular basis. Other eligibility can be found
            below. DPT is a non-profit organization and is not affiliated with
            one specific studio. Dancers from all studios and companies are
            welcome to audition.
          </p>
        </div>
      </div>
    );
  }
}

export default AuditionInfo;
