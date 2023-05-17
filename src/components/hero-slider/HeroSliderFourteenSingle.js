import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Cloth from "../../assets/img/Cloth.jpg";

const HeroSliderFourteenSingle = ({ data, sliderClassName }) => {
  return (
        <div
        className="d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${Cloth})`,
          width: "100%",
          padding:"100px 0px",
          backgroundSize:"cover"
        }}
      >
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
             <div className="">
                <h1 className="text-light text-center">About Us</h1>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderFourteenSingle.propTypes = {
  data: PropTypes.object,
  sliderClassName: PropTypes.string,
};

export default HeroSliderFourteenSingle;
