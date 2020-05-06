import React, { Component } from 'react';
import Toolbar from '../components/Toolbar.js';
import AuditionInfo from '../components/AuditionInfo.js';
import AuditionEligibility from '../components/AuditionEligibility.js';

class Audition extends Component {
    render() {
        return(
            <div>   
                <Toolbar/>
                <AuditionInfo></AuditionInfo>
                <AuditionEligibility></AuditionEligibility>
            </div>
        );
    }
}

export default Audition;