import React, { Component } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import Support from './pages/Support';
import Directors from './pages/About/Directors';
import Audition from './pages/Audition'
import Gallery from './pages/About/Gallery'
import Mission from './pages/About/Mission'
import About from './pages/About/About'
import History from './pages/About/History'
import {isTablet, isMobileOnly} from 'react-device-detect';
import swal from 'sweetalert';
import {Switch, Route, withRouter} from "react-router-dom";
import {TransitionGroup, CSSTransition} from 'react-transition-group';

function getPathDepth(location) {
	let pathArr = (location || {}).pathname.split('/');
	pathArr = pathArr.filter(n => n !== '');
	return pathArr.length;
}

class App extends Component {

	constructor(props){
		super(props);
		this.state={prevDepth: getPathDepth(props.location)};
	}

	componentWillReceiveProps () {
        this.setState({ prevDepth: getPathDepth(this.props.location) })
    }

	componentDidMount(){
		//visited resets to true every time a new session is started (user leaves domain)
		let visited = sessionStorage["alreadyVisited"];
		if(visited){
			return;
		}
		if(isTablet){
			swal({
				title: "Viewing Experience",
				text: "Turn tablet horizontally (landscape) for best user experience",
				button: {
					text: "Got it"
				}
			  });
		}
		else if(isMobileOnly){
			swal({
				title: "Viewing Experience",
				text: "Turn phone vertically (portrait) for best user experience",
				button: {
					text: "Got it"
				}
			  });
		}
		sessionStorage["alreadyVisited"] = true;
	}

	render() {

		const { location } = this.props;

		const currentKey= location.pathname.split("/")[1] || "/";

		const timeout = 500;

  		return (
			  <TransitionGroup component="div">
				  <CSSTransition
				  timeout={timeout}
				  key={currentKey}
				  classNames={ getPathDepth(location) - this.state.prevDepth ? 'pageSliderLeft' : 'pageSliderRight' }
				  mountOnEnter={false} unmountOnExit={false}
				//   mountOnEnter={false}
				//   unmountOnExit={true}
				  >
					<Switch location={location}>
						<Route path="/" exact render={(props) => <Home {...props}/>}/>
							<Route path="/home" exact render={(props) => <Home {...props}/>}/>
							<Route path = "/About/AboutUs" exact render = {(props) => <About {...props}/>}/>
							<Route path="/About/Directors" exact render={(props) => <Directors {...props}/>}/>
							<Route path="/Audition" exact render={(props) => <Audition {...props}/>}/>
							<Route path="/About/OurMission" exact render={(props) => <Mission {...props}/>}/>
							<Route path="/About/History" exact render={(props) => <History { ... props}/>}/> 
							<Route path="/Support" exact render={(props) => <Support {...props}/>}/>
							<Route path="/Gallery" exact render={(props) => <Gallery {...props}/>}/>
						</Switch>
				</CSSTransition>
			</TransitionGroup>

  		);
  }
}

// need to export App in order to be able to import it in other files
export default withRouter(App);
