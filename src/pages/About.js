import React, { Component } from 'react';
import Toolbar from '../components/Toolbar.js';
import { Container, Col, Row } from 'react-bootstrap';
import '../css/About.css';
import Members from '../components/Members.js';

class About extends Component {
	render() {
		return (
			<div>
			{/* FOR MOBILE */}
			<div className="mobile">
			<Toolbar/>
			<Container>
				<Col>
					<h1 className="Title"> Our Mission </h1>
					<h2 className="Content1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </h2>
					<h2 className="Content2"> Aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu. </h2>
					<h1 className="Title2"> The Lineup </h1>
					<h2 className="Content4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h2>
				</Col>
				<Members/>
				<br/>
				<br/>
			</Container>
			</div>
			<div className="web">
			<Toolbar/>
			<Container>
			<div className="div">
			<Row>
			<Col>
				<h1 className="Title"> Our Mission </h1>
			</Col>
			<Col>
				<h1 className="Content1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </h1>
				<h2 className="Content2"> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis.</h2>
				<h3 className="Content3"> Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.</h3>
			</Col>
			</Row>
			<Row>
				<Col>
					<h1 className="Content4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h1>
				</Col>
				<Col>
					<h1 className="Title2"> The Lineup </h1>
				</Col>
			</Row>
				<Members/>
			</div>
			<br/>
			<br/>
			<br/>
			</Container>
			</div>
			</div>
		);
	}
}

export default About
