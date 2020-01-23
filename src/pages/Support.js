import React, { Component } from 'react';
import Toolbar from '../components/Toolbar.js';
import '../css/Support.css';
import SupportMainText from '../components/SupportMainText';

/**
 * Displays Support Page, including Navigation Bar. 
 * 
 * Problems: 
 * 		- Safari <= 600: Paypal state styling off --> CSS problem at Mobile version
 *      - Default <= 600: Wackly layout since it defaults to layout 1, not 2 --> Due to isMobile state (default = false)
 * 		- Switch Two Layout Resizes: Goes back to stage 1 of Donation process (resets) --> Due to re-rendering, resets displayAmountAdjust to false (Stage 1)
 */
class Support extends Component {

	render() {
			return(
			<div>
				<Toolbar />
				<SupportMainText/>
			</div>
			);
		}
}

export default Support