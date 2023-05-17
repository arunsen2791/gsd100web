import React, { Component } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Cloth from "../../assets/img/Cloth.jpg";
import { Container, Row, ListGroup } from "reactstrap";

export default class TermsOfUse extends Component {
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
                padding: "100px 0px",
                backgroundSize: "cover",
              }}
            >
              <div className="">
                <h1 className="text-light text-center">Terms and Conditions</h1>
              </div>
            </div>
          </Row>
          <Container>
            <Row>
              <ListGroup>
                <h3 style={{ fontWeight: "500" }}>
                  This document is an electronic record in terms of Information
                  Technology Act, 2000 and rules there under as applicable and
                  the amended provisions pertaining to electronic records in
                  various statutes as amended by the Information Technology Act,
                  2000. This electronic record is generated by a computer system
                  and does not require any physical or digital signature.
                </h3>
                <p style={{ color: "white" }}>
                  The site www.NEXUSPAY.com (hereinafter referred to as
                  "Website") is owned by Brizebond Technologies Private Limited,
                  a company incorporated under the Companies Act, 1956 with its
                  registered office at 1/18, East Mall Road, Dum Dum,
                  Kolkata-700080 (hereinafter referred to as
                  "Company/NEXUSPAY").
                </p>
                <p style={{ color: "white" }}>
                  We are the operators of the Website, associated web
                  application (Cloud-based stock management solution for retail
                  apparel stores and companies) in relation thereto
                  (“Product/s”) and services in relation thereto (“Services”).
                  We provide a platform where we may publish products which are
                  made available by us or by Sellers (collectively: “Sellers”)
                  to end users (“Customers”).
                </p>
                <p style={{ color: "white" }}>
                  Your use of the Website and services and tools are governed by
                  the following terms and conditions ("Terms of Use") as
                  applicable to the Website including the applicable policies
                  which are incorporated herein by way of reference. By mere use
                  of the Website, You shall be contracting with NEXUSPAY"). and
                  these terms and conditions including the policies constitute
                  Your binding obligations, with NEXUSPAY")..
                </p>
                <p style={{ color: "white" }}>
                  For the purpose of these Terms of Use, wherever the context so
                  requires "You" or "User" shall mean any natural or legal
                  person who has agreed to become a Seller or Customer on the
                  Website. The terms "We", "Us", "Our" shall mean WEEBUY.
                </p>
                <li style={{ color: "white" }}>
                  ACCESSING, BROWSING OR OTHERWISE USING THE SITE INDICATES YOUR
                  AGREEMENT TO ALL THE TERMS AND CONDITIONS UNDER THESE TERMS OF
                  USE, SO PLEASE READ THE TERMS OF USE CAREFULLY
                  BEFORE PROCEEDING. 
                </li>
              </ListGroup>
            </Row>
            <Row>
              <ListGroup>
                <h3 style={{ fontWeight: "500" }}>
                  License and Website Access
                </h3>
                ●General:NEXUSPAY grants you a limited license to access and
                make personal use of this Website and not to modify it, or any
                portion of it, except with express written consent of NEXUSPAY.
                <br />
                ● No license for commercial sale: This license does not include
                any resale or commercial use of this Website or its content
                (“Content”); any collection and use of any product listing,
                description, or pricing; copying of account information for the
                benefit of another merchant; or any use of data mining; or
                similar data gathering and extraction tools. <br />● No
                reproduction: This Website or any portion of this Website may
                not be reproduced, duplicated, copied, sold, visited, or
                otherwise exploited for any commercial purpose without express
                written consent of NEXUSPAY.
              </ListGroup>
            </Row>
         
          </Container>
        </Container>
      </LayoutOne>
    );
  }
}
