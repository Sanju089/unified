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
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}