import React, { Component } from 'react';
import WaysToGiveText from '../components/WaysToGiveText.js';
import Amazon from '../images/waytogive/amazon smile.jpg';
import Instructions from '../images/waytogive/amazon smile instructions.jpg';
import ModalImage from 'react-modal-image';
import '../css/Support.css';
import '../css/WaysToGive.css';
import SupportStates from '../components/SupportStates.js';
import Footer from '../components/Footer.js';
import "../css/Global.css";

class WaysToGive extends Component {
    constructor(props){
		super(props);
		this.state = {isMobile: false};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}


    render() {
		// component will render JSX (react's version of html) inside return statement
		//window.textTimer = setInterval(this.changeStyle, 1000);
		if (this.state.isMobile) {
		return (
			<div>
				<div className="textWays" >
					<link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
					<h1 className="Pink">Ways to Give</h1>
					<WaysToGiveText/>
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
		else {
			return (
				// can only return one element so if you want more than one make sure they're nested inside a div
				<div>
					<div className="Main-Container" >
						{/* <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'/> */}
						<div className="Left-Container">
							<h1 className="Pink">Ways to<br/>Give</h1>
							<div className="Amazon-Container">
								<p className="Amazon-Title">Amazon Smile Donations</p>
								<div className="image-container" >
									<ModalImage
										className = "Images Img-Align"
										small = {Amazon}
										large = {Amazon}
									/>
									<ModalImage
										className = "Images"
										small = {Instructions}
										medium = {Instructions}
									/>
								</div>
							</div>
						</div>
						<div className="Right-Container">
							<WaysToGiveText/>
						</div>
					</div>
					<div style={{marginTop:"3%"}}>
						<Footer />
					</div>
					
				</div>
			);
		}
	}
}

export default WaysToGive;