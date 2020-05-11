import React, { Component } from 'react';
//can import your own css file here instead of App.css
import dancer from '../images/HomeDancer.jpg';
import dancer2 from '../images/HomeDancer2.jpg';
import dancer3 from '../images/HomeDancer3.jpg';
import '../css/DynamicStyle.css';
import Toolbar from '../components/Toolbar.js';
import Slideshow from '../components/Slideshow.js';
// must extend "Component" and it's recommended to name the class the same name as the filename
class HomePage extends React.Component {
	// area where functions are defined (See FormExample.js)
	constructor(props){
		super(props);
		this.myRef = React.createRef();
		this.imageRef = React.createRef();
		this.changeStyle = this.changeStyle.bind(this);
	}
	changeStyle(){
		const x = this.myRef.current;
		const y = this.imageRef.current;
		var count = 0;
		if(x.style.fontStyle=='italic'){
			x.style.fontWeight= 'bold';
			x.style.fontStyle='normal';
			y.style.transform = "rotate(0deg)";
		}
		else if(x.style.fontStyle=='normal'&&x.style.fontWeight=='normal'){
			x.style.fontWeight = 'bold';
			x.style.textDecorationLine = 'underline';
			y.style.transform = "rotate(0deg)";
		}
		else if(x.style.textDecorationLine=='underline'){
			x.style.fontStyle='italic';
			x.style.fontWeight = 'normal';
			x.style.textDecorationLine = 'initial';
			y.style.transform = "rotate(-5deg)";
		}
		else if(x.style.fontWeight=='bold'){
			x.style.fontStyle='normal';
			x.style.fontWeight='normal';
			y.style.transform = "rotate(5deg)";
		}
	}
	// render function takes care of displaying component
	render() {
		// component will render JSX (react's version of html) inside return statement
		/** 
		const slideImages = [
			dancer,
			dancer2, 
			dancer3 
		];
		const properties = {
			duration: 3000,
			transitionDuration: 500,
			infinite: true,
			indicators: true,
			arrows: true,
			onChange: (oldIndex, newIndex) => {
			  console.log(`slide transition from ${oldIndex} to ${newIndex}`);
			}
		  }
		  const Slideshow = () => {
			return (
				<div className = "danceimg" >
				<Slide {...properties}>
        <div className="each-slide">
		<img src = {slideImages[0]}> 
		  </img>
          </div>
        <div className="each-slide">
		<img src = {slideImages[1]}> 
		  </img>
          </div>
        <div className="each-slide">
		  <img src = {slideImages[2]}> 
		  </img>
          </div>
      </Slide>
	  </div>
			)
		}
		*/
		//setInterval(this.changeStyle, 1000);
		return (
			// can only return one element so if you want more than one make sure they're nested inside a div
			<div>
				<Toolbar />
			<div className="text" >
				<link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
				<p>A team of <span style={{color: '#FF4081',fontStyle: 'normal',fontWeight: 'normal'}}id='dynamics' ref={this.myRef}> <br/>dynamic</span> <span><br/>dancers.</span></p>
			</div>
			<Slideshow ref = {this.imageRef}/>
			</div>
		);
	}
}

// always export to allow importing in other files
export default HomePage;