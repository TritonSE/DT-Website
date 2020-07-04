import React from 'react';
import Image from "react-image-enlarger";

class NoRightClickImg extends React.Component {
    render() {

        function SingleSource({ src, style, alt, className }) {
            const [zoomed, setZoomed] = React.useState(false);
           
            return (
              <div>
                <Image
                  style={(style === undefined) ? null : style}
                  className={(className === undefined) ? "" : className}
                  alt={(alt === undefined) ? "" : alt}
                  overlayColor="black"
                  zoomed={zoomed}
                  src={src}
                  onClick={() => setZoomed(true)}
                  onRequestClose={() => setZoomed(false)}
                />
              </div>
            );
          }

        //by default image will be enlargeable on click - feature will be disabled if "false" is passed in 
        const isEnlargableImage = (this.props.disableEnlarging === undefined) ? true:!this.props.disableEnlarging;

        return (
            <div onContextMenu={(e)=> {e.preventDefault(); return false;}} 
                className={(this.props.divClassName === undefined) ? "" : this.props.className} >
                    {isEnlargableImage ?
                    <SingleSource key={this.props.src} src={this.props.src} style={this.props.style} alt={this.props.alt} className={this.props.imgClassName}/>
                    :
                      <img src={this.props.src} style={(this.props.style === undefined) ? null : this.props.style} alt={(this.props.alt === undefined) ? "" : this.props.alt}
                        className={(this.props.imgClassName === undefined) ? "" : this.props.imgClassName} />
                }
            </div>
        )
    }
}

export default NoRightClickImg;