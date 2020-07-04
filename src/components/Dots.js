import React from 'react';
import '../css/Dots.css';

class Dots extends React.Component {
    render() {
        return(
            <div className="dots">
			        <span class="dot Teal-Background"></span>
			        <span class="dot Teal-Background"></span>
			        <span class="dot Teal-Background"></span>
			</div>
        );
    }
}

export default Dots;