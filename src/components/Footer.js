import React, { Component } from 'react';
import SocialIcons from './SocialFollow.js';
import '../css/Footer.css';
import '../css/Global.css';
import { Collapse } from 'reactstrap';

class Footer extends Component {

    MOBILE_MAX_WIDTH = 1150; //Largest screen size the mobile layout renders for
    COLLAPSE_RENDER_MAX = 700; //Largest screen size the collapse/expand icon renders for

    constructor(props){
		super(props);
        this.state = { isMobile: false, isOpen: true, renderCollapseIcon: false};

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.toggleCollapsed = this.toggleCollapsed.bind(this);
	}

	componentDidMount() {
		// window.scrollTo(0,0);
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
		if (window.innerWidth > this.MOBILE_MAX_WIDTH && this.state.isMobile){
			this.setState({ isMobile: false});
		}
		else if(window.innerWidth <= this.MOBILE_MAX_WIDTH){
            if(window.innerWidth <= this.COLLAPSE_RENDER_MAX){
                this.setState({ renderCollapseIcon: true });
            } else{
                this.setState({ renderCollapseIcon: false });
            }
			this.setState({ isMobile: true });
		}
    }
    
    toggleCollapsed = () =>{
        this.setState({isOpen: !this.state.isOpen});
    }

	render() {

        if(this.state.isMobile){
            return (
                <div className="Footer Teal-Background">
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <h1 className="Contact-Text">
                                Contact <br/> Us
                        </h1>
                        <h1 className="Contact-Info-Text">
                                <a className="Highlight" href={`tel:4086220249`}>+ 408 622 0249  </a>
                                <br/> 
                                <a className="Highlight" href={`mailto:dynamicsperformanceteam@gmail.com`}>dynamicsperformanceteam@gmail.com</a>
                        </h1>
                        <button className="Collapse-Icon" onClick={this.toggleCollapsed} style={{display: this.state.renderCollapseIcon ? "block":"none"}}>
                            <img className="arrow-icons" src={this.state.isOpen ? require('../images/icons8-chevron-down-50.png') : require('../images/icons8-chevron-down-50-up.png')} />
					    </button>
                    </div>
                    <Collapse isOpen={this.state.isOpen}>
                    <div className="Social-Icon-Formatting">
                        <SocialIcons/>
                    </div>
                    </Collapse>
                </div>
            );
        } else {
            return (
                <div className="Footer Teal-Background">
                    <h1 className="Contact-Text">
                            Contact <br/> Us
                    </h1>
                    <h1 className="Contact-Info-Text">
                            + 408 622 0249 
                            <br/> 
                            <a className="Highlight" href={`mailto:dynamicsperformanceteam@gmail.com`}>dynamicsperformanceteam@gmail.com</a>
                    </h1>
                </div>
            );
        }
	}
}

export default Footer;
