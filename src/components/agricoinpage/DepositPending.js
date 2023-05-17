import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Cloth from "../../assets/img/Cloth.jpg";
import { Container, Row,  Col, Input, InputGroup, Form } from "reactstrap";
import dpimg from '../../assets/img/dpimg.gif';
import { Link } from "react-router-dom";




const DepositPending = ({ data, spaceBottomClass }) => {
    
  return (
    <LayoutOne>
    <Container fluid className="mb-4">
      <Row className="mb-5">
          <Col lg="12">
              <div className="st-posit">
                  <img src= {dpimg}   style={{width:400}} />
                  <h3>
                  Successfully submit deposit request we will approve it and credit in wallet as soon as possible thank you.
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

DepositPending.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default DepositPending;
