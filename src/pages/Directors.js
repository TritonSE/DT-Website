import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../css/About.css';
import Members from '../components/Members.js';

class Directors extends Component {
    render() {
        return (
            <div>
			{/* FOR MOBILE */}
			<div className="mobile">
			<Container>
				<Col>
					<h1 className="Title2"> The Directors</h1>
					<h2 className="Content4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h2>
				</Col>
				<Members/>
				<br/>
				<br/>
			</Container>
			</div>
			<div className="web">
			<Container>
			<div className="div">
			<Row>
				<Col>
					<h1 className="Content4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h1>
				</Col>
				<Col>
					<h1 className="Title2"> The Directors</h1>
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

export default Directors