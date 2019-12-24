import React, { Component } from 'react';
import Toolbar from '../components/Toolbar.js';
import '../css/Contact.css';
class Contact extends Component {
	render() {
		return (
			<div>
				<Toolbar />
			<div className = "number"> 
			<a href = "mailto:dynamicsperformanceteam@gmail.com" target="blank" >Email</a>
			<br></br>
			<a href = "https://www.facebook.com/DynamicsPerformanceTeam/" target = "blank">  Facebook </a>
			<br></br>
			<a href = "https://www.instagram.com/dynamicsperformanceteam/?hl=en" target = "blank"> Instagram </a>
			<br></br>
			<a href = "https://www.yelp.com/biz/dynamics-performance-team-san-jose" target = "blank"> Yelp </a>
			</div>
			<div className = "reach">
				Reach Out

			);
	}
}

export default Contact
