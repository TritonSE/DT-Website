import React, { Component } from 'react';

class SupportingDirectors extends Component {
	render() {
        var nameDisplays = this.props.names.map((item,i) => 
            <p style={{fontSize: "1.8vw", marginLeft:"2%"}}>
                <span style={{color:"rgb(15, 185, 185)", fontWeight:"bold", textTransform:"uppercase"}}> {this.props.titles[i]} |</span> {item}
            </p>
        );
		return (
            <div style={{display:"flex",justifyContent:"center"}}>
                {nameDisplays}
            </div>
        );
	}
}

// always export to allow importing in other files
export default SupportingDirectors;