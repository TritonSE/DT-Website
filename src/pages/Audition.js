import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../css/About.css';
import Toolbar from '../components/Toolbar'

class Join extends React.Component{
    render() {
        return (
            <div>
            {/* FOR MOBILE */}
			<Toolbar/>
			<div className="mobile">
			<Container>
				<Col>
					<h1 className="Title"> AUDITIONS PAGE</h1>
					<h2 className="Content1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </h2>
					<h2 className="Content2"> Aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu. </h2>
				</Col>
				<br/>
				<br/>
			</Container>
			</div>
			<div className="web">
			<Container>
			<div className="div">
			<Row>
			<Col>
				<h1 className="Title"> AUDITION PAGE</h1>
			</Col>
			<Col>
				<h1 className="Content1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </h1>
				<h2 className="Content2"> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis.</h2>
				<h3 className="Content3"> Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.</h3>
			</Col>
			</Row>
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

export default Join