import React, { Component } from 'react';

class DirectorsImages extends Component {
	render() {
		return (
            <div style={{display:"flex", flexDirection:"column", width:"28vw"}}>
                <img src={this.props.imgTop} style={{height: "20vw", width:"14vw"}}/>
                <img src={this.props.imgBottom} style={{height: "20vw", width:"14vw", marginLeft:"10vw", marginTop:"-3vw"}}/>
            </div>
        );
	}
}

// always export to allow importing in other files
export default DirectorsImages;