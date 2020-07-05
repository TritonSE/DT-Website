import React, { Component } from 'react';
import DirectorImages from '../components/DirectorsImages.js'
import '../css/Directors.css';

class DirectorProfile extends Component {
	render() {
        var text = this.props.text.split('\n').map ((item, i) => <p key={i}>{item}</p>);
		return (
            <div className="Director-Profile">
                <DirectorImages imgTop={this.props.imgTop} imgBottom={this.props.imgBottom}/>
                <div className="Director-Profile-Text">
                    <p>
                        <span style={{color:"rgb(15, 185, 185)", fontWeight:"bold", textTransform:"uppercase"}}> {this.props.title} |</span> {this.props.name}
                    </p>
                    {text}
                </div>
            </div>
        );
	}
}

// always export to allow importing in other files
export default DirectorProfile;