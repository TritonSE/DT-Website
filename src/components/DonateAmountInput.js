import React from 'react'
import { Input, Divider, Form, Label } from 'semantic-ui-react';
import '../css/Support.css';

class DonateAmountInput extends React.Component {

    constructor(props){
		super(props);
	}

    render() {
        return(
            <div style={{display:"flex", flexDirection:"column"}}>
                 <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />

                 {/* <Form>
                    <Form.Field> */}
                    <Input
                    action={{
                        color: 'teal',
                        labelPosition: 'right',
                        icon: 'cart',
                        content: 'Checkout',
                        onClick: this.props.handleAmountChange
                        }
                    }
                    type="number" 
                    // pattern="[0-9]*"
                    className="Donate-Amount-Input"
                    actionPosition='right'
                    // fluid={true}
                    size={"large"}
                    placeholder='5.00'
                    // icon='usd' 
                    // iconPosition='left'
                    label="$"
                    defaultValue={this.props.amount == '' ? null:this.props.amount}
                    error={this.props.displayError}
                    onChange={this.props.handleUpdateAmount}
                />
                {this.props.displayError && 
                <Label basic color='red' pointing="above" classname="Border">
                {this.props.errorMsg}
             </Label>
                }
                    {/* </Form.Field>
                 </Form> */}
               
            </div>
        );
    }
}

export default DonateAmountInput;