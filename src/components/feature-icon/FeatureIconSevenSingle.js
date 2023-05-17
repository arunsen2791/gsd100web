import PropTypes from "prop-types";
import React from "react";

const FeatureIconSevenSingle = ({ data, spaceBottomClass, textAlignClass }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="icon-features">
      <div
        className={`support-wrap-6 support-shape ${
          spaceBottomClass ? spaceBottomClass : ""
        } ${textAlignClass ? textAlignClass : ""}`}
      >
        <div className="support-content-6">
          <img src={process.env.PUBLIC_URL + data.image} className="coinimg"  alt="" width={100}  />
          <h5 className="trx-bold">{data.title}</h5>
          <p>{data.subtitle}</p>
        </div>
      </div>
      </div> 
    </div>
  );
};

FeatureIconSevenSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string,
  textAlignClass: PropTypes.string
};

export default FeatureIconSevenSingle;
