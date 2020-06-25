import React, { Component } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Support from './pages/Support';
import Directors from './pages/About/Directors';
import Audition from './pages/Audition'
import Mission from './pages/About/Mission'
import About from './pages/About/About'
import History from './pages/About/History'

class App extends Component {
	render() {
  		return (
    		<div>
				<Route path="/" exact render={(props) => <Home {...props}/>}/>
				<Route path="/home" exact render={(props) => <Home {...props}/>}/>
				<Route path = "/About/AboutUs" exact render = {(props) => <About {...props}/>}/>
				<Route path="/About/Directors" exact render={(props) => <Directors {...props}/>}/>
				<Route path="/Audition" exact render={(props) => <Audition {...props}/>}/>
				<Route path="/About/OurMission" exact render={(props) => <Mission {...props}/>}/>
				<Route path="/About/History" exact render={(props) => <History { ... props}/>}/> 
				<Route path="/Support" exact render={(props) => <Support {...props}/>}/>
   	 	</div>
  		);
  }
}

// need to export App in order to be able to import it in other files
export default App;
