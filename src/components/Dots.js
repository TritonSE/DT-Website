import React from 'react';
import '../css/Dots.css';

class Dots extends React.Component {
    render() {
        return(
            <div className="dots">
			        <span class="dot"></span>
			        <span class="dot"></span>
			        <span class="dot"></span>
			</div>
        );
    }
}

export default Dots;