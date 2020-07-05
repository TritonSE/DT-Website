import React, { Component } from 'react';
import Toolbar from '../../components/Toolbar.js';
import DirectorProfile from '../../components/DirectorProfile.js'
import SupportingDirectors from '../../components/SupportingDirectors.js';
import '../../css/Directors.css';
import '../../css/Global.css';
import Footer from '../../components/Footer.js';

class Directors extends Component {

	constructor(props){
		super(props);
		this.state = { isMobile: false};

		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
		if (window.innerWidth > 600 && this.state.isMobile){
			this.setState({ isMobile: false });
		}
		else if(window.innerWidth <= 600 && !this.state.isMobile){
			this.setState({ isMobile: true });
		}
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	render() {
		var solomonText = `Anthony Charles T. Solomon is the Creative Director of the Dynamics Performance Team (DPT). He started dancing at the age of 4 at his local studio in San Jose. In 1998, Charles recieved the opportunity from his teacher and mentor, Joy Sinnott, to become an assistant teacher, and in 2001 became a full-fledged instructor at his studio.  He is proficient in teaching various levels of ballet, tap, jazz, lyrical, contemporary and hip hop. In 2007, he became a certified member of Dance Masters of California (DMC) Chapter 13 and Dance Masters of America (DMA). Since then, he has held the offices of Second Vice President, First Vice President, President, and past President of DMC Chapter 13. As DMC Chapter 13 President, he traveled to the DMA National Convention as a delegate. \n
		Charles’ performance credits include San Jose City Hall, Disneyland, and countries around the world including Mexico, Ireland, Scotland, Germany, Czechoslovakia and Italy. He has also been a featured dancer with the San Jose Symphony Orchestra and the East West Shriner Game Half Time Show. Charles’ choreographic credits include: the Lincoln HS Dance Dept., St. Francis High School Musicals, Piedmont Hills High School Musicals, Willow Glen High School Dance Team and the CSUMB Dance Team. He has also choreographed for many quinceaneras, cotillions, and flashmobs, including those of PHHS faculty and students, Saratoga Chamber of Commerce Classic Cool Car Show, and the American Cancer Society. Charles has also choreographed many award-winning routines on the Regional and National level and has also received the Grant Gray award two times for best new choreography at De Anza College. \n 
		Charles and the DPT recently celebrated their 15th season. In honor of this, they received a special commendation from U.S. Senator Dianne Feinstein for their ongoing dedication to celebrating the performing arts. \n
		Charles hopes to instill the love and joy of dance in whoever he might be teaching.  Through hard work, the final performance can be so rewarding and can even change your life!`

		var danielleText = `Danielle “Dizzle” de Ojeda became Artistic Director of the Dynamics Performance Team (DPT) in 2016 after assistant directing for three years. She began as a dancer with the company in 2005 during the team’s second season and fell in love with the Dynamics family!\n\n
		Miss Dizzle has trained and competed since age 4 in various styles. She earned her B.A. in dance from San Jose State University, receiving training from master teachers Heather Cooper, Fred Mathews, Gary Masters, Dominique Lomuljo, Mark Foehringer, Maria Basile, Jill Yager and Keith Pinto. During her college years, she danced with the resident company, University Dance Theatre, under the direction of Gary Masters. She worked with such choreographers as Rogelio Lopez and Robert Dekkers, among others. She performed in the gala at the American College Dance Festival in 2013 and 2014 for works choreographed by Rogelio Lopez and Heather Cooper respectively, and has attended ACDF twice.\n\n
		Miss Dizzle dances professionally with contemporary companies DVDance and Nhan Ho Project. Other performance credits include dancing at San Jose City Hall, Disneyland, Disneyworld, the 2016 American Cancer Society Fundraiser, Saratoga Chamber of Commerce, the Classic Cool Car Show flash mob, the San Jose Center for Performing Arts, and LEVYdance, among others.\n\n
		She has been teaching in styles such as contemporary, acro, ballet, jazz, hip hop, and lyrical for fourteen years, and is a certified Acrobatics Arts instructor. She began choreographing at age 16 with the mentorship of Charles Solomon and Sara Wardell, and continued exploring her passion in college under the mentorship of Fred Mathews. Her choreography has won first place awards at various competitions in the Bay Area. Her choreographic credits include SJSU’s Images in Dance, DVDance, Willow Glen High School Dance Team, and the Dynamics Performance Team.\n\n
		She believes the exploration of artistry is a lifelong endeavor, and is dedicated to helping others on their artistic journey.`

		if(this.state.isMobile){
			return (
				<div>
					<Toolbar bool={true}/>
					<div className="Title-Container">
						<h1 className="Title-Season Teal"> 2019-20 Season </h1>
						<h1 className="Title-Directors Pink"> Board of <br/> Directors </h1>
					</div>
					<DirectorProfile imgTop={require('../../images/directors/Creative Director Headshot.jpg')} imgBottom={require('../../images/directors/Creative Director Action shot.jpg')} title="Creative Director" name="Charles Solomon" text= {solomonText}/>
					<DirectorProfile imgTop={require('../../images/directors/Artistic Director Headshot.jpg')} imgBottom={require('../../images/directors/Artistic Director Action shot.jpg')} title="Artistic Director" name="Danielle de Ojeda" text={danielleText}/>
					<SupportingDirectors names={["Eric Misenhimer"]} titles={["President"]}/>
					<SupportingDirectors names={["Diana Zuger"]} titles={["Vice President"]}/>
					<SupportingDirectors names={["Meiling Adams"]} titles={["Secretary"]}/>
					<SupportingDirectors names={["Marybelle Mejia"]} titles={["Director"]}/>
					<SupportingDirectors names={["Malou Arquero"]} titles={["Treasurer"]}/>
					<SupportingDirectors names={["Anne Marie Asis"]} titles={["Dynamios Liaison"]}/>
					<SupportingDirectors names={["Danielle Zuger"]} titles={["Director"]}/>
					<SupportingDirectors names={["Lloyd Alaban"]} titles={["Grant Writer"]}/>
					<Footer/>
				</div>
			);
		}
		else{
			return (
				<div>
					<Toolbar bool={true}/>
					<div className="Title-Container">
						<h1 className="Title-Season Teal"> 2019-20 Season </h1>
						<h1 className="Title-Directors Pink"> Board of Directors </h1>
					</div>
					<DirectorProfile imgTop={require('../../images/directors/Creative Director Headshot.jpg')} imgBottom={require('../../images/directors/Creative Director Action shot.jpg')} title="Creative Director" name="Charles Solomon" text= {solomonText}/>
					<br/>
					<DirectorProfile imgTop={require('../../images/directors/Artistic Director Headshot.jpg')} imgBottom={require('../../images/directors/Artistic Director Action shot.jpg')} title="Artistic Director" name="Danielle de Ojeda" text={danielleText}/>
					<br/>
					<SupportingDirectors names={["Eric Misenhimer", "Diana Zuger", "Meiling Adams", "Marybelle Mejia"]} titles={["President", "Vice President", "Secretary", "Director"]}/>
					<SupportingDirectors names={["Malou Arquero", "Anne Marie Asis", "Danielle Zuger", "Lloyd Alaban"]} titles={["Treasurer", "Dynamios Liaison", "Director", "Grant Writer"]}/>
					<Footer/>
				</div>
			);
		}
	}
}

export default Directors
