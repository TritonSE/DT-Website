import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import '../css/App.css';

class Home extends Component {
	handleAboutRedirect(event) {
		this.props.history.push("/about");	// redirects to about page
	}

	render() {
		return (
    		<div className="App">
      		<header className="App-header">
        			<img src={logo} className="App-logo" alt="logo" />
					<Link className="App-link" 
						onClick={this.handleAboutRedirect.bind(this)}
          			rel="noopener noreferrer"
        			>
          			Go to About Page
        			</Link>
     			</header>
    		</div>
			
		);
	}
}

export default Home
