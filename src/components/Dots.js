import React from 'react';
import '../css/Dots.css';

class Dots extends React.Component {
    render() {
        return(
            <div className="dots">
			        <span className="dot"></span>
			        <span className="dot"></span>
			        <span className="dot"></span>
			</div>
        );
    }
}

export default Dots;