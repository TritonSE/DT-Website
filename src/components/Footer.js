import React, { Component } from 'react';
import '../css/Home.css';

class Footer extends Component {

	render() {
		return (
			<div className="Footer">
                <h1 className="Contact-Header" style={{fontSize: "2.2vw"}}>
                    <span style={{color:"black"}}>
                        Contact <br/> Us
                    </span>
                </h1>
                <h1 className="Contact-Header" style={{textAlign: "left", fontSize: "1.4vw"}}>
                    <span style={{color:"black"}}>
                        + 408 622 0249 <br/> <a style={{color: "black"}} href={`mailto:dynamicsperformanceteam@gmail.com`}>dynamicsperformanceteam@gmail.com</a>
                    </span>
                </h1>
            </div>
		);
	}
}

export default Footer;
