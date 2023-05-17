import PropTypes, { string } from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Cloth from "../../assets/img/Cloth.jpg";
import { Container, Row,  Col, Input, InputGroup, Form } from "reactstrap";
import { Link } from "react-router-dom";




const SoxiService = ({ data, spaceBottomClass }) => {
    
  return (
    <LayoutOne>
      <Container fluid >
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
                      <h1 className="text-light text-center">Services</h1>
                  </div>
            </div>
         </Row>
      </Container>

      <section className="pt-3 pb-5">
           <Container>
                 <Row>
                      <div className="col-lg-3 col-md-3 col-sm-6">
                        <Link to={process.env.PUBLIC_URL + "/electricity"}>
                              <div className="soxiservice-box">
                                      {string["electricity"]}
                                      <i className="pe-7s-light" />
                                      <h4>Electricity</h4>
                                    
                              </div>
                          </Link> 
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6">
                         {/* <Link to={process.env.PUBLIC_URL + "/gass"}> */}
                         <Link to={process.env.PUBLIC_URL + "/ComingSoon"}>
                            <div className="soxiservice-box">
                                    {string["electricity"]}
                                    <i className="pe-7s-safe " />
                                    <h4>Gas</h4>
                                  
                            </div>
                          </Link> 
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6">
                         {/* <Link to={process.env.PUBLIC_URL + "/water"}> */}
                         <Link to={process.env.PUBLIC_URL + "/ComingSoon"}>
                          <div className="soxiservice-box">
                                  {string["electricity"]}
                                   <i className="pe-7s-paint-bucket " />
                                   <h4>Water</h4>
                          </div>
                          </Link> 
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6">
                         {/* <Link to={process.env.PUBLIC_URL + "/internet"}> */}
                         <Link to={process.env.PUBLIC_URL + "/ComingSoon"}>
                          <div className="soxiservice-box">
                                  {string["electricity"]}
                                   <i className="pe-7s-global" />
                                     <h4>Broadband Bill</h4>
                                 
                          </div>
                          </Link> 
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6">
                        <Link to={process.env.PUBLIC_URL + "/mobilerecharge"}>
                              <div className="soxiservice-box">
                                      {string["electricity"]}
                                      <i className="pe-7s-phone" />
                                        <h4>Mobile Recharge</h4>
                              </div>
                          </Link> 
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6">
                         <Link to={process.env.PUBLIC_URL + "/dthbill"}> 
                         
                            <div className="soxiservice-box">
                                    {string["electricity"]}
                                    <i className="pe-7s-airplay" />
                                      <h4>DTH</h4>
                                  
                            </div>
                          </Link> 
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6">
                         {/* <Link to={process.env.PUBLIC_URL + "/electricity"}> */}
                         <Link to={process.env.PUBLIC_URL + "/ComingSoon"}>
                              <div className="soxiservice-box">
                                      {string["electricity"]}
                                      <i className="pe-7s-clock" />
                                        <h4>Airtime</h4>
                              </div>
                          </Link> 
                      </div>
                      
                      <div className="col-lg-3 col-md-3 col-sm-6">
                         {/* <Link to={process.env.PUBLIC_URL + "/shoppingbill"}> */}
                         <Link to={process.env.PUBLIC_URL + "/ComingSoon"}>
                              <div className="soxiservice-box">
                                      {string["electricity"]}
                                      <i className="pe-7s-ticket" />
                                        <h4>Train</h4>
                              </div>
                          </Link> 
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6">
                        {/* <Link to={process.env.PUBLIC_URL + "/electricity"}> */}
                        <Link to={process.env.PUBLIC_URL + "/ComingSoon"}>
                          <div className="soxiservice-box">
                                  {string["electricity"]}
                                   <i className="pe-7s-ticket" />
                                     <h4>Bus</h4>
                          </div>
                          </Link> 
                      </div>
                     
                 </Row>
           </Container>
      </section>
  </LayoutOne>
  );

};

SoxiService.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default SoxiService;




