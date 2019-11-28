import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';
import Toolbar from '../components/Toolbar.js';

class Home extends Component {
	// Takes in page name and event (click) as parameters
	handleAboutRedirect = page => e => {
		e.preventDefault();
		this.props.history.push("" + page);	// redirects to specified page
	}

	render() {
		const aboutPage = "/about";
		const supportPage = "/support";
		const contactPage = "/contact";
		return (
    	
				<Toolbar />
				/** *
				<div className="App">
				<br />
				<br />
				<br />
				<h1> Dynamics Website </h1>
				{/** About Link }
				<Link className="App-link" 
					onClick={this.handleAboutRedirect(aboutPage)}
          		rel="noopener noreferrer"
        		>
          		Go to About Page
        		</Link>		
				
				<br />
				<br />
				<br />
				{/** Support Link }
				<Link className="App-link" 
					onClick={this.handleAboutRedirect(supportPage)}
          		rel="noopener noreferrer"
        		>
          		Go to Support Page
        		</Link>
					
				{/** Contact Link }
				<br />
				<br />
				<br />
				<Link className="App-link" 
					onClick={this.handleAboutRedirect(contactPage)}
          		rel="noopener noreferrer"
        		>
          		Go to Contact Page
        		</Link>

				</div>
				*/

			
		);
	}
}

export default Home
