import React, { Component } from 'react';
import Toolbar from '../components/Toolbar.js';
import '../css/Contact.css';
class Contact extends Component {
	render() {
		return (
			<div>
			<div>
				<Toolbar />
			</div>
			
			<div className = "number"> 
			+ 818 709 1777 dynamics@ucsd.edu 
			LinkedIn
			</div>
			<div className = "reach">
				Reach Out
			</div>


		</div>

			);
	}
}

export default Contact
