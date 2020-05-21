import React, { Component } from 'react';
import Toolbar from "../../components/Toolbar";
import { Container, Col, Row } from 'react-bootstrap';
import '../../css/About.css';
import image1 from "../../images/colleges/mmc.png";
import image2 from "../../images/colleges/sdsu.png";
import image3 from "../../images/colleges/ssu.jpg";
import image4 from "../../images/colleges/sjsu.png";
import image5 from "../../images/colleges/lmu.jpg";
import image6 from "../../images/colleges/smcc.png";
import image0 from "../../images/about/About Page 1.jpg";

class About extends Component {
  render() {
    return(
      <div>
         <Toolbar bool={true}></Toolbar>
         <div className="web">
		 	<Container fluid>
			
			<table>
				<tr>
			<td className="column1">
				<h1 className="title1"> About Us </h1>
				<h1 className="content1"> The Dynamics Performance Team (DPT) is a non-profit dance company... </h1>
				<h2 className="content2"> -training the next generation of artists in San Jose and the surrounding Bay Area. Established in 2005, DPT performs and competes in styles such as jazz, contemporary, lyrical, tap, and hip hop, among others. DPT holds open auditions for dancers ages 8+ for each season, and are excited to open up the team to ages 5-7 this year! Dancers have the opportunity to perform in groups, trios, duets, and even solos. </h2>
				<h3 className="Content3"> In its now 16 seasons, DPT has brought original work to the stage every spring, priding itself on its creative and visually appealing performances. Dancers who train with DPT show a noticeable amount of growth in technique, artistry, and confidence. DPT has competed and won many titles on the regional and national level, and has received special awards for creativity and excellence. DPT has performed throughout their community for organizations such as a Los Gatos Chamber of Commerce, San Jose City Hall, Chinese History Cultural Project, World Financial Group, India Airlines and the American Cancer Society. In 2019 the team celebrated its 15th season with special commendations from U.S. Congressman Ro Khanna, and U.S. Senator Dianne Feinstein. </h3>
				<h4 className="Content4"> DPT is a non-profit organization in San Jose not associated with any single dance studio. We audition our dancers from the Bay Area, and every dancer is given an equal opportunity regardless of the studio they attend. We hold open auditions and cast our team based solely on the dancer’s age and skill level. </h4>
			</td>
			<td className="column2">
				<img className="Image0" src={image0} alt="could not load"/>
				<Container>
				<div className="Boxed">
				<h4 className="content7"> Dancers have gone on to dance at such colleges as: </h4>
				<img className="Image1" src={image1} alt="could not load"/>
				<img className="Image2" src={image2} alt="could not load"/>
				<img className="Image3" src={image3} alt="could not load"/>
				<img className="Image4" src={image4} alt="could not load"/>
				<img className="Image5" src={image5} alt="could not load"/>
				<img className="Image6" src={image6} alt="could not load"/>

				<h5 className="content8"> Dancers have gone on to dance in such companies as: </h5>
				<ul className="Companies">
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
			<br/>
			</Container>
			</div>
      </div>
    );
  }
}

export default About

