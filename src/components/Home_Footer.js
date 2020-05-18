import React, { Component } from 'react';
import '../css/Home.css';

class Home_Footer extends Component {

	render() {
		return (
			<div className="Footer">
                <p className="Contact-Header" style={{fontSize: "2vw"}}>
                    Contact <br/> Us
                </p>
                <p className="Contact-Header" style={{textAlign: "left", fontSize: "1.3vw"}}>
                    + 408 622 0249 <br/> <a style={{color: "black"}} href={`mailto:dynamicsperformanceteam@gmail.com`}>dynamicsperformanceteam@gmail.com</a>
                </p>
            </div>
		);
	}
}

export default Home_Footer;
