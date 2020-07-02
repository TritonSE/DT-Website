import React, { Component } from 'react';
import { Fade} from 'react-slideshow-image';
import NoRightClickImg from '../components/NoRightClickImg';
import '../css/Slideshow.css';

 class Slideshow extends Component {
     render() {

		const slideImages=[
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
		]

 		// component will render JSX (react's version of html) inside return statement
 		const properties = {
 			duration: 3000,
			transitionDuration: 500,
			infinite: true,
			pauseOnHover: true,
			indicators: this.props.indicators,
 			arrows: true
 		  }
 		  const Slideshow = () => {
			var pictures = slideImages.map((item, i) => 
			<div className="each-fade">
				<div className="each-slide"> 
					<NoRightClickImg src = {item} alt="Loading Error" disableEnlarging={true}/> 
				</div>
			</div>);
 			return (
 				<div className="danceimg">
                    <Fade {...properties}>
						{pictures}
                    </Fade>
            </div>
 			)
         }
         return (
             <div>
                 <Slideshow />
             </div>
         );
     }
 }

 export default Slideshow;