import React, { Component } from 'react';
import SocialIcons from './SocialFollow.js';
import '../css/Footer.css';

class Footer extends Component {

    constructor(props){
		super(props);
		this.state = { isMobile: false};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		window.scrollTo(0,0);
		this.updateWindowDimensions();
	}
	
	updateWindowDimensions() {
		if (window.innerWidth > 600 && this.state.isMobile){
			this.setState({ isMobile: false });
		}
		else if(window.innerWidth <= 600 && !this.state.isMobile){
			this.setState({ isMobile: true });
		}
	}

	render() {

        if(this.state.isMobile){
            return (
                <div className="Footer">
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <h1 className="Contact-Header" style={{fontSize: "5.3vw"}}>
                            <span style={{color:"black"}}>
                                Contact <br/> Us
                            </span>
                        </h1>
                        <h1 className="Contact-Header" style={{textAlign: "left", fontSize: "3.4vw", flex:"1"}}>
                            <span style={{color:"black"}}>
                                <a style={{color: "black"}} href={`tel:4086220249`}>+ 408 622 0249  </a><br/> <a style={{color: "black"}} href={`mailto:dynamicsperformanceteam@gmail.com`}>dynamicsperformanceteam@gmail.com</a>
                            </span>
                        </h1>
                    </div>
                    <div style={{marginTop:"5%"}}>
                     <SocialIcons/>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="Footer">
                    <h1 className="Contact-Header" style={{fontSize: "2.3vw"}}>
                        <span style={{color:"black"}}>
                            Contact <br/> Us
                        </span>
                    </h1>
                    <h1 className="Contact-Header" style={{textAlign: "left", fontSize: "1.5vw"}}>
                        <span style={{color:"black"}}>
                            + 408 622 0249 <br/> <a style={{color: "black"}} href={`mailto:dynamicsperformanceteam@gmail.com`}>dynamicsperformanceteam@gmail.com</a>
                        </span>
                    </h1>
                </div>
            );
        }
	}
}

export default Footer;
