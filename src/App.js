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
				<Route path={process.env.PUBLIC_URL + '/'} exact render={(props) => <Home {...props}/>}/>
				<Route path={process.env.PUBLIC_URL + '/home'} render={(props) => <Home {...props}/>}/>
				<Route path={process.env.PUBLIC_URL + '/about'} render={(props) => <About {...props}/>}/>
				<Route path={process.env.PUBLIC_URL + '/support'} render={(props) => <Support {...props}/>}/>
				<Route path={process.env.PUBLIC_URL + '/contact'} render={(props) => <Contact {...props}/>}/>
   	 	</div>
  		);
  }
}

// need to export App in order to be able to import it in other files
export default App;
