import React, { Component } from 'react';
import Toolbar from '../components/Toolbar.js';
import WaysToGiveText from '../components/WaysToGiveText.js';
import Amazon from '../images/waytogive/amazon smile.jpg';
import CurrentFund from '../images/waytogive/Kendra Scott Fundraiser 1.png';
import Instructions from '../images/waytogive/amazon smile instructions.jpg';
import ModalImage from 'react-modal-image';
import '../css/Support.css';
import '../css/WaysToGive.css';
import SupportStates from '../components/SupportStates.js';
import Footer from '../components/Footer.js';

class WaysToGive extends Component {
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
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		if (window.innerWidth > 600 && this.state.isMobile) {
			this.setState({isMobile: false});
		}
		else if (window.innerWidth <= 600 && !this.state.isMobile) {
			this.setState({isMobile: true});
		}
		this.setState({width: window.innerWidth, height: window.innerHeight});
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}


    render() {
		// component will render JSX (react's version of html) inside return statement
		//window.textTimer = setInterval(this.changeStyle, 1000);
		if (!this.state.donateButtonClicked && this.state.isMobile) {
		return (
			<div>
			<div className="textWays" >
				<link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
				<h1>Ways to Give</h1>
                <WaysToGiveText/>
				<button 
						className="btn btn-secondary Donate-Button"
						//style = {{marginLeft:"calc(-5.5vw"}}
						onClick={this.handleDonateButtonClicked}
				>
						Donate 
				</button>
					<p className="amazon">Amazon Smile Donations</p>
				<ModalImage
					className = "smile"
					style = {{marginTop: '-50%'}}
					small = {Amazon}
					large = {Amazon}
				/>
				<ModalImage
					className = "instructions"
					small = {Instructions}
					medium = {Instructions}
				/>
			</div>
			<Footer />
			</div>
		);
		}
		else if (this.state.donateButtonClicked && this.state.isMobile) {
		return (
			<div>
			<div className="textWays" >
				<link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
				<h1>Ways to Give</h1>
                <WaysToGiveText />
				<SupportStates />
				<div className="amazon">
					<p>Amazon Smile Donations</p>
				</div>
				<ModalImage
					className = "smile"
					style = {{marginTop: '-50%'}}
					small = {Amazon}
					large = {Amazon}
				/>
				<ModalImage
					className = "instructions"
					small = {Instructions}
					medium = {Instructions}
				/>
			</div>
			<Footer />
			</div>
		);
		}
		else if(this.state.donateButtonClicked && !this.state.isMobile) {
		return (
			// can only return one element so if you want more than one make sure they're nested inside a div
			<div>
			<div className="textWays" >
				<link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
				<h1>Ways to<br/>Give</h1>
                <WaysToGiveText />
				<SupportStates />
			</div>
			<div className="support-footer">
					<Footer />
				</div>
			</div>
		);
		}
		else {
			return (
				// can only return one element so if you want more than one make sure they're nested inside a div
				<div>
				<div className="textWays" >
					<link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
					<h1>Ways to<br/>Give</h1>
					<WaysToGiveText />
					<div className="amazon">
					<p>Amazon Smile Donations</p>
					<div className="image-container" >
				<ModalImage
					className = "smile-2"
					small = {Amazon}
					large = {Amazon}
				/>
				<ModalImage
					className = "instructions-2"
					small = {Instructions}
					medium = {Instructions}
				/>
				</div>
				</div>
				</div>
					<Footer />
				</div>
			);
		}
	}
}

export default WaysToGive;