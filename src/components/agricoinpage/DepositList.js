import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Cloth from "../../assets/img/Cloth.jpg";
import { Container, Row,  Col, Input, InputGroup, Form } from "reactstrap";
import { Button } from "react-scroll";

class DepositList extends React.Component {

  render() { 
  return (
    <LayoutOne>
    <Container fluid className="mb-4">
      <Row className="mb-5">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundImage: `url(${Cloth})`,
            width: "100%",
            padding:"100px 0px",
            backgroundSize:"cover"
          }}
        >
          <div className="">
            <h1 className="text-light text-center">My Deposit</h1>
          </div>
        </div>
      </Row>
      </Container>
      <section style={{margin:"70px 0px"}}>
        <Container>
        <Row>
             <Col lg="12">
             <div className="table-content table-responsive cart-table-content tt-2">
                      <table>
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Description</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                         
                              <tr >
                                <td className="product-thumbnail">
                                 20/4/2022
                                </td>

                                <td className="product-name">
                                  300.00
                                </td>

                                <td className="product-price-cart">
                                 ggghghggh
                                </td>

                                <td className="product-quantity">
                                  Pending
                                </td>
                              </tr>
                        </tbody>
                      </table>
                    </div>
             </Col>
        </Row>
    </Container> 
    </section>

  </LayoutOne>

  );

  }

};



export default DepositList;
