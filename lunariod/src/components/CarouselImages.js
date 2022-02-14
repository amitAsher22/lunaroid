import React from "react";

/// imges
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'

/// import css
import '../css/carousel.css'

function CarouselImages() {
  return (
    <div id="Carousel">
      <div className="allImages">
        <img className="img"  src={img1} alt="img1"/>
        <img className="img" src={img2}  alt="img2"/>
        <img className="img" src={img3}  alt="img3"/>
        <img className="img" src={img4}  alt="img4"/>
        <img className="img" src={img5}  alt="img5"/>
      </div>

      
    </div>
  )
}

export default CarouselImages