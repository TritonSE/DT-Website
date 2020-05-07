// component for different levels of audition eligibility
import React, { Component } from 'react';

class AuditionEligibility extends Component {
    render() {
        return(
            <div>
                <div>
                <h6>DPT Senior Team eligibility:</h6>
                <ul>
                    <li>12+ years old</li>
                    <li>One year of dance experience.</li>
                    <li>3 hours minimum technique at one or more dance studios: one hour of jazz, 
                        one hour of ballet, and one hour of another genre of dance.</li>
                </ul>
                </div>

                <div>
                <h6>Dynamos Junior Team eligibility:</h6>
                <ul>
                    <li>8-10 years old</li>
                    <li>One year of dance experience.</li>
                    <li>3 hours minimum technique at one or more dance studios: one hour of jazz, 
                        one hour of ballet, and one hour of another genre of dance.em</li>
                </ul>
                </div>

                <div>
                <h6>Dynamites Mini Team eligibility:</h6>
                <ul>
                    <li>5-7 years old</li>
                    <li>2 hours minimum technique at one or more dance studios: one hour of ballet 
                        or ballet combo and one hour of another genre of dance.</li>
                 </ul>
                </div>
            </div>
        );
    }
}

export default AuditionEligibility;