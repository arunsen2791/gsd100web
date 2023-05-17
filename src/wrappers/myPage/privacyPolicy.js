import React, { Component } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Cloth from "../../assets/img/Cloth.jpg";
import { Container, Row, ListGroup } from "reactstrap";

export default class privacyPolicy extends Component {
  render() {
    return (
      <LayoutOne>
        <Container fluid>
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
                <h1 className="text-light text-center">privacy Policy</h1>
              </div>
            </div>
          </Row>
          <Container>
            <Row>
              <ListGroup>
                <h2 style={{ fontWeight: "500" }}>Privacy Policy</h2>
                <p style={{ color: "white" }}>
                  GSD100, C/O, Brizebond Technologies Private Limited (GSD100)
                  takes your privacy very seriously. This Privacy Policy
                  (“Privacy Policy”) explains the details of our collection, use
                  and disclosure of information, including your personal
                  information. You should read this Privacy Policy in its
                  entirety. This Privacy Policy must be read in conjunction and
                  together with the Terms of Use.
                </p>
                <li style={{ color: "white" }}>
                  We are the operators of the website www.weebuy.in, associated
                  web application and a provider of a range of online
                  products/services in relation thereto. We provide a platform
                  where we may publish products which are made available by us
                  or other sellers (collectively: “Sellers”) to end users
                  (“Customers”). This Privacy Policy applies to information that
                  we collect through our website, web application, electronic
                  communications, or services.
                </li>
                <li style={{ color: "white" }}>
                  By accessing, or using the GSD100 website (“Website”), and/or
                  its applications (“App/Application”) you expressly agree and
                  consent to be bound by the terms of this Privacy Policy.
                </li>
                <li style={{ color: "white" }}>
                  The terms "WE", "OUR" and "US" refer to GSD100 and the terms "
                  YOU", "YOUR" and "USER" refer to you, as a user of GSD100.
                </li>
                <li style={{ color: "white" }}>
                  Personal Information refers to any information about a living
                  individual who can be identified from that information, either
                  by itself or when it is combined with other information. The
                  Personal Information collected from you will be used only for
                  the purpose of enabling you to use the services provided by
                  us, to help promote a safe service, calibrate consumer
                  interest in our products and services, inform you about online
                  offers and updates, troubleshoot problems, customize user
                  experience, detect and protect us against error, fraud and
                  other criminal activity, enforce our terms and conditions, and
                  as otherwise described to you at the time of collection of
                  such information.
                </li>
                <li style={{ color: "white" }}>
                  If you do not agree with the terms of this Privacy Policy, you
                  will be not be allowed to access and use the Website or use
                  the App or any part of the services as provided by us
                  (“Services”).
                </li>
                <li style={{ color: "white" }}>
                  We use your email address to send you updates, news, and
                  newsletters (if you willingly subscribe to the newsletter
                  during registration, or after registration) and contact you on
                  behalf of other users (such other users who send you requests,
                  personal messages, etc). If you do not want to receive
                  communications from us that are not relevant to you, please
                  click on the unsubscribe link provided at the bottom of such
                  e-mails sent to you by us. We use your mobile numbers to send
                  you transaction alerts and SMS alerts based on your
                  preferences. If you do not wish to receive such SMSs from us,
                  please notify us at support@NEXUSPAY.com to stop receiving
                  SMSs from us. Please note that it may take about 14 days to
                  process your request. Please keep in mind that we will
                  continue to notify you by email /SMS/via phone calls regarding
                  your services with us, even after you have opted out.
                </li>
              </ListGroup>
            </Row>
            <Row>
              <ListGroup>
                <h2 style={{ fontWeight: "500", margin: "8px" }}>
                  Scope of Policy and Terms{" "}
                </h2>
                <p style={{ color: "white" }}>
                  1. This Privacy Policy applies to the GSD100 Website, or any
                  online/web application that refers to or links to this Privacy
                  Policy. This Privacy Policy applies regardless of whether you
                  have downloaded or accessed the Website or Application onto
                  your mobile telephone or handheld device (“Device”) or any
                  other computer resource to access our Services.
                </p>
                <p style={{ color: "white" }}>
                  2. This Privacy Policy applies to the personal information
                  (including Sensitive Personal Information) of an individual or
                  group of individuals.{" "}
                </p>
                <p style={{ color: "white" }}>
                  3. This Privacy Policy governs the use of any and all GSD100
                  Services availed by you.{" "}
                </p>
                <h2 style={{ fontWeight: "500" }}>Information We Collect</h2>
                <p style={{ color: "white" }}>
                  4. GSD100 collects, processes and retains information, i.e.
                  Personal Information (including Sensitive Personal
                  Information) about you when you visit “www.NEXUSPAY.com”. In
                  course of your use and transactions on the Website and
                  Application, we collect the following information:
                </p>
               
               
              
              </ListGroup>
            </Row>
          </Container>
        </Container>
      </LayoutOne>
    );
  }
}
