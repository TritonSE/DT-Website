import React, { Component } from 'react';
import '../css/Support.css';
import SupportStates from '../components/SupportStates.js';
import { Row } from 'react-bootstrap';

class SupportMainText extends Component {
	state= {
		donateButtonClicked: false, //switching to true enables donation process to begin 
		isMobile: window.innerWidth > 600 ? false:true //true indicates to use different layout for mobile <= 600 px, false = >600 layout
	}


	//Switches state to true when Donate button is clicked
	handleDonateButtonClicked = () =>{
		this.setState({
			donateButtonClicked: true
		});
	}

	//Adds Resizing listener (used to keep track of layouts)
	componentWillMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
	  }
	  
	  //Removes listener when done
	  componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	  }
	  
	  //Switches isMobile to true if window resized <= 600 px --> different formatting rendered
	  handleWindowSizeChange = () => {
		if(window.innerWidth <= 600){
			this.setState({ isMobile: true});
		}
		else{
			this.setState({ isMobile: false});
		}
	  };

	render() {
		let header = this.state.isMobile ? "Contribute": "How To Contribute";
        let text = "\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.\n\nAliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.";
		//Button Clicked + Full Screen (>600)
		if(this.state.donateButtonClicked && !this.state.isMobile){
			return(
				<div className="Try">
					<Row className="Alignment-Text">
						<text className="Support-Text">
						{text}
						</text>
						<text className="Header-Text">
						{header}
						</text>
					</Row>
					<SupportStates/>
					<br/>
					<br/>
				</div>
			);
		}
		//Button Clicked + Narrow Screen (<=600)
		else if(this.state.donateButtonClicked){
			return(
				<div className="Alignment-Text">
					<text className="Header-Text">
					{header}
					</text>
					<text className="Support-Text">
					{text}
					</text>
					<div style={{leftMargin: "5px"}}>
						<SupportStates/>
					</div>
					
					<br/>
					<br/>
				</div>
		);

		}
		//Button Not Clicked + Narrow Screen (<=600)
		else if(this.state.isMobile){
			return(
				<div className="Alignment-Text">
					<text className="Header-Text">
					{header}
					</text>
					<text className="Support-Text">
					{text}
					</text>
					<button 
						className="btn btn-secondary Donate-Button"
						onClick={this.handleDonateButtonClicked}
					>
						Donate 
					</button>
					<br/>
					<br/>
				</div>
		);

		}
		//Button Not Clicked + Full Screen (>600)
		else{
			return(
				<div className="Try">
					<Row className="Alignment-Text">
						<text className="Support-Text">
						{text}
						</text>
						<text className="Header-Text">
						{header}
						</text>
					</Row>
					<button 
						className="btn btn-secondary Donate-Button"
						onClick={this.handleDonateButtonClicked}
					>
						Donate 
					</button>
					<br/>
					<br/>
				</div>
			);
		}
	}
}

export default SupportMainText;