/**
 * Sources: (React Bullets) https://stackoverflow.com/questions/56339450/how-to-render-bullet-character-in-react-native
 */

import React, { Component } from 'react';
import '../css/BlinkingColors.css';

class BlinkingText extends Component {
	// area where functions are defined (See FormExample.js)
	
	// render function takes care of displaying component
	render() {
		// component will render JSX (react's version of html) inside return statement
		return (
            <div className="Body-Header">
              <p style={{color: "#E42B6E"}}id="dynamicsTxt"> Dynamics </p> 
              <p> Dance </p>
              <p> Team </p>
        </div>
        );
	}
}

// always export to allow importing in other files
export default BlinkingText;