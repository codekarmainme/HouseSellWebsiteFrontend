import React from "react";


import "../styles/Slider.css";

const Advertizingslider = ({ image, desc, title }) => {
  return (
    <div className="slide-in-box">
      <img src={image} alt="Slide" className="slide-in-image" />
      <div className="slide-in-text">
        <h2>{title}</h2>
        <h4>{desc}</h4>
      </div>
    </div>
  );
};

export default Advertizingslider;
