import React, { Component } from 'react';
//can import your own css file here instead of App.css
import '../css/App.css';

// must extend "Component" and it's recommended to name the class the same name as the filename
class SimpleExample extends Component {
	// render function takes care of displaying component
	render() {
		// component will render code inside return statement
		return (
			// returns only one tag so if you want more than one make sure it's nested inside a div
			<div className="simple-container">
				<h1> Simple Component Here </h1>
				<p> BOTTOM TEXT OF SIMPLE COMPONENT </p>
			</div>
		);
	}
}

export default SimpleExample;
