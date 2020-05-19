import React, { Component } from 'react';
 import { Slide } from 'react-slideshow-image';
 import img1 from '../images/home/Main Page 1.jpg';
//  import img2 from '../images/home/Main Page 2.jpg';
 import img2L from '../images/home/Main Page 2-lefthalf.jpg';
 import img2R from '../images/home/Main Page 2-right.jpg';
//  import img3 from '../images/home/Main Page_3.jpg';
 import img3L from '../images/home/row-1-col-1.jpg';
 import img3R from '../images/home/row-2-col-1.jpg';
 import img4 from '../images/home/Main Page 4.jpg';
 import img5 from '../images/home/Main Page 5.jpg';
 import img6 from '../images/home/Main Page 6.jpg';
 import img7 from '../images/home/Main Page 7.jpg';
 import img8 from '../images/home/Main Page 8.jpg';
 import img9 from '../images/home/Main Page 9.jpg';
 import img10 from '../images/home/Main Page 10.jpg';
 import img11 from '../images/home/Main Page 11.jpg';
 import img12 from '../images/home/Main Page 12.jpg';
 import img13 from '../images/home/Main Page 13.jpg';
 import img14 from '../images/home/Main Page 14.jpg';
 import '../css/DynamicStyle.css';
 class Slideshow extends Component {
     render() {
 		// component will render JSX (react's version of html) inside return statement
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
            var pictures = this.props.slideImages.map((item) => <div className={this.props.banner ? "each-slide-Banner":"each-slide"}> <img src = {item} alt="Loading Error"/> </div>);
 			return (
 				<div className={this.props.banner ? "danceBannerimg":"danceimg"} >
                    <Slide {...properties}>
                        {pictures}
                    </Slide>
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