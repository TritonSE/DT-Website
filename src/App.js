import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import { Route } from 'react-router-dom';

// importing pages
import Home from './pages/Home';
import About from './pages/About';
import Support from './pages/Support';
import Contact from './pages/Contact';

class App extends Component {
	render() {
  		return (
    		<div>
				<Route path="/" exact render={(props) => <Home {...props}/>}/>
				<Route path="/about" exact render={(props) => <About {...props}/>}/>
				<Route path="/support" exact render={(props) => <Support {...props}/>}/>
				<Route path="/contact" exact render={(props) => <Contact {...props}/>}/>
   	 	</div>
  		);
  }
}

export default App;
