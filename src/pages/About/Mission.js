import React from 'react';
import Toolbar from '../../components/Toolbar';
import { Container, Col, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../css/Mission.css';
import '../../css/Global.css';
import image from "../../images/mission/Mission Page.jpg";
import Footer from '../../components/Footer';
import NoRightClickImg from '../../components/NoRightClickImg';

class Mission extends React.Component{
    render() {
        return (
            <div>
				<Toolbar bool={true}/>
			{/* FOR MOBILE */}
			<div className="Mobile">
			<Container>
					<h1 className="Mission-Title"> Our Mission </h1>
					<NoRightClickImg imgClassName="Dancers-Image" src={image} alt="could not load"/>
					<p className="Mission-Paragraph"> The specific purpose of this organization is to inspire, educate, and promote passion, dedication, and performance within the art of dance.  All funds, whether income or principal, and whether acquired by gift or contribution or otherwise, shall be devoted to said purposes. </p>
					<p className="Support-link"> To donate to our non-profit, please 
					<Link style={{color: '#FF4081'}} to="/support"> click here! </Link>
					</p>
			</Container>
			</div>
			<div className="Web">
			<Container fluid>
			<div className="div">
				<Row>
				<Col className="column1">
					<h1 className="Mission-Title"> Our Mission </h1>
					<p className="Mission-Paragraph"> The specific purpose of this organization is to inspire, educate, and promote passion, dedication, and performance within the art of dance.  All funds, whether income or principal, and whether acquired by gift or contribution or otherwise, shall be devoted to said purposes. </p>
				<p className="Support-Link"> To donate to our non-profit, please 
				<Link style={{color: '#FF4081'}} to="/Support"> click here! </Link>
				</p>
				</Col>
				<Col xs={7} className="column2">
					<NoRightClickImg imgClassName="Dancers-Image" src={image} alt="could not load"/>
				</Col>
				</Row>
			</div>
			<br/>
			</Container>
			</div>
			<Footer/>
			</div>
        );
    }
}

export default Mission