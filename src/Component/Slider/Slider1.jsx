import React from "react";
import Slider from "react-slick";
import slideImage from '../../assets/Rectangle 156.png'
import './Slider1.css'


export default function Slider1() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>               
         <img src={slideImage} alt="slideImage" style={{width:"100%"}}/>
      </div>
      <div>
         <img src={slideImage} alt="slideImage" style={{width:"100%"}}/>
      </div>
      <div>
         <img src={slideImage} alt="slideImage" style={{width:"100%"}}/>
      </div>
      <div>
         <img src={slideImage} alt="slideImage" style={{width:"100%"}}/>
      </div>
      <div>
         <img src={slideImage} alt="slideImage" style={{width:"100%"}}/>
      </div>
      <div>
         <img src={slideImage} alt="slideImage" style={{width:"100%"}}/>
      </div>
    </Slider>
  );
}