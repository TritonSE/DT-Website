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
				<Route path="/" exact render={(props) => <Home {...props}/>}/>
				<Route path={process.env.PUBLIC_URL + '/home'} exact render={(props) => <Home {...props}/>}/>
				<Route path={process.env.PUBLIC_URL + '/about'} exact render={(props) => <About {...props}/>}/>
				<Route path={process.env.PUBLIC_URL + '/support'} exact render={(props) => <Support {...props}/>}/>
				<Route path={process.env.PUBLIC_URL + '/contact'} exact render={(props) => <Contact {...props}/>}/>
   	 	</div>
  		);
  }
}

// need to export App in order to be able to import it in other files
export default App;
