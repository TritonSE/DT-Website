import React, { Component } from 'react';
import Toolbar from '../components/Toolbar.js';
import AuditionImages from '../components/AuditionImages.js';
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
                    <AuditionImages />
                </Col>

                <Col className="audition-text">
                    <Container>
                        <AuditionInfo/>
                    </Container>

                    <Container>
                        <AuditionEligibility/>
                    </Container>
                </Col>
                </Row>
            </div>
        );
    }
}

export default Audition;