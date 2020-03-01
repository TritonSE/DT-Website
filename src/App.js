import React, { Component } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Support from './pages/Support';
import Contact from './pages/Contact';
import Directors from './pages/Dropdown/Directors';
import Join from './pages/Dropdown/Join'
import Performers from './pages/Dropdown/Performers'
import Mission from './pages/Dropdown/Mission'

class App extends Component {
	render() {
  		return (
    		<div>
				<Route path="/" exact render={(props) => <Home {...props}/>}/>
				<Route path="/home" exact render={(props) => <Home {...props}/>}/>
				<Route path="/Dropdown/directors" exact render={(props) => <Directors {...props}/>}/>
				<Route path="/Dropdown/Join" exact render={(props) => <Join {...props}/>}/>
				<Route path="/Dropdown/Performers" exact render={(props) => <Performers {...props}/>}/>
				<Route path="/Dropdown/Mission" exact render={(props) => <Mission {...props}/>}/>
				<Route path="/support" exact render={(props) => <Support {...props}/>}/>
				<Route path="/contact" exact render={(props) => <Contact {...props}/>}/>
   	 	</div>
  		);
  }
}

// need to export App in order to be able to import it in other files
export default App;
