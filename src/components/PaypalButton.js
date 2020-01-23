import { PayPalButton } from "react-paypal-button-v2";
import React, { Component } from 'react';
 
/**
 * Helper component to SupportStates.js.
 * Renders the PayPal button, providing style & checkout specifics. 
 * 
 * Note: Takes in an "amount" prop that will be passed onto PayPal Checkout
 */
class PaypalButton extends Component {
  render() {
    return (
      <PayPalButton
        style={{
          layout: 'horizontal',
          color:  'gold',
          shape:  'pill',
          maxHeight:  55,
        }}

        //customizes order from default settings 
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                currency_code: "USD",
                //prop "amount" takes effect here
                value: this.props.amount
              }
            }],
            application_context: {
              shipping_preference: "NO_SHIPPING"
          }
          });
        }}

        //Called when transaction is approved on PayPal's side
        onApprove={(data, actions) => {
          return actions.order.capture().then(function(details) {
            //Pops alert on top of page after transaction is approved 
            alert('Transaction completed by ' + details.payer.name.given_name);
            return fetch('/paypal-transaction-complete', {
              method: 'post',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify({
                orderID: data.orderID
              })
            });
          });
        }}
      />
    );
  }
}
export default PaypalButton;