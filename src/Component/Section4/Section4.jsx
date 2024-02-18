import React from "react";
import "./Section4.css";
import section4img from "../../assets/section4.png";
import Reveal from "../Reveal/Reveal";

const Section4 = () => {
  return (
    <div className="section4">
      <img src={section4img} alt="section4img" className="section4img" />
      <div className="section4_box">
    <Reveal  >

        <span className="section4_title ">
          <span className="goldenClr">We are Dedicated</span>{" "}


          <span style={{ color: "white" }}>to the Expansion of </span>


          <span className="goldenClr">your Business  </span>


        </span>
   </Reveal>

      </div>

      <div className="forindivual">
<Reveal x={0} y={0} initialX={-100} initialY={0}>  

        <span className="reavealboxcss">
          FOR <span style={{ color: "#080808" }}>INDIVIDUAL</span>
        </span>
        </Reveal>
      </div>

  
      <div className="forcorporate">
<Reveal x={0} y={0} initialX={100} initialY={0}>
        <span className="reavealboxcss">
          FOR <span style={{ color: "#080808" }}>CORPORATE</span>
        </span>
        </Reveal>
      </div>
      

      <div className="letConnect">
        <Reveal>
        <span style={{ color: "#da950c" }}>Let’s Connect</span>
        </Reveal>
      </div>
    </div>
  );
};

export default Section4;
