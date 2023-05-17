import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Cloth from "../../assets/img/Cloth.jpg";
import { Container, Row, Col, Input, InputGroup, Form } from "reactstrap";
import gracap1 from "../../assets/img/gracap.png";

const Coaching = ({ data, spaceBottomClass }) => {
  return (
    <LayoutOne>
      <Container fluid className="mb-4">
        <Row className="mb-5">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              backgroundImage: `url(${Cloth})`,
              width: "100%",
              padding: "100px 0px",
              backgroundSize: "cover",
            }}
          >
            <div className="">
              <h1 className="text-light text-center">Coaching</h1>
            </div>
          </div>
        </Row>
      </Container>
      <section style={{ margin: "70px 0px" }}>
        <Container>
          <Row>
            <Col md="3">
              <div className="bx-coach">
                <img src={gracap1} alt="" width="100px" />
                <h3>STRESS OF DAILY LIVING</h3>
                <p>
                  If you have are looking for help dealing with one of the above
                  then contact us in confidence to discuss.
                </p>
              </div>
            </Col>
            <Col md="3">
              <div className="bx-coach">
                <img src={gracap1} alt="" width="100px" />
                <h3>LOSS OF CONFIDENCE AND SECURITY</h3>
                <p>
                  If you have are looking for help dealing with one of the above
                  then contact us in confidence to discuss.
                </p>
              </div>
            </Col>
            <Col md="3">
              <div className="bx-coach">
                <img src={gracap1} alt="" width="100px" />
                <h3>HELP THINK STRAIGHT</h3>
                <p>
                  If you have are looking for help dealing with one of the above
                  then contact us in confidence to discuss.
                </p>
              </div>
            </Col>
            <Col md="3">
              <div className="bx-coach">
                <img src={gracap1} alt="" width="100px" />
                <h3>LEADERSHIP SKILLS NEEDED</h3>
                <p>
                  If you have are looking for help dealing with one of the above
                  then contact us in confidence to discuss.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </LayoutOne>
  );
};

Coaching.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string,
};

export default Coaching;
