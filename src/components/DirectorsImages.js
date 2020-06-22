import React, { Component } from 'react';
import '../css/Directors.css';
import NoRightClickImg from '../components/NoRightClickImg';

class DirectorsImages extends Component {
	render() {
		return (
            <div className="Director-Profile-Images-Container">
                <NoRightClickImg  src={this.props.imgTop} imgClassName="Director-Profile-Images-Top"/>
                <NoRightClickImg src={this.props.imgBottom} imgClassName="Director-Profile-Images-Top Director-Profile-Images-Bottom"/>
            </div>
        );
	}
}

// always export to allow importing in other files
export default DirectorsImages;