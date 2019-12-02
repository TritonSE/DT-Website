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

			<div className = "reach">
				Reach Out
			</div>
		</div>

			);
	}
}

export default Contact
