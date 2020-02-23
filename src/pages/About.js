import React, { Component } from 'react';
import Toolbar from '../components/Toolbar.js';
import { Container, Col, Row } from 'react-bootstrap';
import '../css/About.css';
import Mission from '../pages/Mission.js';
import Performers from '../pages/Performers.js';
import Join from '../pages/Join.js';
import Directors from '../pages/Dropdown/Directors.js';

class About extends Component {
	render() {
		return (
			<div>
				<Toolbar/>
				<Mission/>
				<Directors/>
				<Performers/>
				<Join/>
			</div>
		);
	}
}

export default About
