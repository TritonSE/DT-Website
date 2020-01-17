import React, { Component } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Support from './pages/Support';
import Contact from './pages/Contact';

class App extends Component {
	render() {
  		return (
    		<div>
				<Route path="/" class = "active" exact render={(props) => <Home {...props}/>}/>
				<Route path="/home" class = "active" exact render={(props) => <Home {...props}/>}/>
				<Route path="/about" class = "active" exact render={(props) => <About {...props}/>}/>
				<Route path="/support" class = "active" exact render={(props) => <Support {...props}/>}/>
				<Route path="/contact"  class = "active" exact render={(props) => <Contact {...props}/>}/>
   	 	</div>
  		);
  }
}

// need to export App in order to be able to import it in other files
export default App;
