import React, { Component } from 'react';
import '../css/FormExample.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class FormExample extends Component {
	handleSubmit = event => {
		event.preventDefault();		// stop form from refreshing page
		const name = event.target.elements.name.value; // grab name value from name input
		
		// if name is empty prompt user to add name
		if (name === "") {
			window.alert("Please Enter Your Name.");
		} else {	// else greet user
			window.alert("Hello " + name + "!");
		}
	}

	render() {
		return (
			<div className="form-container">
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input 
							className="left-margin" 
							type="text" 
							name="name"
						/>
					</label>
					{/* this is a bootstrap button, we can have custom components inside of components */}
					<Button className="left-margin" type="submit" variant="primary"> Submit </Button>			
				</form> 

				</div>

		);
	}
}

export default FormExample;
