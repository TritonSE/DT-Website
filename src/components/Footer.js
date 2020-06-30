import React, { Component } from 'react';
import SocialIcons from './SocialFollow.js';
import '../css/Footer.css';

class Footer extends Component {

    MOBILE_MAX_WIDTH = 1150; //Largest screen size the mobile layout renders for

    constructor(props){
		super(props);
		this.state = { isMobile: false};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		window.scrollTo(0,0);
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
		if (window.innerWidth > this.MOBILE_MAX_WIDTH && this.state.isMobile){
			this.setState({ isMobile: false });
		}
		else if(window.innerWidth <= this.MOBILE_MAX_WIDTH && !this.state.isMobile){
			this.setState({ isMobile: true });
		}
	}

	render() {

        if(this.state.isMobile){
            return (
                <div className="Footer">
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <h1 className="Contact-Text">
                                Contact <br/> Us
                        </h1>
                        <h1 className="Contact-Info-Text">
                                <a style={{color: "black"}} href={`tel:4086220249`}>+ 408 622 0249  </a>
                                <br/> 
                                <a style={{color: "black"}} href={`mailto:dynamicsperformanceteam@gmail.com`}>dynamicsperformanceteam@gmail.com</a>
                        </h1>
                    </div>
                    <div className="Social-Icon-Formatting">
                        <SocialIcons/>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="Footer">
                    <h1 className="Contact-Text">
                            Contact <br/> Us
                    </h1>
                    <h1 className="Contact-Info-Text">
                            + 408 622 0249 
                            <br/> 
                            <a style={{color: "black"}} href={`mailto:dynamicsperformanceteam@gmail.com`}>dynamicsperformanceteam@gmail.com</a>
                    </h1>
                </div>
            );
        }
	}
}

export default Footer;
