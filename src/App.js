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
import Gallery from './pages/Dropdown/Gallery'
import SimpleReactLightbox from 'simple-react-lightbox'

class App extends Component {
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
				<Route path="/Dropdown/Gallery" exact render={(props) => 	<SimpleReactLightbox> <Gallery { ... props}/> </SimpleReactLightbox>}/> 
   	 	</div>

  		);
  }
}

// need to export App in order to be able to import it in other files
export default App;
