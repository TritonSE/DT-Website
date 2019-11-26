import React, { Component } from 'react';
//can import your own css file here instead of App.css
import '../css/App.css';

// must extend "Component" and it's recommended to name the class the same name as the filename
class SimpleExample extends Component {
	// area where functions are defined (See FormExample.js)
	
	
	// render function takes care of displaying component
	render() {
		// component will render JSX (react's version of html) inside return statement
		return (
			// can only return one element so if you want more than one make sure they're nested inside a div
			<div className="simple-container">
				<h1> Simple Component Here </h1>
				<p> BOTTOM TEXT OF SIMPLE COMPONENT </p>
			</div>
		);
	}
}

// always export to allow importing in other files
export default SimpleExample;
