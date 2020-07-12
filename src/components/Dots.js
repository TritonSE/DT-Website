import React from 'react';
import '../css/Dots.css';

class Dots extends React.Component {
    render() {
        return(
            <div className="dots">
			        <span className="dot Teal-Background"></span>
			        <span className="dot Teal-Background"></span>
			        <span className="dot Teal-Background"></span>
			</div>
        );
    }
}

export default Dots;