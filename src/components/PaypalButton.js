import { PayPalButton } from "react-paypal-button-v2";
import React, { Component } from 'react';
import swal from 'sweetalert';
 
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
          // layout: 'horizontal',
          color:  'gold',
          shape:  'pill',
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

        //Generic Catch-all for error messages not handled by PayPal
        onError={(err) => {
          swal({
            title: "Unexpected Error",
            text: "Sorry, an unexpected error has occurred. Please try again later.",
            icon: "warning",
            button: {
              text: "Ok"
            }
          });
        }}

        //Confirmation that checkout process has terminated
        onCancel={(data) => {
          swal({
            title: "Payment Cancelled",
            button: {
              text: "Ok"
            }
          });
        }}

        options={{
          merchantId: "TEST"
        }}

        //Called when transaction is approved on PayPal's side
        onApprove={(data, actions) => {
          //actions.order.capture() automatically takes care of funding failures
          return actions.order.capture().then(function(details) {
            //Pops alert after transaction is approved 
            swal({
              title: "Payment Successfully Made!",
              text: 'Thank you ' + details.payer.name.given_name  + "! Your transaction was successful." ,
              icon: "success",
              button: {
                text: "Ok"
              }
            });

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