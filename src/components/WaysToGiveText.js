import React, { Component } from 'react';
import '../css/WaysToGive.css';
import SponsorLetter from '../images/waytogive/Sponsor Letter 2019-20.pdf'
import Amazon from '../images/waytogive/amazon smile.jpg';
import CurrentFund from '../images/waytogive/Kendra Scott Fundraiser 1.png';
import Instructions from '../images/waytogive/amazon smile instructions.jpg';
import ModalImage from 'react-modal-image';
import Footer from '../components/Footer.js';
import SupportStates from '../components/SupportStates.js';
import '../css/Support.css';

class WaysToGiveText extends Component {
    constructor(props){
		super(props);
		this.myRef = React.createRef();
		this.imageRef = React.createRef();
		this.state = {width: 0, height: 0, isMobile: false, donateButtonClicked: false};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.handleDonateButtonClicked = this.handleDonateButtonClicked.bind(this);
	}

	handleDonateButtonClicked = () =>{
		this.setState({
			donateButtonClicked: true
		});
	}

	componentDidMount() {
        window.scrollTo(0,0);
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		if (window.innerWidth > 600) {
			this.setState({isMobile: false});
		}
		else if (window.innerWidth <= 600) {
			this.setState({isMobile: true});
		}
		this.setState({width: window.innerWidth, height: window.innerHeight});
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}
    render() {
        if(!this.state.isMobile  && !this.state.donateButtonClicked) {
        return (
            <div className = "bodytxt">
                <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
                <p> 
                	Dynamics Performance Team is proud to be part of the local arts community in the Bay Area for the past 15 years. We are committed to giving youth and young adults the opportunity to train in versatile genres and grow their passion for dance. Performing Arts are an essential part of the community, and with your help, we can continue to offer training to all dancers regardless of financial background.
 				</p>
 				<p>
					Dynamics Performance Team is a publicly Funded 501(c)(3) non-profit organization that depends on our generous donors, corporate sponsors, and friends. Your tax-deductible gift allows Dynamics to present quality performances, keep rates low, and offer scholarships to our dancers—affordability should not be an obstacle in the way of our dancers’ dreams. Your donation also allows for Dynamics dancers to compete, train at conventions, travel to nationals, and purchase costumes.
				</p>
				<p>
					To learn more about our individual or corporate giving programs and benefits, 
					<a href = {SponsorLetter} target = "_blank"> <span style={{color: '#FF4081',fontStyle: 'normal',fontWeight: 'normal', textDecorationLine: 'underline'}}>please read our sponsor letter here </span></a>, or contact us at dynamicsperformanceteam@gmail.com. You can also give us a call at (408) 622-0249.
				</p>
				<div className="button-container" >
				<button 
						className="btn btn-secondary Donate-Button"
						onClick={this.handleDonateButtonClicked}
					>
						Donate 
				</button>
				</div>
            </div>
        );
		}
		else if (!this.state.isMobile && this.state.donateButtonClicked) {
			return ( 
				<div className = "bodytxt">
                <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
                <p> 
                	Dynamics Performance Team is proud to be part of the local arts community in the Bay Area for the past 15 years. We are committed to giving youth and young adults the opportunity to train in versatile genres and grow their passion for dance. Performing Arts are an essential part of the community, and with your help, we can continue to offer training to all dancers regardless of financial background.
 				</p>
 				<p>
					Dynamics Performance Team is a publicly Funded 501(c)(3) non-profit organization that depends on our generous donors, corporate sponsors, and friends. Your tax-deductible gift allows Dynamics to present quality performances, keep rates low, and offer scholarships to our dancers—affordability should not be an obstacle in the way of our dancers’ dreams. Your donation also allows for Dynamics dancers to compete, train at conventions, travel to nationals, and purchase costumes.
				</p>
				<p>
					To learn more about our individual or corporate giving programs and benefits, 
					<a href = {SponsorLetter} target = "_blank"> <span style={{color: '#FF4081',fontStyle: 'normal',fontWeight: 'normal', textDecorationLine: 'underline'}}>please read our sponsor letter here </span></a>, or contact us at dynamicsperformanceteam@gmail.com. You can also give us a call at (408) 622-0249.
				</p>
				<div className="button-container" >
				<SupportStates />
				</div>
            </div>
			);
		}
        else {
        return (
            <div className = "bodytxt">
                <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
                <p> 
                Dynamics Performance Team is proud to be part of the local arts community in the Bay Area for the past 15 years. We are committed to giving youth and young adults the opportunity to train in versatile genres and grow their passion for dance. Performing Arts are an essential part of the community, and with your help, we can continue to offer training to all dancers regardless of financial background.

 </p>
 <p>
Dynamics Performance Team is a publicly Funded 501(c)(3) non-profit organization that depends on our generous donors, corporate sponsors, and friends. Your tax-deductible gift allows Dynamics to present quality performances, keep rates low, and offer scholarships to our dancers—affordability should not be an obstacle in the way of our dancers’ dreams. Your donation also allows for Dynamics dancers to compete, train at conventions, travel to nationals, and purchase costumes.
</p>
<p>
To learn more about our individual or corporate giving programs and benefits, 
<a href = {SponsorLetter} target = "_blank"> <span style={{color: '#FF4081',fontStyle: 'normal',fontWeight: 'normal', textDecorationLine: 'underline'}}>please read our sponsor letter here </span></a>, or contact us at dynamicsperformanceteam@gmail.com. You can also give us a call at (408) 622-0249.
</p>
                 
                 </div>
        );
        }
    }
}

export default WaysToGiveText;