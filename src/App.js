import React, { Component } from 'react';
import styled from "styled-components";
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './pages/Home';
import About from './pages/About';
import Support from './pages/Support';
import Contact from './pages/Contact';
import { Transition } from 'semantic-ui-react';
import { play, exit } from './pages/functions.js';

class App extends Component {

	render() {
  		return (
    		<div className="App">
				<Route render={({location}) => (
				<TransitionGroup>
				<CSSTransition
					key={location.pathname}
					timeout={{enter: 1000, exit: 1000}}
					classNames="fade"
				  	>
				<Switch location={location}>
					<Route path="/" exact render={(props) => <Home {...props}/>}/>
                	<Route path="/home" exact render={(props) => <Home {...props}/>}/>
                	<Route path="/about" exact render={(props) => <About {...props}/>}/>
                	<Route path="/support" exact render={(props) => <Support {...props}/>}/>
                	<Route path="/contact" exact render={(props) => <Contact {...props}/>}/>
				</Switch>
				</CSSTransition>
				</TransitionGroup>
				)} />
			</div>
	);
  }
}
//const Wrapper = styled.div``;

// need to export App in order to be able to import it in other files
export default App;
