import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Toolbar from '../../components/Toolbar';
import '../../css/History.css';
import '../../css/Global.css';
import image1 from "../../images/colleges/mmc.png";
import image2 from "../../images/colleges/sdsu.png";
import image3 from "../../images/colleges/ssu.jpg";
import image4 from "../../images/colleges/sjsu.png";
import image5 from "../../images/colleges/lmu.jpg";
import image6 from "../../images/colleges/smcc.png";
import image0 from "../../images/history/Dynamics Year 1.jpg";
import Footer from '../../components/Footer.js';
import NoRightClickImg from '../../components/NoRightClickImg';

class History extends React.Component{
    render() {
        return (
            <div>
				<Toolbar/>
			{/* FOR MOBILE */}
			<div className="mobile">
			<Container>
					<h1 className="history-title"> Our History </h1>
					<NoRightClickImg imgClassName="dancers-image" src={image0} alt="could not load"/>

					<p className="History-Paragraph1"> The Dynamics Performance Team (DPT) was founded in 2005 by Creative Director Charles Solomon with a sponsorship from longtime mentor Joy Sinnott. With Miss Joy’s help, DPT held their first program, Showtime, that spring and has continued to grow over the now 16 seasons since its formation. In 2007, company member Sara Wardell joined Mr. Charles as Co-Director and in 2012 headed the incorporation of DPT as a non-profit organization. </p>
					<p className="History-Paragraph2"> The team began with a vision to bring passionate dancers together to advance their dance education, inspire creativity, and to share their love of performance with the community while also providing dancers the opportunity to compete. What began as a passion project has now grown into a pre-professional competition team, attracting dancers from around the San Jose area who want to train and compete in versatile genres of dance such as jazz, contemporary, lyrical, hip hop, and ballet. </p>
					<p className="History-Paragraph3"> Wanting to share the joy of dance with a younger generation, DPT brought on another long-standing performer and dance captain of the team, Danielle (Dizzle) de Ojeda, to direct a new junior team for 8 to 11-year-old performers in fall 2013—the Dynamos were born! In 2016, the beloved Miss Sara retired from Dynamics to start a new adventure; Miss Dizzle joined Mr. Charles as Co-Director that year, and continues to serve as Artistic Director to this date. </p>
					<p className="History-Paragraph4"> In its now 16 seasons, DPT has brought original work to the stage every spring, priding itself on its creative and visually appealing performances. Dancers who train with DPT show a noticeable amount of growth in technique, artistry, and confidence. DPT has competed and won many titles on the regional and national level, and has received special awards for creativity and excellence. DPT has performed throughout their community for organizations such as a Los Gatos Chamber of Commerce, San Jose City Hall, Chinese History Cultural Project, World Financial Group, India Airlines and the American Cancer Society. In 2019 the team celebrated its 15th season with special commendations from U.S. Congressman Ro Khanna, and U.S. Senator Dianne Feinstein. </p>
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
				<br/>
				<br/>
			</Container>
			</div>
			<div className="web">
			<Container>
			<div className="div">
            <Row>
			<Col className="column1">
				<h1 className="History-Title"> Our History </h1>
				<NoRightClickImg imgClassName="Dancers-image" src={image0} alt="could not load"/>
			</Col>
			<Col xs={7} className="column2">
				<p className="History-Paragraph1"> The Dynamics Performance Team (DPT) was founded in 2005 by Creative Director Charles Solomon with a sponsorship from longtime mentor Joy Sinnott. With Miss Joy’s help, DPT held their first program, Showtime, that spring and has continued to grow over the now 16 seasons since its formation. In 2007, company member Sara Wardell joined Mr. Charles as Co-Director and in 2012 headed the incorporation of DPT as a non-profit organization. </p>
				<p className="History-Paragraph2"> The team began with a vision to bring passionate dancers together to advance their dance education, inspire creativity, and to share their love of performance with the community while also providing dancers the opportunity to compete. What began as a passion project has now grown into a pre-professional competition team, attracting dancers from around the San Jose area who want to train and compete in versatile genres of dance such as jazz, contemporary, lyrical, hip hop, and ballet. </p>
				<p className="History-Paragraph3"> Wanting to share the joy of dance with a younger generation, DPT brought on another long-standing performer and dance captain of the team, Danielle (Dizzle) de Ojeda, to direct a new junior team for 8 to 11-year-old performers in fall 2013—the Dynamos were born! In 2016, the beloved Miss Sara retired from Dynamics to start a new adventure; Miss Dizzle joined Mr. Charles as Co-Director that year, and continues to serve as Artistic Director to this date. </p>
				<p className="History-Paragraph4"> In its now 16 seasons, DPT has brought original work to the stage every spring, priding itself on its creative and visually appealing performances. Dancers who train with DPT show a noticeable amount of growth in technique, artistry, and confidence. DPT has competed and won many titles on the regional and national level, and has received special awards for creativity and excellence. DPT has performed throughout their community for organizations such as a Los Gatos Chamber of Commerce, San Jose City Hall, Chinese History Cultural Project, World Financial Group, India Airlines and the American Cancer Society. In 2019 the team celebrated its 15th season with special commendations from U.S. Congressman Ro Khanna, and U.S. Senator Dianne Feinstein. </p>
			</Col>
			</Row>
			<div className="boxed">
				<h3 className="Colleges-List"> Dancers have gone on to dance at such colleges as: </h3>
				<img className="MMC-Logo" src={image1} alt="could not load"/>
				<img className="SDSU-Logo" src={image2} alt="could not load"/>
				<img className="SSU-Logo" src={image3} alt="could not load"/>
				<img className="SJSU-Logo" src={image4} alt="could not load"/>
				<img className="LMU-Logo" src={image5} alt="could not load"/>
				<img className="SMCC-Logo" src={image6} alt="could not load"/>

				<h4 className="Companies-List"> Dancers have gone on to dance in such companies as: </h4>
				<ul className="Companies">
					<li> University Dance Theatre – SJSU </li>
					<li> DVDance </li>
					<li> Nhan Ho Dance Project </li>
					<li> UCSB Dance Company </li>
				</ul>
			</div>
			</div>
			<br/>
			</Container>
			</div>
			<Footer/>
			</div>
        );
    }
}

export default History