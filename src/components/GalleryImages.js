// https://github.com/christikaes/react-image-masonry

import React from 'react';
import '../css/GalleryImages.css';
import ImageMasonry from 'react-image-masonry' ;
import NoRightClickImg from '../components/NoRightClickImg.js';

class GalleryImages extends React.Component {

  constructor(props){
		super(props);
        this.state = { isMobile: false};
        
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
		if (window.innerWidth > 600 && this.state.isMobile){
			this.setState({ isMobile: false });
		}
		else if(window.innerWidth <= 600 && !this.state.isMobile){
			this.setState({ isMobile: true });
		}
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
  }

    render() {

          var images = [
            require('../images/gallery/2016-04-10 18.16.46 (1).jpg'),
            require('../images/gallery/winter fun 2010 043.JPG'),
            require('../images/gallery/20160424_180801 (1).jpg'),
            require('../images/gallery/20190503_223424.jpg'),
            require('../images/gallery/Erin 2.jpg'),
            require('../images/gallery/30708368_10204465127025920_8953733109543600128_n.jpg'),
            require('../images/gallery/30709234_10204465126065896_8367470138064109568_n.jpg'),
            require('../images/gallery/37644851_10156535473829555_3524298065420746752_n.jpg'),
            require('../images/gallery/20160423_160934 (1).jpg'),
            require('../images/gallery/phone pics april 2012 3434.jpg'),
            require('../images/gallery/winter fun 2010 030.JPG'),
            require('../images/gallery/Alana 3.jpg'),
            require('../images/gallery/Alexandra 19 2.jpg'),
            require('../images/gallery/Alison 17 3.jpg'),
            require('../images/gallery/Arianne 3.jpg'),
            require('../images/gallery/Cadence 19 2.jpg'),
            require('../images/gallery/IMG_6707 (1).jpg'),
            require('../images/gallery/Main Page 3.jpg'),
            require('../images/gallery/Pilar 19 2.jpg'),
            require('../images/gallery/Dhezie 18 3.jpg'),
            require('../images/gallery/Emma 18 3.jpg'),
            require('../images/gallery/Maddie 2.jpg'),
            require('../images/gallery/Main Page 2.jpg'),
            require('../images/gallery/_e_30h24i_8_e61Ud018svc1i1kfq1t21vxz_6orrts.jpg'),
            require('../images/gallery/_e_30h255_8_a61Ud018svcq7agsqlvmnql_6orrts.jpg'),
            require('../images/gallery/_e_30hj12_f_j77Ud018svc1azqt9i43kws4_55ceys.jpg'),
            require('../images/gallery/_e_30hj28_1_d5jUd018svc1g7z6qy2i93ke_7bw2a6.jpg'),
            require('../images/gallery/_e_30hj2a_g_077Ud018svcqot8foeys8lp_qnegfg.jpg'),
            require('../images/gallery/_e_30i8h2_h_d7iUd018svc17d445t1u31p2_e4p496.jpg'),
            require('../images/gallery/_e_30i8ib_6_1c9Ud018svcwbqs5zrrhnh9_yrek5c.jpg'),
            require('../images/gallery/_e_317560_7_gddUd018svc1xj28ortrtl86_w6buql.jpg'),
            require('../images/gallery/_e_30hj4a_f_h77Ud018svc7gudkadf3969_fub95a.jpg'),
            require('../images/gallery/_e_30hj60_1_95jUd018svc8v0blhynh45w_9d9v03.jpg'),
            require('../images/gallery/_e_30hjhi_f_a77Ud018svc1njl7v4h32omg_anzu47.jpg'),
            require('../images/gallery/_e_30i7b0_e_8i5Ud018svcjv5e1w1b42y8_ec7a86.jpg'),
            require('../images/gallery/_e_30i7bh_j_8f5Ud018svc18kmvfmpxact0_wj4pyb.jpg'),
            require('../images/gallery/_e_30i7cb_0_1hgUd018svc1kv3bsnkfx6ml_jmegq5.jpg'),
            require('../images/gallery/_e_30i7hg_0_8hgUd018svch4xgxd6d6hfp_3f5il3.jpg'),
            require('../images/gallery/_e_30i80b_9_b8gUd018svca07gdf46h4cj_z6xmb0.jpg'),
            require('../images/gallery/_e_30i80f_b_1a5Ud018svc10f8a21mmpwz_9n47eh.jpg'),
            require('../images/gallery/_e_30i81d_7_39dUd018svc1jhnlr4xv0w6a_2nocgx.jpg'),
            require('../images/gallery/_e_30i83a_b_1a5Ud018svc5h1m03y8cad_vjgz9h.jpg'),
            require('../images/gallery/_e_30i83i_9_f8gUd018svc1hoqe6mcj350r_75rhxw.jpg'),
            require('../images/gallery/_e_30i84g_9_e8gUd018svc17hpnm4ay5v05_3weza0.jpg'),
            require('../images/gallery/_e_30i854_3_g9fUd018svc1wwvjhu9mri7x_ulugo1.jpg'),
            require('../images/gallery/_e_30i89h_h_a7iUd018svc18okmzyc7hyhk_sgvdz3.jpg'),
            require('../images/gallery/30710421_10204465128185949_9154384945001529344_n.jpg'),
            require('../images/gallery/36719019_10204789847263723_4711699515940274176_n.jpg'),
            require('../images/gallery/_e_30i8d8_2_ac9Ud018svcm6abvkv95x0q_otw9l9.jpg'),
            require('../images/gallery/_e_30i8ei_7_c9aUd018svc1g7e5l7uqn3ez_85hdm3.jpg'),
            require('../images/gallery/j_5f9Ud018svc1uzj8u43d0l3c_tht9un.jpg'),
            require('../images/gallery/winter fun 2010 044.JPG'),
            // require('../images/gallery/winter fun 2010 046.JPG'), 
          ]


          return(
              <ImageMasonry
                numCols={this.state.isMobile ? 2:4}
                containerWidth={"90vw"}
                >
                  {images.map((image, i) => {
                    return(
                      <div
                          key={i}
                          className="tile"
                          >
                          <NoRightClickImg src={image}/>
                  </div>
                  )})}
              </ImageMasonry>
        );

    }
}

export default GalleryImages;