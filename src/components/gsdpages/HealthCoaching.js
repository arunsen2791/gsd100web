import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
// import Cloth from "../../assets/img/Cloth.jpg";
import healthbg from "../../assets/img/healthbg.jpg";

import { Container, Row, Col, Input, InputGroup, Form } from "reactstrap";
import { Link } from "react-scroll";
// import businessmeeting from "../../assets/img/busimeeting.jpg";
import fitness from "../../assets/img/icon-img/fitness.png";
import brain_icon from "../../assets/img/icon-img/brain_icon.png";
import darts from "../../assets/img/icon-img/darts.png";
import people from "../../assets/img/icon-img/people.png";
import helthcoach from "../../assets/img/helthcoach.jpg";
import foodsalad from "../../assets/img/food-salad.jpg";

const HealthCoaching = ({ data, spaceBottomClass }) => {
  return (
    <LayoutOne>
      <Container fluid className="mb-4">
        <Row className="mb-5">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              backgroundImage: `url(${healthbg})`,
              width: "100%",
              padding: "100px 0px",
              backgroundSize: "cover",
            }}
          >
            <div className="text-center">
              <h1 className="text-light text-center">
                WHAT IS A HEALTH COACH?
              </h1>
              <p style={{ color: "white" }}>
                DISCOVER A HOLISTIC APPROACH TO YOUR HEALTH
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
                <h3>WHAT DOES A HEALTH COACH DO?</h3>
                <p style={{ color: "white" }}>
                  A health coach uses techniques that are similar to Tony
                  Robbins Results Coaching. Expect a combination of a mental
                  health coach, life coach, mentor and educated expert. Like
                  Results Coaches, most health coaches are experts in the
                  following areas.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-darkgray">
        <Container>
          <Row>
            <Col md="12" className="">
              <Row>
                <Col md="6">
                  <div className="grid-1">
                    <div>
                      <img
                        src={helthcoach}
                        alt=""
                        width="100%"
                        className="rg-img"
                      />
                    </div>
                    <div className="mt-3">
                      <h4>WHAT IS A HEALTH COACH?</h4>
                      <p style={{ color: "white" }}>
                        Health coaches are trained professionals who can help
                        you create lasting mental and physical changes. Using
                        their knowledge of health and wellness, they empower you
                        to take charge of your health by identifying areas for
                        improvement and providing support and encouragement as
                        you work toward your goals. They can also help you
                        navigate the medical system and stay the course with
                        your treatment if you have a serious or chronic illness.
                      </p>
                      <ul className="lis">
                        <li>POSITIVE PSYCHOLOGY</li>
                        <li>GOAL-SETTING</li>
                        <li>HABIT CREATION AND REVERSAL </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="grid-1">
                    <div>
                      <img
                        src={foodsalad}
                        alt=""
                        width="100%"
                        className="rg-img"
                      />

                      <div className="mt-3">
                        <h4>
                          WHAT’S THE DIFFERENCE BETWEEN A HEALTH COACH AND A
                          NUTRITIONIST?
                        </h4>
                        <p style={{ color: "white" }}>
                          What is a health coach versus a nutritionist? The main
                          difference is that a nutritionist focuses entirely on
                          your diet, prescribing specific diets and meal plans.
                          Nutritionists are not doctors, but patients are often
                          referred to them by doctors, and they may use
                          bloodwork and lab tests in order to develop the
                          guidelines they recommend.
                        </p>
                        <ul className="lis">
                          <li>POSITIVE PSYCHOLOGY</li>
                          <li>GOAL-SETTING</li>
                          <li>HABIT CREATION AND REVERSAL </li>
                        </ul>
                      </div>
                    </div>
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

HealthCoaching.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string,
};

export default HealthCoaching;
