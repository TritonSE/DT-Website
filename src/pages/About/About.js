import React, { Component } from 'react';
import Toolbar from "../../components/Toolbar";
import { Container } from 'react-bootstrap';
import '../../css/About.css';
import '../../css/Global.css';
import image1 from "../../images/colleges/mmc.png";
import image2 from "../../images/colleges/sdsu.png";
import image3 from "../../images/colleges/ssu.jpg";
import image4 from "../../images/colleges/sjsu.png";
import image5 from "../../images/colleges/lmu.jpg";
import image6 from "../../images/colleges/smcc.png";
import image from "../../images/about/About Page 1.jpg";
import Footer from "../../components/Footer";
import NoRightClickImg from '../../components/NoRightClickImg';

class About extends Component {
  render() {
    return(
      <div>
         <Toolbar bool={true}></Toolbar>

		 <div className="Mobile">
			<Container>
					<h1 className="About-Title"> About Us </h1>
					<NoRightClickImg imgClassName="Dancers-Image" src={image} alt="could not load"/>
					<p className="About-Paragraph1"> The Dynamics Performance Team (DPT) is a non-profit dance company... </p>
					<p className="About-Paragraph2"> -training the next generation of artists in San Jose and the surrounding Bay Area. Established in 2005, DPT performs and competes in styles such as jazz, contemporary, lyrical, tap, and hip hop, among others. DPT holds open auditions for dancers ages 8+ for each season, and are excited to open up the team to ages 5-7 this year! Dancers have the opportunity to perform in groups, trios, duets, and even solos. </p>
					<p className="About-Paragraph3"> In its now 16 seasons, DPT has brought original work to the stage every spring, priding itself on its creative and visually appealing performances. Dancers who train with DPT show a noticeable amount of growth in technique, artistry, and confidence. DPT has competed and won many titles on the regional and national level, and has received special awards for creativity and excellence. DPT has performed throughout their community for organizations such as a Los Gatos Chamber of Commerce, San Jose City Hall, Chinese History Cultural Project, World Financial Group, India Airlines and the American Cancer Society. In 2019 the team celebrated its 15th season with special commendations from U.S. Congressman Ro Khanna, and U.S. Senator Dianne Feinstein. </p>
					<p className="About-Paragraph4"> DPT is a non-profit organization in San Jose not associated with any single dance studio. We audition our dancers from the Bay Area, and every dancer is given an equal opportunity regardless of the studio they attend. We hold open auditions and cast our team based solely on the dancer’s age and skill level. </p>
					<Container>
						<div className="Boxed">

						<h3 className="Colleges-List"> Dancers have gone on to dance at such colleges as: </h3>
						<ul className="Colleges">
							<li> Marymount Manhattan College </li>
							<li> San Diego State University </li>
							<li> Saint Mary's College of California </li>
							<li> San Jose State University </li>
							<li> Loyola Marymount University </li>
							<li> Sonoma State University </li>
						</ul>

						<h4 className="Companies-List"> Dancers have gone on to dance in such companies as: </h4>
						<ul className="companies">
							<li> University Dance Theatre – SJSU </li>
							<li> DVDance </li>
							<li> Nhan Ho Dance Project </li>
							<li> UCSB Dance Company </li>
						</ul>
						</div>
					</Container>
			</Container>
		 </div>

         <div className="Web">
		 	<Container fluid>
			
			<table>
				<tr>
			<td className="column1">
				<h1 className="About-Title"> About Us </h1>
				<p className="About-Paragraph1"> The Dynamics Performance Team (DPT) is a non-profit dance company... </p>
				<p className="About-Paragraph2"> -training the next generation of artists in San Jose and the surrounding Bay Area. Established in 2005, DPT performs and competes in styles such as jazz, contemporary, lyrical, tap, and hip hop, among others. DPT holds open auditions for dancers ages 8+ for each season, and are excited to open up the team to ages 5-7 this year! Dancers have the opportunity to perform in groups, trios, duets, and even solos. </p>
				<p className="About-Paragraph3"> In its now 16 seasons, DPT has brought original work to the stage every spring, priding itself on its creative and visually appealing performances. Dancers who train with DPT show a noticeable amount of growth in technique, artistry, and confidence. DPT has competed and won many titles on the regional and national level, and has received special awards for creativity and excellence. DPT has performed throughout their community for organizations such as a Los Gatos Chamber of Commerce, San Jose City Hall, Chinese History Cultural Project, World Financial Group, India Airlines and the American Cancer Society. In 2019 the team celebrated its 15th season with special commendations from U.S. Congressman Ro Khanna, and U.S. Senator Dianne Feinstein. </p>
				<p className="About-Paragraph4"> DPT is a non-profit organization in San Jose not associated with any single dance studio. We audition our dancers from the Bay Area, and every dancer is given an equal opportunity regardless of the studio they attend. We hold open auditions and cast our team based solely on the dancer’s age and skill level. </p>
			</td>
			<td className="column2">
				<NoRightClickImg imgClassName="dancers-Image" src={image} alt="could not load"/>
				<Container>
				<div className="Boxed">
				<h3 className="Colleges-List"> Dancers have gone on to dance at such colleges as: </h3>
				<img className="MMC-Logo" src={image1} alt="could not load"/>
				<img className="SDSU-Logo" src={image2} alt="could not load"/>
				<img className="SSU-Logo" src={image3} alt="could not load"/>
				<img className="SJSU-Logo" src={image4} alt="could not load"/>
				<img className="LMU-Logo" src={image5} alt="could not load"/>
				<img className="SMCC-Logo" src={image6} alt="could not load"/>

				<h4 className="Companies-List"> Dancers have gone on to dance in such companies as: </h4>
				<ul className="companies">
					<li> University Dance Theatre – SJSU </li>
					<li> DVDance </li>
					<li> Nhan Ho Dance Project </li>
					<li> UCSB Dance Company </li>
				</ul>
			</div>
			</Container>
			</td>
			</tr>
			</table>
			<br/>
			</Container>
			</div>
      <Footer/>
      </div>
    );
  }
}

export default About

