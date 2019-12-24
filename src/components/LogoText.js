import React, { Component } from 'react';
import BlinkingText from './BlinkingText.js'

class LogoText extends Component {
	render() {
		return (
            <div style={{flexDirection: "row", display: "flex"}}>
                {/* Image portion of Navbar Logo */}
               <img
                src = {require("../images/logo1.png")}
                style={{width:120, marginTop: 0}}
                alt = "Could not load"
                />
                  {/* Text portion of Navbar Logo */}
                <BlinkingText/>
            </div>
        );
	}
}

// always export to allow importing in other files
export default LogoText;