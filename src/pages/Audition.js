import React, { Component } from 'react';
import Toolbar from '../components/Toolbar.js';
import AuditionImages from '../components/AuditionImages.js';
import AuditionInfo from '../components/AuditionInfo.js';
import AuditionEligibility from '../components/AuditionEligibility.js';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Audition.css';

class Audition extends Component {
    componentDidMount() {
		window.scrollTo(0,0);
	}
    
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
                    
                    <div className="dots">
			        <span class="dot"></span>
			        <span class="dot"></span>
			        <span class="dot"></span>
			        </div>
                    
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
