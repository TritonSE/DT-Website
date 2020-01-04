/**
 * 
 * Sources: https://github.com/validatorjs/validator.js (Validator)
 * https://react-icons.netlify.com/#/icons/fa (Alert Icon)
 * 
 * */ 


import React, { Component } from 'react';
import Toolbar from '../components/Toolbar.js';
import '../css/Support.css';
import PaypalButton from '../components/PaypalButton.js'
import { SegmentInline } from 'semantic-ui-react';
import { Container, Row } from 'react-bootstrap';
import { IoIosAlert } from "react-icons/io";


class Support extends Component {
	state= {
		amount: '',
		displayError: false,
		donateButtonClicked: false,
		displayAmountAdjust: false,
		displayPaypal: false
	}
	handleAmountChange = () =>{
		if(this.state.displayAmountAdjust){
			if(this.state.displayError){
				return;
			}
			else if(this.state.amount === ''){
				this.setState({displayError: true});
				return;
			}	
		}
		this.setState({
			displayAmountAdjust: !this.state.displayAmountAdjust,
			displayPaypal: !this.state.displayPaypal
		});
	}

	handleDonateButtonClicked = () =>{
		this.setState({
			donateButtonClicked: true,
			displayAmountAdjust: true
		});
	}

	handleUpdateAmount = (event) =>{
		//this.setState({amount: event.target.value});
		var validator = require('validator');
		if(!(validator.isCurrency(event.target.value, {allow_negatives: false, digits_after_decimal: [1,2]}))){
				if(!this.state.displayError){
					this.setState({displayError: true});
				}
				return;
		}
		else if(this.state.displayError){
			this.setState({displayError: false});
		}
		this.setState({amount: event.target.value});
	}
	render() {
		var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.\n\nAliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.";
		return (
			<div>
			<Toolbar />
			<div className="Alignment-Text">
				<text className="Support-Text">
				{text}
				</text>
				<text className="Header-Text">
				How To Contribute
				</text>
			</div>
			<button 
				style={{left: "45%", display: this.state.donateButtonClicked ? 'none':null}} 
				className="btn btn-secondary Donate-Button"
				onClick={this.handleDonateButtonClicked}
			>
				Donate 
			</button>
			<div style={{flexDirection:"row", display:"flex"}}>
				<text
					className="Amount-Text"
					style={{display: this.state.donateButtonClicked ? null:'none', left: this.state.displayAmountAdjust ? "36%":"60%", bottom: "3%", fontWeight: "bold"}}
				>
					{this.state.displayPaypal ? "$":"Amount: $"}
				</text>
				<input
					type="number"
					inputmode="numeric"
					className="Amount-Text"
					placeholder="5.00"
					disabled={this.state.displayAmountAdjust ? null:"disabled"}
					style={{display: this.state.donateButtonClicked ? null:'none', left: this.state.displayAmountAdjust ? "43%":"65%", backgroundColor: this.state.displayAmountAdjust ? null:"lightgrey"}}
					onChange={this.handleUpdateAmount}
				>
				</input>
				<IoIosAlert style={{display: this.state.displayError ? null:'none', color:"red", width: "3%", height:"3%", position:"absolute", bottom:"7%", left:"50%"}}/>
				<button 
					style={{display: this.state.donateButtonClicked ? null:'none', left: this.state.displayAmountAdjust ? "53%":"75%"}} 
					className="btn btn-secondary Donate-Button"
					onClick={this.handleAmountChange}
				>
					{this.state.displayPaypal ? "Adjust":"Proceed"}
				</button>
			</div>
			<div style={{display: this.state.displayPaypal ? null:'none', width: "30%", position: "absolute", bottom: "2%", left: "17.5%"}}>
				<PaypalButton amount={this.state.amount}/>
			</div>
			{/* <div id="paypal-button-container" style={{width: "30%", height: "55px" , position: "absolute", bottom: "2%", right: "35%"}}></div> */}
			</div>
		);
	}
}

export default Support
