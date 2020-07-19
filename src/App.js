import React, { Component } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import Support from './pages/Support';
import Directors from './pages/About/Directors';
import Audition from './pages/Audition'
import Gallery from './pages/Gallery'
import Mission from './pages/About/Mission'
import About from './pages/About/About'
import History from './pages/About/History'
import {isTablet, isMobileOnly} from 'react-device-detect';
import swal from 'sweetalert';
import {Route} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.js';

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
				text: "Use in landscape for best user experience!",
				button: {
					text: "Got it"
				}
			  });
		}
		else if(isMobileOnly){
			swal({
				title: "Viewing Experience",
				text: "Use in portrait for best user experience!",
				button: {
					text: "Got it"
				}
			  });
		}
		sessionStorage["alreadyVisited"] = true;
	}

	render() {

  		return (
			<ScrollToTop>
				<Route path="/" exact render={(props) => <Home {...props}/>}/>
				<Route path="/home" exact render={(props) => <Home {...props}/>}/>
				<Route path="/About/AboutUs" exact render = {(props) => <About {...props}/>}/>
				<Route path="/About/Directors" exact render={(props) => <Directors {...props}/>}/>
				<Route path="/About/Audition" exact render={(props) => <Audition {...props}/>}/>
				<Route path="/About/OurMission" exact render={(props) => <Mission {...props}/>}/>
				<Route path="/About/History" exact render={(props) => <History { ... props}/>}/> 
				<Route path="/Support" exact render={(props) => <Support {...props}/>}/>
				<Route path="/Gallery" exact render={(props) => <Gallery {...props}/>}/>
			</ScrollToTop>
  		);
  }
}

// need to export App in order to be able to import it in other files
export default App;
