import React, { Component } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Support from './pages/Support';
import Contact from './pages/Contact';
import Directors from './pages/Dropdown/Directors';

class App extends Component {
	render() {
  		return (
    		<div>
				<Route path="/" exact render={(props) => <Home {...props}/>}/>
				<Route path="/home" exact render={(props) => <Home {...props}/>}/>
				<Route path="/Dropdown/directors" exact render={(props) => <Directors {...props}/>}/>
				<Route path="/support" exact render={(props) => <Support {...props}/>}/>
				<Route path="/contact" exact render={(props) => <Contact {...props}/>}/>
   	 	</div>
  		);
  }
}

// need to export App in order to be able to import it in other files
export default App;
