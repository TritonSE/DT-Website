import React, { Component } from 'react';
import Toolbar from '../components/Toolbar.js';
import '../css/Support.css';
import '../css/Global.css';
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
			<div>
				<Toolbar/>			
					<WaysToGive/>
			</div>
			);
		}
}

export default Support