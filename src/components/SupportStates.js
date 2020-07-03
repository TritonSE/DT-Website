/**
 * 
 * Sources: https://github.com/validatorjs/validator.js (Validator)
 * https://react-icons.netlify.com/#/icons/fa (Alert Icon)
 * 
 * */ 

import React, { Component } from 'react';
import '../css/Support.css';
import PaypalButton from '../components/PaypalButton.js'
import { IoIosAlert } from "react-icons/io";
import { FormGroup, Form } from 'react-bootstrap';
import DonateAmountInput from '../components/DonateAmountInput';

/**
 * Helper component to SupportMain.js. Used to go through 
 * different states of Paypal checkout (setup before API call)
 */
class SupportStates extends Component {
  state= {
		amount: '', //amount user will donate (given to PayPal API)
    displayError: false, //enabled when amount is invalid 
    errorMsg: '',
		displayAmountAdjust: true //keeps track of checkout stage (amount adjust - Stage 1 vs. Paypal - Stage 2), default is Stage 1
  }
  
  /**
   * Triggered when "Proceed" or "Adjust" buttons are clicked.
   * 
   * "Proceed": Goes to Stage 2 if amount is valid, and no error exists
   * "Adjust": Automatically goes back to Stage 1
   */
	handleAmountChange = () =>{
    //at Stage 1 trying to go to Stage 2
		if(this.state.displayAmountAdjust){
      //only proceed if no error 
			if(this.state.displayError){
        // alert('Invalid amount. Please adjust until red error icon disappears.');
				return;
      }
      //Edge Case: Set error if amount is empty, else proceed
			else if(this.state.amount === ''){
        // alert('Invalid amount. Please adjust until red error icon disappears.');
				this.setState({displayError: true, errorMsg: "Amount cannot be empty"});
				return;
			}	 
    }
    //Switch stages (Stage 1 --> Stage 2) || (Stage 2 --> Stage 1)
		this.setState({
      displayAmountAdjust: !this.state.displayAmountAdjust
		});
  }

  /**
   *  Triggered when user updates amount they want to donate, at each keystroke. 
   *  Validates currency amount, setting error if invalid. (Synchronous error displays)
   */
  handleUpdateAmount = (event) =>{
    this.setState({amount: event.target.value});
    var validator = require('validator');
    var value = parseFloat(event.target.value);

    if(event.target.value == ' '){
      this.setState({displayError: true, errorMsg: "Amount cannot be empty"});
    }
    else if(isNaN(value)){
      this.setState({displayError: true, errorMsg: "Not a valid number"});
    }
    else if(value <=0){
      this.setState({displayError: true, errorMsg: "Amount must be positive"});
    }
    else if(!(validator.isCurrency(event.target.value, {allow_negatives: false, digits_after_decimal: [0,1,2]}))){
      this.setState({displayError: true, errorMsg: "Maximum of 2 decimal places"});
    } 
    //  else if(!(validator.isCurrency(event.target.value, {digits_after_decimal: [0,1,2]}))){
    //   this.setState({displayError: true, errorMsg: "Too many decimal digits"});
    // } 
    else{
      this.setState({displayError: false, errorMsg: ""});
    }
    // else if(parseFloat(event.target.value) > 0)
    // //set error if amount is either invalid or <= 0
		// if(!(validator.isCurrency(event.target.value, {allow_negatives: false, digits_after_decimal: [1,2]}) && parseFloat(event.target.value) > 0)){
		// 		if(!this.state.displayError){
		// 			this.setState({displayError: true});
		// 		}
		// 		return;
    // }
    // //no current error but previously had error state --> reverse error state 
		// else if(this.state.displayError){
		// 	this.setState({displayError: false});
		// }
  }
  
	render() {
    //render this layout if at Stage 1 (used for updating amount to donate)
    if(this.state.displayAmountAdjust){
      return (
        <div style={{display:"flex", justifyContent:"center"}}> 
            <DonateAmountInput errorMsg={this.state.errorMsg} amount={this.state.amount} displayError={this.state.displayError} handleUpdateAmount={this.handleUpdateAmount} handleAmountChange={this.handleAmountChange}/>
            {/* <p className="text-danger">{this.state.errorMsg}</p> */}
          {/* <div className="Proceed-Style" style={{backgroundColor:"blue"}}>
            <text
              className="Amount-Text1"
            >
              {"Amount: $"}
            </text>
            <input
                type="number"
                inputmode="numeric"
                className="Amount-Text"
                displayError={true}
                value={this.state.amount === '' ? null:this.state.amount}
                placeholder="5.00"
                onChange={this.handleUpdateAmount}
              >
              </input>
          <button 
            className="btn btn-secondary Proceed-Button"
            onClick={this.handleAmountChange}
          >
            {"Proceed"}
          </button>
          </div>
          <div style={{display: 'flex',  justifyContent:'center'}}>
            <h1 style={{fontSize:"1.3vw", color:"red"}}> {this.state.errorMsg} </h1>
          </div> */}
        </div>
          );
    }
    //render layout if at Stage 2 (Proceeding to PayPal's Checkout process - API call)
    else{
      return (
        <div className="Checkout-Style">
            <div className="PayPal-Style">
              <PaypalButton amount={this.state.amount}/>
            </div>
            <div className="Adjust-Style">
              <text
                className="Amount-Text1"
                style={{bottom: "3%", fontWeight: "bold"}}
              >
                {"$"}
              </text>
              <input
                className="Chosen-Amount"
                value={this.state.amount}
                disabled={"disabled"}
                style={{backgroundColor: "lightgrey"}}
              >
              </input>
              <button 
                className="btn btn-secondary Adjust-Button"
                onClick={this.handleAmountChange}
              >
                {"Adjust"}
              </button>
          </div>
        </div>
          );
    }	
  }
}

export default SupportStates;