import { PayPalButton } from "react-paypal-button-v2";
import React, { Component } from 'react';
 
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

        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                currency_code: "USD",
                value: this.props.amount
              }
            }],
            application_context: {
              shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
          }
          });
        }}

        onApprove={(data, actions) => {
          return actions.order.capture().then(function(details) {
            alert('Transaction completed by ' + details.payer.name.given_name);
            // Call your server to save the transaction
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
