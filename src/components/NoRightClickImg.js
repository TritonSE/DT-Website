import React from 'react';

class NoRightClickImg extends React.Component {
    render() {
        return (
            <div onContextMenu={(e)=> {e.preventDefault(); return false;}} 
                className={(this.props.divClassName == undefined) ? "" : this.props.className}>
                    <img  src={this.props.src} alt={(this.props.alt == undefined) ? "" : this.props.alt}
                        className={(this.props.imgClassName == undefined) ? "" : this.props.imgClassName} />
            </div>
        )
    }
}

export default NoRightClickImg;