import React, { Component } from 'react';
import Toolbar from '../components/Toolbar.js';
import AuditionInfo from '../components/AuditionInfo.js';
import AuditionEligibility from '../components/AuditionEligibility.js';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Audition.css';

class Audition extends Component {
    render() {
        return(
            <div>
                <Toolbar/>
                <Row>

                <Col>
                </Col>

                <Col className="audition-text">
                    <Container>
                        <AuditionInfo></AuditionInfo>
                    </Container>

                    <Container>
                        <AuditionEligibility></AuditionEligibility>
                    </Container>
                </Col>
                </Row>
            </div>
        );
    }
}

export default Audition;