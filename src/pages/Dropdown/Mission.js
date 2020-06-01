import React, { Component } from 'react';
import Toolbar from '../../components/Toolbar';
import { Container, Col, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../css/Mission.css';
import image from "../../images/mission/Mission Page.jpg";
import Footer from '../../components/Footer';

class Mission extends React.Component{
    render() {
        return (
            <div>
				<Toolbar bool={true}/>
			{/* FOR MOBILE */}
			<div className="Mobile">
			<Container>
					<h1 className="title1"> Our Mission </h1>
					<img className="Image" src={image} alt="could not load"/>
					<h1 className="Content1"> The specific purpose of this organization is to inspire, educate, and promote passion, dedication, and performance within the art of dance.  All funds, whether income or principal, and whether acquired by gift or contribution or otherwise, shall be devoted to said purposes. </h1>
					<h2 className="content2"> To donate to our non-profit, please 
					<Link to="/support" className="linked"> click here! </Link>
					</h2>
			<br/>
			</Container>
			</div>
			<div className="Web">
			<Container fluid>
			<div className="div">
				<Row>
				<Col className="column1">
					<h1 className="Title"> Our Mission </h1>
					<h1 className="Content1"> The specific purpose of this organization is to inspire, educate, and promote passion, dedication, and performance within the art of dance.  All funds, whether income or principal, and whether acquired by gift or contribution or otherwise, shall be devoted to said purposes. </h1>
				<h2 className="Content2"> To donate to our non-profit, please 
				<Link to="/support" className="linked"> click here! </Link>
				</h2>
				</Col>
				<Col xs={7} className="column2">
				<img className="Image" src={image} alt="could not load"/>
				</Col>
				</Row>
			</div>
			<br/>
			<br/>
			<br/>
			</Container>
			</div>
			<Footer/>
			</div>
        );
    }
}

export default Mission