import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
// import Cloth from "../../assets/img/Cloth.jpg";
import businessbg from "../../assets/img/business-img.jpg";

import { Container, Row, Col, Input, InputGroup, Form } from "reactstrap";
import { Link } from "react-scroll";
import businessmeeting from "../../assets/img/busimeeting.jpg";
import fitness from "../../assets/img/icon-img/fitness.png";
import brain_icon from "../../assets/img/icon-img/brain_icon.png";
import darts from "../../assets/img/icon-img/darts.png";
import people from "../../assets/img/icon-img/people.png";

const BusinessCoaching = ({ data, spaceBottomClass }) => {
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
                GSD100 BUSINESS COACHING SERVICES
              </h1>
              <p style={{ color: "white" }}>
                INVEST IN YOUR BUSINESS. MAGNIFY YOUR RESULTS.
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
                <h3>WHAT IS BUSINESS COACHING?</h3>
                <p style={{ color: "white" }}>
                  Working with an experienced business coach is your ultimate
                  tool to achieve massive results. Some of the most<br></br>{" "}
                  wildly successful companies and entrepreneurs on the planet
                  rely on business coaching services to become<br></br> talkably
                  different from the competition. Partnering with a GSD100
                  Business Results Coach, you’ll get 1:1 <br></br>meetings every
                  10-14 days and expert guidance to keep you on track for 12-18
                  months. During these meetings,<br></br> you’ll set clear goals
                  and map action plans to achieve them, break through limiting
                  beliefs that are holding you <br></br>back and identify
                  opportunities and strategies for creating geometric business
                  growth.
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
                    <h4>WHO IS BUSINESS COACHING FOR?</h4>
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
                  </div>
                </Col>
                <Col md="6">
                  <div>
                    <img
                      src={businessmeeting}
                      alt=""
                      width="100%"
                      className="rg-img"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bgb-2">
        <Container>
          <Row>
            <Col md="12" className="mt-5 mb-5">
              <div className="text-center">
                <h3>BENEFITS OF WORKING WITH A BUSINESS COACH</h3>
                <p className="mt-3" style={{ color: "white" }}>
                  From Olympic athletes to business and political leaders, the
                  best of the best have a coach. A coach isn’t just there to
                  <br></br>
                  help you achieve your initial goals – your coach is with you
                  along the way, continually pushing you and your team to
                  <br></br>
                  achieve even greater results. With your business coach, you’ll
                  uncover and break through any limitations that hold you – and
                  your business – back.
                </p>

                <p className="mt-3" style={{ color: "white" }}>
                  When you secure top-notch business coaching services, you’re
                  able to:
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col md="3">
              <div className="bx-coach">
                <img src={darts} alt="" width="80px" />
                <h3>INCREASE REVENUE</h3>
                <p>
                  Increasing revenue is one of the primary reasons business
                  owners seek out business coaching services.
                </p>
              </div>
            </Col>
            <Col md="3">
              <div className="bx-coach">
                <img src={people} alt="" width="80px" />
                <h3>BECOME A MORE EFFECTIVE LEADER</h3>
                <p>
                  Effective leadership is essential for any business to thrive.
                </p>
              </div>
            </Col>
            <Col md="3">
              <div className="bx-coach">
                <img src={fitness} alt="" width="80px" />
                <h3>THRIVE IN HARD TIMES</h3>
                <p>
                  If you have are looking for help dealing with one of the above
                  then contact us in confidence to discuss.
                </p>
              </div>
            </Col>
            <Col md="3">
              <div className="bx-coach">
                <img src={brain_icon} alt="" width="80px" />
                <h3>RECRUIT AND RETAIN TOP TALENT</h3>
                <p>
                  Your company is only as strong as your team. Still, recruiting
                  top talent is a struggle for many business owners.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </LayoutOne>
  );
};

BusinessCoaching.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string,
};

export default BusinessCoaching;
