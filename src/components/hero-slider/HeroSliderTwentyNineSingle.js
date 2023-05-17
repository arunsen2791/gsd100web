import PropTypes from "prop-types";
import React from "react";
import { Check } from "react-feather";
import { Link } from "react-router-dom";
import busiman from "../../assets/img/busiman.png";
const HeroSliderTwentyNineSingle = ({ data, sliderClass }) => {
  return (
    <div
      className={`single-slider-2 slider-height-2 d-flex align-items-center bg-img ${
        sliderClass ? sliderClass : ""
      }`}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}
    >
      <div className="container">
        <div className="row">
          {/* <div className="col-xl-4 col-lg-4 col-md-4 col-12">
            <img src={busiman} alt="" width="100%" />
          </div> */}
          <div className="col-xl-8 col-lg-8 col-md-8 col-12">
            <div className="slider-content-brown slider-content-2 slider-content-2--white slider-animated-1 text-left">
              <h3
                className="animated no-style text-left"
                dangerouslySetInnerHTML={{ __html: data.title }}
              />
              {/* <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              /> */}
              <p className="animated">
                <span style={{ marginRight: 5 }}>
                  <Check fontSize={25} className="mr-2" />
                </span>
                GSD100, C/O, Brizebond Technologies Private Limited (GSD100)
                takes your privacy very seriously.
              </p>
              <p className="animated">
                <span style={{ marginRight: 5 }}>
                  <Check fontSize={25} className="mr-2" />
                </span>
                GSD100, C/O, Brizebond Technologies Private Limited (GSD100)
                takes your privacy very seriously.
              </p>
              <p className="animated">
                <span style={{ marginRight: 5 }}>
                  <Check fontSize={25} className="mr-2" />
                </span>
                GSD100, C/O, Brizebond Technologies Private Limited (GSD100)
                takes your privacy very seriously.
              </p>

              <div className="slider-btn-brown btn-hover">
                <Link
                  className="animated"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  Get Drive
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderTwentyNineSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string,
};

export default HeroSliderTwentyNineSingle;
