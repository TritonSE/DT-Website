import React, { Component } from 'react';
import Toolbar from '../../components/Toolbar';
import { Container, Col, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../css/Mission.css';
import image from "../../images/mission/Mission Page.jpg";

class Mission extends React.Component{
    render() {
        return (
            <div>
				<Toolbar bool={true}/>
			{/* FOR MOBILE */}
			<div className="mobile">
			<Container>
				<Col>
					<h1 className="Title"> Our Mission </h1>
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
					<h1 className="Title"> Our Mission </h1>
					<h1 className="Content1"> The specific purpose of this organization is to inspire, educate, and promote passion, dedication, and performance within the art of dance.  All funds, whether income or principal, and whether acquired by gift or contribution or otherwise, shall be devoted to said purposes. </h1>
				<h2 className="Content2"> To donate to our non-profit, please 
				<Link to="/support" className="linked"> click here! </Link>
				</h2>
				</Col>
				<Col xs={7}>
				<img className="Image" src={image} alt="could not load"/>
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

export default Mission