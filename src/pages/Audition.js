import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
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
                    <Image src="../images/audition/first.jpg"></Image>
                    <Image src="../images/audition/second.jpg"></Image>
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