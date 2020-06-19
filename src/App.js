import React, { Component } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Support from './pages/Support';
import Directors from './pages/Dropdown/Directors';
import Audition from './pages/Audition'
import Mission from './pages/Dropdown/Mission'
import About from './pages/Dropdown/About'
import History from './pages/Dropdown/History'
import {isTablet, isMobileOnly, isBrowser} from 'react-device-detect';
import swal from 'sweetalert';

class App extends Component {

	componentDidMount(){
		//visited resets to true every time a new session is started (user leaves domain)
		let visited = sessionStorage["alreadyVisited"];
		if(visited){
			return;
		}
		if(isTablet){
			swal({
				title: "Viewing Experience",
				text: "Turn tablet horizontally (landscape) for best user experience",
				button: {
					text: "Got it"
				}
			  });
		}
		else if(isMobileOnly){
			swal({
				title: "Viewing Experience",
				text: "Turn phone vertically (portrait) for best user experience",
				button: {
					text: "Got it"
				}
			  });
		}
		sessionStorage["alreadyVisited"] = true;
	}

	render() {
  		return (
    		<div>
				<Route path="/" exact render={(props) => <Home {...props}/>}/>
				<Route path="/home" exact render={(props) => <Home {...props}/>}/>
				<Route path = "/Dropdown/About" exact render = {(props) => <About {...props}/>}/>
				<Route path="/Dropdown/Directors" exact render={(props) => <Directors {...props}/>}/>
				<Route path="/Auditions" exact render={(props) => <Audition {...props}/>}/>
				<Route path="/Dropdown/Mission" exact render={(props) => <Mission {...props}/>}/>
				<Route path="/Dropdown/History" exact render={(props) => <History { ... props}/>}/> 
				<Route path="/support" exact render={(props) => <Support {...props}/>}/>
   	 	</div>
  		);
  }
}

// need to export App in order to be able to import it in other files
export default App;
