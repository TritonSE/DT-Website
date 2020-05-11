import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import dancer from '../images/HomeDancer.jpg';
import dancer2 from '../images/HomeDancer2.jpg';
import dancer3 from '../images/HomeDancer3.jpg';
import '../css/DynamicStyle.css';
class Slideshow extends Component {
    render() {
		// component will render JSX (react's version of html) inside return statement
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
        return (
            <div>
                <Slideshow />
            </div>
        );
    }
}

export default Slideshow;
