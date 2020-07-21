import React from 'react';
import VizSensor from 'react-visibility-sensor';
import mainBanner from '../images/home/Facebook_Cover_2019.png';
import Slideshow from '../components/Slideshow.js';
import '../css/Home.css';
import '../css/Global.css';
import Toolbar from '../components/Toolbar.js';
import Footer from '../components/Footer.js';
import { Link } from 'react-router-dom';
import NoRightClickImg from '../components/NoRightClickImg';
import ModalImage from 'react-modal-image';
import Flyer from '../images/home/batch_Dynamics 2020 Show Flyer.jpg';


class Home extends React.Component {

	constructor(props){
		super(props);
		this.state = { width: 0, height: 0, imgViz: false, scroll:0, isMobile:false};
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
		if (window.innerWidth > 600 && this.state.isMobile){
			this.setState({ isMobile: false });
		}
		else if(window.innerWidth <= 600 && !this.state.isMobile){
			this.setState({ isMobile: true });
		}
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
		const x = this.dynamicText.current;

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
		if(this.state.isMobile){
			return(
				<div style={{position:"relative"}}>
					<Toolbar/>
					<NoRightClickImg src={mainBanner} style={{height: this.state.width * 0.45, width: "100%"}} disableEnlarging={true}/>
					<p className="Dynamic-Text" >A team of <span className="Pink" style={{fontStyle: 'normal',fontWeight: 'normal', marginLeft:"5px", marginRight:"5px"}}id='dynamics' ref={this.dynamicText}> dynamic </span> dancers.</p>
					<div className="Right-Container">
						<Slideshow indicators={false}/>
					</div>	
					<div className="Left-Container">
						<p className="Static-Text"> 
								The Dynamics Performance Team (DPT) is an award winning non-profit dance company training the next generation of versatile artists in San Jose and the surrounding Bay Area. Established in 2005, DPT performs and competes in jazz, contemporary, lyrical, tap, and hip hop, among others. <br/> <br/>
		
								Dancers learn quality technique along with competitive choreography in both commercial and concert styles. Like the five points of a star, DPT has five primary goals: instill technique, performance, character, dedication and passion in all of its dancers. Dancers have the opportunity to perform in groups, trios, duets, and even solos.<br/> <br/>
		
								DPT holds open auditions for dancers ages 8+ for each season, and are excited to open up the team to ages 5-7 this year! <Link className="Pink" to='/About/Audition'>Click here</Link> for more information about auditions. 
								Dancers have the opportunity to perform in groups, trios, duets, and even solos. <Link className="Pink" to="/About/AboutUs">Click here</Link> to learn more about DPT.
						</p>
					</div>
					<Footer/>
				</div>
			)
		} else{
			return(
				<div style={{position:"relative"}}>
					<Toolbar/>
					<NoRightClickImg style={{height: this.state.width * 0.4, width: "100%"}} imgClassName="banner-img" src={mainBanner} disableEnlarging={true}/>
					<div style={{display:this.state.imgViz ? "none":"flex", justifyContent:"center"}}>
						<button className="Scroll-Button Teal-Background" onClick={this.scrollToSlideShow}>
							<i className="fas fa-angle-double-down fa-2x"/>
						</button>
					</div>
					{/* <h1 className="Flight-Animation">
						Amrit
					</h1> */}
					<VizSensor
						partialVisibility
						minTopValue="35"
						onChange={(isVisible) => {
						this.setState({imgViz: isVisible})
						}}
					>
						<div className="Text-Container" ref={this.scrollReference}>
							<div className="Left-Container" style={{width: this.state.width*0.5}}>
								<p className="Dynamic-Text" >A team of <span className="Pink" style={{fontStyle: 'normal',fontWeight: 'normal'}}id='dynamics' ref={this.dynamicText}> 
										dynamic
									</span> 
									<span><br/>dancers.</span>
								</p>
								<p className="Static-Text"> 
										The Dynamics Performance Team (DPT) is an award winning non-profit dance company training the next generation of versatile artists in San Jose and the surrounding Bay Area. Established in 2005, DPT performs and competes in jazz, contemporary, lyrical, tap, and hip hop, among others. <br/> <br/>
				
										Dancers learn quality technique along with competitive choreography in both commercial and concert styles. Like the five points of a star, DPT has five primary goals: instill technique, performance, character, dedication and passion in all of its dancers. Dancers have the opportunity to perform in groups, trios, duets, and even solos.<br/> <br/>
				
										DPT holds open auditions for dancers ages 8+ for each season, and are excited to open up the team to ages 5-7 this year! <Link className="Pink" to='/About/Audition'>Click here</Link> for more information about auditions. 
										Dancers have the opportunity to perform in groups, trios, duets, and even solos. <Link className="Pink" to="/About/AboutUs">Click here</Link> to learn more about DPT.
								</p>
							</div>
							<div className="Right-Container" style={{width: this.state.width*0.5}}>
								<Slideshow indicators={true}/>
							</div>	
						</div>
					</VizSensor>
					<Footer/>
				</div>
			)
		}
	}
}

export default Home