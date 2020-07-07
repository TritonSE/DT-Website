/**
 * 
 * Sources: https://github.com/validatorjs/validator.js (Validator)
 * https://react-icons.netlify.com/#/icons/fa (Alert Icon)
 * 
 * */ 

import React, { Component } from 'react';
import '../css/Support.css';
import PaypalButton from '../components/PaypalButton.js'
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

    if(event.target.value === ' '){
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
    else{
      this.setState({displayError: false, errorMsg: ""});
    }
  }
  
	render() {
    //render this layout if at Stage 1 (used for updating amount to donate)
    if(this.state.displayAmountAdjust){
      return (
        <div style={{display:"flex", justifyContent:"center"}}> 
            <DonateAmountInput errorMsg={this.state.errorMsg} amount={this.state.amount} displayError={this.state.displayError} handleUpdateAmount={this.handleUpdateAmount} handleAmountChange={this.handleAmountChange}/>
        </div>
          );
    }
    //render layout if at Stage 2 (Proceeding to PayPal's Checkout process - API call)
    else{
      return (
        <div className="Checkout-Style">
              <PaypalButton amount={this.state.amount}/>
            <div className="Adjust-Style">
              <text
                className="Amount-Text"
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