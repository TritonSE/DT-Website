import React, { Component } from 'react';
import VizSensor from 'react-visibility-sensor';
import mainBanner from '../images/home/Facebook_Cover_2019.png';
import Slideshow from '../components/Slideshow.js'
import '../css/Home.css';
import Toolbar from '../components/Toolbar.js';
import Footer from '../components/Footer.js';


class Home extends React.Component {

	constructor(props){
		super(props);
		this.state = { width: 0, height: 0, imgViz: false };
		this.dynamicText = React.createRef();
		this.scrollReference = React.createRef();

		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.changeStyle = this.changeStyle.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.textTimer = setInterval(this.changeStyle, 1000);
		window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	scrollToSlideShow = () => {
		window.scrollTo({
			top:this.scrollReference.current.offsetTop,
			behavior:"smooth"
		})
    }
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
		clearInterval(window.textTimer);
	}

	changeStyle(){
<<<<<<< HEAD
		const x = this.dynamicText.current;
=======
		const x = this.myRef.current;
		const y = this.imageRef.current;
		//var count = 0;
>>>>>>> 55eb62d0c641d1f71f13c0cba507ee99059149ae

		if(x.style.fontStyle==='italic'){
			x.style.fontWeight= 'bold';
			x.style.fontStyle='normal';
		}
		else if(x.style.fontStyle==='normal'&&x.style.fontWeight==='normal'){
			x.style.fontWeight = 'bold';
			x.style.textDecorationLine = 'underline';
		}
		else if(x.style.textDecorationLine==='underline'){
			x.style.fontStyle='italic';
			x.style.fontWeight = 'normal';
			x.style.textDecorationLine = 'initial';
		}
		else if(x.style.fontWeight==='bold'){
			x.style.fontStyle='normal';
			x.style.fontWeight='normal';
		}
	}
	
	render() {

		return(
			<div>
<<<<<<< HEAD
				<Toolbar/>
				{/* <Slideshow banner={true} slideImages={[
					require('../images/home/Facebook_Cover_2019.png'),
					require('../images/home/Main Page 2.jpg'),
					require('../images/home/Main Page 3.jpg')
				]}/> */}
				<img onContextMenu={(e)=> {e.preventDefault(); return false;}} src={mainBanner} style={{height: this.state.width * 0.4, width: this.state.width}}/>
				<div style={{display:this.state.imgViz ? "none":"flex", justifyContent:"center"}}>
					<button className="Scroll-Button" onClick={this.scrollToSlideShow}>
						<i class="fas fa-angle-double-down fa-2x"/>
					</button>
				</div>
				<VizSensor
					partialVisibility
					minTopValue="35"
					onChange={(isVisible) => {
					this.setState({imgViz: isVisible})
					}}
				>
					<div className="Text-Container" ref={this.scrollReference}>
						<div className="Left-Container" style={{width: this.state.width*0.5}}>
							<p className="Dynamic-Text" >A team of <span style={{color: '#FF4081',fontStyle: 'normal',fontWeight: 'normal'}}id='dynamics' ref={this.dynamicText}> dynamic</span> <span><br/>dancers.</span></p>
							<p className="Static-Text"> 
									The Dynamics Performance Team (DPT) is an award winning non-profit dance company training the next generation of versatile artists in San Jose and the surrounding Bay Area. Established in 2005, DPT performs and competes in jazz, contemporary, lyrical, tap, and hip hop, among others. <br/> <br/>
			
									Dancers learn quality technique along with competitive choreography in both commercial and concert styles. Like the five points of a star, DPT has five primary goals: instill technique, performance, character, dedication and passion in all of its dancers. Dancers have the opportunity to perform in groups, trios, duets, and even solos.<br/> <br/>
			
									DPT holds open auditions for dancers ages 8+ for each season, and are excited to open up the team to ages 5-7 this year! <a style={{color: '#FF4081'}} href='https://stackoverflow.com/questions/30208108/make-part-of-the-text-as-link-react-localization'>Click here</a> for more information. 
									Dancers have the opportunity to perform in groups, trios, duets, and even solos. <a style={{color: '#FF4081'}} href='https://stackoverflow.com/questions/30208108/make-part-of-the-text-as-link-react-localization'>Click here</a> to learn more about DPT.
							</p>
						</div>
						<div className="Right-Container" style={{width: this.state.width*0.5}}>
							<Slideshow slideImages={[
								require('../images/home/Main Page 1.jpg'), 
								require('../images/home/Main Page 4.jpg'),
								require('../images/home/Main Page 5.jpg'), 
								require('../images/home/Main Page 6.jpg'),
								require('../images/home/Main Page 7.jpg'), 
								require('../images/home/Main Page 8.jpg'),
								require('../images/home/Main Page 9.jpg'), 
								require('../images/home/Main Page 10.jpg'),
								require('../images/home/Main Page 11.jpg'), 
								require('../images/home/Main Page 12.jpg'),
								require('../images/home/Main Page 13.jpg'), 
								require('../images/home/Main Page 14.jpg')
								]}/>
						</div>	
					</div>
				</VizSensor>
				<Footer/>
=======
				<Toolbar />
			<div className="text" onContextMenu={(e)=> e.preventDefault()}>
				<link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
				<p>A team of <span style={{color: '#FF4081',fontStyle: 'normal',fontWeight: 'normal'}}id='dynamics' ref={this.myRef}> <br/>dynamic</span> <span><br/>dancers.</span></p>
				<img className='danceimg' src={dancer} style={{transform: "rotate(5deg)"}} ref = {this.imageRef} alt="error loading img"/>
			</div>
>>>>>>> 55eb62d0c641d1f71f13c0cba507ee99059149ae
			</div>
		)
	}
}

export default Home
