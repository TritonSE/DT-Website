import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Toolbar from '../components/Toolbar.js';
import '../css/Support.css';
import { SegmentInline } from 'semantic-ui-react';
import { Container } from 'react-bootstrap';

class Support extends Component {
	render() {
		var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.\n\nAliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.";
		return (
			<div>
			<Toolbar />
			<Container>
			<div className="Support-Text">
				{text}
			</div>
			<div className="Header-Text">
				How To Contribute
			</div>
			</Container>
			</div>
		);
	}
}

export default Support
