import React from 'react'
import { Input, Label } from 'semantic-ui-react';
import '../css/Support.css';

class DonateAmountInput extends React.Component {

    constructor(props){
		super(props);
	}

    render() {
        return(
            <div style={{display:"flex", flexDirection:"column"}}>
                 <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                    <Input
                    action={{
                        color: 'teal',
                        labelPosition: 'right',
                        icon: 'cart',
                        content: 'Donate',
                        onClick: this.props.handleAmountChange
                        }
                    }
                    type="number" 
                    actionPosition='right'
                    size={"mini"}
                    placeholder='5.00'
                    label="$"
                    defaultValue={this.props.amount == '' ? null:this.props.amount}
                    error={this.props.displayError}
                    onChange={this.props.handleUpdateAmount}
                />
                {this.props.displayError && 
                    <Label basic color='red' pointing="above">
                        {this.props.errorMsg}
                    </Label>
                }
            </div>
        );
    }
}

export default DonateAmountInput;