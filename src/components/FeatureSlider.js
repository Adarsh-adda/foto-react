import React from 'react';
import Carousel from 'nuka-carousel';
import image from "./../images/camera.jpg";
import image2 from "./../images/telescope.png";
import image3 from "./../images/binocular.jpg";

const FeatureSlider=()=> {
    return (
        <div style={{maxheight:"80vh"}}>
      <Carousel autoplay={true}
                style={{maxheight:"80vh"}}
                heightMode={"max"}
      >
        <img src={image} alt={""} />
        <img src={image2} alt={""} />
        <img src={image3} alt={""} />

      </Carousel>
          </div>
    );

}
export default FeatureSlider;
