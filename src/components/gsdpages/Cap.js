import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Cloth from "../../assets/img/Cloth.jpg";
import { Container, Row, Col, Input, InputGroup, Form } from "reactstrap";
import { Link } from "react-scroll";
import Capimg from "../../assets/img/Front.jpg";

const Cap = ({ data, spaceBottomClass }) => {
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
              <h1 className="text-light text-center">Caps</h1>
            </div>
          </div>
        </Row>
      </Container>
      <section style={{ margin: "70px 0px" }}>
        <Container>
          <Row>
            <Col lg="3">
              <Link to="/shop-grid-women-column">
                <img src={Capimg} alt="img" height="" width="100%" />
              </Link>
            </Col>
            <Col lg="3">
              <Link to="/shop-grid-women-column">
                <img src={Capimg} alt="img" height="" width="100%" />
              </Link>
            </Col>
            <Col lg="3">
              <Link to="/shop-grid-women-column">
                <img src={Capimg} alt="img" height="" width="100%" />
              </Link>
            </Col>
            <Col lg="3">
              <Link to="/shop-grid-women-column">
                <img src={Capimg} alt="img" height="" width="100%" />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </LayoutOne>
  );
};

Cap.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string,
};

export default Cap;
