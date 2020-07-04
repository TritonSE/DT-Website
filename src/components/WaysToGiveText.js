import React, { Component } from 'react';
import '../css/WaysToGive.css';
import SponsorLetter from '../images/waytogive/Sponsor Letter 2019-20.pdf'
import SupportStates from '../components/SupportStates.js';
import CurvedArrow from "react-curved-arrow";
import '../css/Support.css';
import {AiFillGift} from 'react-icons/ai';
import {FaDonate} from 'react-icons/fa';
import { AwesomeButton  } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

class WaysToGiveText extends Component {
    constructor(props){
		super(props);
		this.state = {donateButtonClicked: false};
		this.handleDonateButtonClicked = this.handleDonateButtonClicked.bind(this);
	}

	handleDonateButtonClicked = () =>{
		this.setState({
			donateButtonClicked: true
		});
	}


    render() {
        return (
            <div className = "bodytxt">
                <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
                <p> 
                	Dynamics Performance Team is proud to be part of the local arts community in the Bay Area for the past 15 years. We are committed to giving youth and young adults the opportunity to train in versatile genres and grow their passion for dance. Performing Arts are an essential part of the community, and with your help, we can continue to offer training to all dancers regardless of financial background.
 				</p>
 				<p>
					Dynamics Performance Team is a publicly Funded 501(c)(3) non-profit organization that depends on our generous donors, corporate sponsors, and friends. Your tax-deductible gift allows Dynamics to present quality performances, keep rates low, and offer scholarships to our dancers—affordability should not be an obstacle in the way of our dancers’ dreams. Your donation also allows for Dynamics dancers to compete, train at conventions, travel to nationals, and purchase costumes.
				</p>
				<p className="test">
					To learn more about our individual or corporate giving programs and benefits, 
					<a href = {SponsorLetter} target = "_blank"> <span style={{color: '#FF4081',fontStyle: 'normal',fontWeight: 'normal', textDecorationLine: 'underline'}}>please read our sponsor letter here </span></a>, or contact us at dynamicsperformanceteam@gmail.com. You can also give us a call at (408) 622-0249.
				</p>
				<div className="button-container">
					{ this.state.donateButtonClicked ?
							
							<SupportStates />
					:
						
					<AwesomeButton
						ripple
						onPress={
							this.handleDonateButtonClicked
						  }
						  size="large"
						  
					>
						<FaDonate/>
						I'll Support You!
					</AwesomeButton>

							// <button 
							// 	className="btn btn-secondary Donate-Button"
							// 	onClick={this.handleDonateButtonClicked}
							// >
							// 	{/* <IoIosCalculator/> */}
							// 	<AiFillGift/>
							// 	I'll Donate!
								
							// </button>

					
					}
				</div>
				{/* fromOffsetX={-300} middleX={-300} toOffsetX={-50} toOffsetY={-30} dynamicUpdate={true} width={4} */}
				{/* <CurvedArrow fromSelector=".test" toSelector=".button-container" fromOffsetX={300} middleX={300} toOffsetX={50} toOffsetY={-30} dynamicUpdate={true} width={4}  /> */}
					
            </div>
        	);
    }
}

export default WaysToGiveText;