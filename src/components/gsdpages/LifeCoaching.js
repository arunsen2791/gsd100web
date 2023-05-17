import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
// import Cloth from "../../assets/img/Cloth.jpg";
import businessbg from "../../assets/img/business-img.jpg";

import { Container, Row, Col, Input, InputGroup, Form } from "reactstrap";
import { Link } from "react-scroll";
// import businessmeeting from "../../assets/img/busimeeting.jpg";
import fitness from "../../assets/img/icon-img/fitness.png";
import brain_icon from "../../assets/img/icon-img/brain_icon.png";
import darts from "../../assets/img/icon-img/darts.png";
import people from "../../assets/img/icon-img/people.png";
import lifecoach from "../../assets/img/lifecoach.jpg";

const LifeCoaching = ({ data, spaceBottomClass }) => {
  return (
    <LayoutOne>
      <Container fluid className="mb-4">
        <Row className="mb-5">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              backgroundImage: `url(${businessbg})`,
              width: "100%",
              padding: "100px 0px",
              backgroundSize: "cover",
            }}
          >
            <div className="text-center">
              <h1 className="text-light text-center">
                HOW CAN LIFE COACHING BENEFIT ME?
              </h1>
              <p style={{ color: "white" }}>
                GSD100 Results Coaching is unlike any other <br></br>life
                coaching program in the world.
              </p>
            </div>
          </div>
        </Row>
      </Container>
      <section style={{ margin: "70px 0px" }}>
        <Container>
          <Row>
            <Col md="12">
              <div className="text-center">
                <h3>LIFE COACHING: WHAT CAN YOU EXPECT?</h3>
                <p style={{ color: "white" }}>
                  What can you expect from GSD100 Results Coaching? You’ll form
                  a unique relationship with your selected coach, but all
                  Results Coaches use the same strategies to help individuals
                  meet their goals – and they will tailor those strategies to
                  maximize your potential. The best personal coach has a
                  well-developed sense of the challenges you’re facing, which
                  allows him or her to design training for you that “overshoots”
                  your goals in the right ways. Your ResultsCoach needs to be
                  sure you’re fit for every challenge you face, so your personal
                  coaching regimen has to prepare you to exceed your needs.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-darkgray">
        <Container>
          <Row>
            <Col md="12">
              <Row>
                <Col md="6">
                  <div>
                    <img
                      src={lifecoach}
                      alt=""
                      width="100%"
                      className="rg-img"
                    />
                  </div>
                </Col>
                <Col md="6">
                  <div>
                    <h4>WHO IS LIFE COACHING FOR?</h4>
                    <p style={{ color: "white" }}>
                      Whether your business is just starting out and needs help
                      moving in the right direction, or your brand is
                      established but has hit a plateau, with a 1:1 GSD100
                      Business Coach as your guide, you’ll create a plan for
                      geometric growth and unprecedented success. Your coach
                      will get to know you and your business and empower you
                      with personal, 1:1 guidance to help push you to achieve
                      your greatest goals and meet your organization’s specific
                      needs. With more coaching, you’ll experience greater and
                      greater success, and incorporating business coaching for
                      each member of your executive team can result in
                      explosive, exponential growth.
                    </p>
                    <ul className="lis">
                      <li>STEP 1: IDENTIFY LIMITING BELIEFS</li>
                      <li>STEP 2: DEVELOP PATTERNS TO OVERCOME THE BELIEFS</li>
                      <li>STEP 3: REINFORCE PATTERNS AND ACHIEVE GOALS </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </LayoutOne>
  );
};

LifeCoaching.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string,
};

export default LifeCoaching;
