import React, { Component } from 'react';
import Toolbar from '../components/Toolbar.js';
import AuditionImages from '../components/AuditionImages.js';
import Dots from '../components/Dots';
import AuditionInfo from '../components/AuditionInfo.js';
import AuditionEligibility from '../components/AuditionEligibility.js';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Audition.css';

class Audition extends Component {
    render() {
        return(
            <div className="hideHorizontalScroll">
                <Toolbar bool = {false}/>
                <Row>

                <Col>
                    <AuditionImages />
                </Col>

                <Col className="audition-text font">
                    <Container>
                        <AuditionInfo/>
                    </Container>
                    
                    <Dots/>
                    
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
