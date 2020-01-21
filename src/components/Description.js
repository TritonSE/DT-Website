import React, { Component } from 'react';
import '../css/Description.css';
import { Container, Row ,Col} from 'react-bootstrap';
import {MemberInfo} from './MemberInfo.js';


class Description extends Component {
    render() {
        return(
            <Container>
                <div>
                {MemberInfo.info.map( (info, i) =>
                <InfoItem pic = {info.image} role = {info.role} name = {info.name} />)}
                </div>
            </Container>
        );
    }
}

class InfoItem extends Component {
    render() {
        return(
            <div>
            {/* FOR MOBILE */}
            <div className="mobile">
                <Row>
                    <Col>
                    <h1 className="Role">
                        <span>{this.props.role}</span>
                    </h1> 
                    <h2 className="Name"> {this.props.name}</h2>
                    </Col>
                    <Col>
                    <img className="Image"
                        src = {this.props.pic}
                        alt = "Could not load"
                    />
                    </Col>
                </Row>
            </div>
            <div className="web">
            <Row>
               <Col> 
                     <img className="Image"
                        src = {this.props.pic}
                        alt = "Could not load"
                    />
               </Col>
               <Col>
                    <h1 className="Role">
                        <span>{this.props.role}</span>
                    </h1> 
                    <h2 className="Name"> {this.props.name}</h2>
                </Col>
            </Row>
            </div>
            </div>
        )
    }
}

export default Description;