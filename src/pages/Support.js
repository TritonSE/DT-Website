import React, { Component } from 'react';
import Toolbar from '../components/Toolbar.js';
import '../css/Support.css';
import SupportMainText from '../components/SupportMainText';
import Footer from '../components/Footer.js';
import { Container, Row, Col } from 'react-bootstrap';
import {AnimatePresence, motion} from 'framer-motion';
import WaysToGive from './WaysToGive.js'

/**
 * Displays Support Page, including Navigation Bar. 
 * 
 * Problems: 
 * 		- Switch Two Layout Resizes: Goes back to stage 1 of Donation process (resets) --> Due to re-rendering, resets displayAmountAdjust to false (Stage 1)
 *      - PayPal CLIENT ID Encryption
 */
class Support extends Component {

	render() {
			return(
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
				<Toolbar bool={false}/>			
					<WaysToGive/>
			</motion.div>
			);
		}
}

export default Support