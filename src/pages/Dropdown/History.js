import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Toolbar from '../../components/Toolbar';
import '../../css/History.css';
import image1 from "../../images/colleges/mmc.png";
import image2 from "../../images/colleges/sdsu.png";
import image3 from "../../images/colleges/ssu.jpg";
import image4 from "../../images/colleges/sjsu.png";
import image5 from "../../images/colleges/lmu.jpg";
import image6 from "../../images/colleges/smcc.png";

class History extends React.Component{
    render() {
        return (
            <div>
				<Toolbar bool={true}/>
			{/* FOR MOBILE */}
			<div className="mobile">
			<Container>
				<Col>
					<h1 className="Title"> Our Mission </h1>
					<h2 className="Content1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </h2>
					<h2 className="Content2"> Aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu. </h2>
				</Col>
				<br/>
				<br/>
			</Container>
			</div>
            <Toolbar/>
			<div className="web">
			<Container>
			<div className="div">
            <Row>
			<Col>
				<h1 className="title2"> Our History </h1>
			</Col>
			<Col xs={7}>
				<h1 className="content3"> The Dynamics Performance Team (DPT) was founded in 2005 by Creative Director Charles Solomon with a sponsorship from longtime mentor Joy Sinnott. With Miss Joy’s help, DPT held their first program, Showtime, that spring and has continued to grow over the now 16 seasons since its formation. In 2007, company member Sara Wardell joined Mr. Charles as Co-Director and in 2012 headed the incorporation of DPT as a non-profit organization. </h1>
				<h2 className="content4"> The team began with a vision to bring passionate dancers together to advance their dance education, inspire creativity, and to share their love of performance with the community while also providing dancers the opportunity to compete. What began as a passion project has now grown into a pre-professional competition team, attracting dancers from around the San Jose area who want to train and compete in versatile genres of dance such as jazz, contemporary, lyrical, hip hop, and ballet. </h2>
				<h3 className="content5"> Wanting to share the joy of dance with a younger generation, DPT brought on another long-standing performer and dance captain of the team, Danielle (Dizzle) de Ojeda, to direct a new junior team for 8 to 11-year-old performers in fall 2013—the Dynamos were born! In 2016, the beloved Miss Sara retired from Dynamics to start a new adventure; Miss Dizzle joined Mr. Charles as Co-Director that year, and continues to serve as Artistic Director to this date. </h3>
				<h4 className="content6"> In its now 16 seasons, DPT has brought original work to the stage every spring, priding itself on its creative and visually appealing performances. Dancers who train with DPT show a noticeable amount of growth in technique, artistry, and confidence. DPT has competed and won many titles on the regional and national level, and has received special awards for creativity and excellence. DPT has performed throughout their community for organizations such as a Los Gatos Chamber of Commerce, San Jose City Hall, Chinese History Cultural Project, World Financial Group, India Airlines and the American Cancer Society. In 2019 the team celebrated its 15th season with special commendations from U.S. Congressman Ro Khanna, and U.S. Senator Dianne Feinstein. </h4>
			</Col>
			</Row>
			<div className="boxed">
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
			</div>
			<br/>
			<br/>
			<br/>
			</Container>
			</div>
			</div>
        );
    }
}

export default History