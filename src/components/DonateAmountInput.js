import React from 'react'
import { Input, Label } from 'semantic-ui-react';
import '../css/Support.css';

class DonateAmountInput extends React.Component {

    constructor(props){
		super(props);
	}

    render() {
        return(
            <div>
                 <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                <Input
                    action={{
                        color: 'teal',
                        labelPosition: 'right',
                        icon: 'cart',
                        content: 'Checkout',
                        onClick: this.props.handleAmountChange
                        }
                    }
                    // className="Attempt"
                    actionPosition='right'
                    fluid={true}
                    // size={"mini"}
                    placeholder='5.00'
                    // icon='usd' 
                    // iconPosition='left'
                    label="$"
                    defaultValue={this.props.amount == '' ? null:this.props.amount}
                    error={this.props.displayError}
                    onChange={this.props.handleUpdateAmount}
                />
            </div>
        );
    }
}

export default DonateAmountInput;