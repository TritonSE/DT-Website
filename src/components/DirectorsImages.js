import React, { Component } from 'react';
import '../css/Directors.css';

class DirectorsImages extends Component {
	render() {
		return (
            <div onContextMenu={(e)=> {e.preventDefault(); return false;}} className="Director-Profile-Images-Container">
                <img  src={this.props.imgTop} className="Director-Profile-Images-Top"/>
                <img src={this.props.imgBottom} className="Director-Profile-Images-Top Director-Profile-Images-Bottom"/>
            </div>
        );
	}
}

// always export to allow importing in other files
export default DirectorsImages;