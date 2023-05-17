import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import { Container, Row,  Col, Input, InputGroup, Form, Card } from "reactstrap";
import { Link } from "react-router-dom";
import tagimg from "../../assets/img/master/03 Masterohtkd.jpg";
import tagimg1 from "../../assets/img/master/04 Masterohtkd.jpg";
import tagimg2 from "../../assets/img/master/05 Masterohtkd.jpg";
import tagimg3 from "../../assets/img/master/06 Masterohtkd.jpg";
import tagimg4 from "../../assets/img/master/07 Masterohtkd.jpg";
import tagimg5 from "../../assets/img/master/08 Masterohtkd.jpg";
import tagimg6 from "../../assets/img/master/09 Masterohtkd.jpg";
import tagimg7 from "../../assets/img/master/10 Masterohtkd.jpg";
import tagimg8 from "../../assets/img/master/11 Masterohtkd.jpg";



const ServiceAgricoin = ({ data, spaceBottomClass }) => {
    
  return (
    <Container fluid className="mb-4">
      <section className="srevicegrid">
        <Container>
          <h1>SETUP YOUR REMINDER</h1>
          <p style={{ color: "#ffffff" }}>What We Do </p>

          <Row>
            <Col md="3">
              <Link>
                <Card className="mt-4">
                  <img src={tagimg} alt="" width="100%" />
                </Card>
              </Link>
            </Col>
            <Col md="3">
              <Link>
                <Card className="mt-4">
                  <img src={tagimg1} alt="" width="100%" />
                </Card>
              </Link>
            </Col>
            <Col md="3">
              <Link>
                <Card className="mt-4">
                  <img src={tagimg2} alt="" width="100%" />
                </Card>
              </Link>
            </Col>
            <Col md="3">
              <Link>
                <Card className="mt-4">
                  <img src={tagimg4} alt="" width="100%" />
                </Card>
              </Link>
            </Col>
            <Col md="3">
              <Link>
                <Card className="mt-4">
                  <img src={tagimg5} alt="" width="100%" />
                </Card>
              </Link>
            </Col>
            <Col md="3">
              <Link>
                <Card className="mt-4">
                  <img src={tagimg6} alt="" width="100%" />
                </Card>
              </Link>
            </Col>
            <Col md="3">
              <Link>
                <Card className="mt-4">
                  <img src={tagimg7} alt="" width="100%" />
                </Card>
              </Link>
            </Col>
            <Col md="3">
              <Link>
                <Card className="mt-4">
                  <img src={tagimg8} alt="" width="100%" />
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );

};

ServiceAgricoin.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default ServiceAgricoin;
