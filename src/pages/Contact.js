import React, { Component } from 'react';
import Toolbar from '../components/Toolbar.js';
import '../css/Contact.css';
class Contact extends Component {
	render() {
		return (
			<div>
				<Toolbar />
			<div className = "number"> 
			<a href = "mailto:dynamicsperformanceteam@gmail.com">dynamicsperformanceteam@gmail.com</a>
			<a href = "https://www.facebook.com/DynamicsPerformanceTeam/"> Facebook </a>
			<br></br>
			<a href = "https://www.instagram.com/dynamicsperformanceteam/?hl=en"> Instagram </a>
			<br></br>
			<a href = "https://www.yelp.com/biz/dynamics-performance-team-san-jose"> Yelp </a>
			</div>
			<div className = "reach">
				Reach Out
			</div>


		</div>

			);
	}
}

export default Contact
