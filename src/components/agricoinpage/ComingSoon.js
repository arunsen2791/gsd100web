import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Cloth from "../../assets/img/Cloth.jpg";
import { Container, Row,  Col } from "reactstrap";
import dpimg from '../../assets/img/dpimg.gif';
import { Link } from "react-router-dom";




const ComingSoon = ({ data, spaceBottomClass }) => {
    
  return (
    <LayoutOne>
    <Container fluid className="mb-4">
      <Row className="mb-5">
          <Col lg="12">
              <div className="st-posit">
                  <img src= {dpimg}   style={{width:400}} />
                  <h3>
                  Coming Soon.... 
                  </h3>
                   <Link to="/" className="backdeposit">
                     Go to Home
                  </Link>
              </div>
          </Col>
      </Row>
      </Container>
   

  </LayoutOne>
  );

};

ComingSoon.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default ComingSoon;