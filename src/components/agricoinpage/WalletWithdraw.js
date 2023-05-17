import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Dpositbanner from "../../assets/img/dpositbanner.jpg";
import { Container, Row,  Col, Input, InputGroup, Form, Button } from "reactstrap";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Qrcode from '../../assets/img/qr-code.jpeg';
import Logo from '../../assets/img/logo/logo.png';



const WalletWithdraw = ({ data, spaceBottomClass }) => {
   

      
  return (

    <LayoutOne>

    <Container fluid className="">
      <Row className="">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundImage: `url(${Dpositbanner})`,
            width: "100%",
            padding:"35px 0px",
            backgroundSize:"cover"
          }}
        >
          <div className="deposit-form">
              <div className="dpositlogo mb-4">
                <img src= {Logo}   width="150px" />
                <h5>Withdraw Form</h5>
              </div>
              <form>
                   <div className="col-lg-12 mb-3">
                     <input
                         name="user_id"
                         placeholder="USER ID*"
                         type="number"
                        />
                    </div> 
                    <div className="col-lg-12 mb-3">
                     <input
                         name="user_name"
                         placeholder="USERNAME*"
                         type="text"
                        />
                    </div> 
                    <div className="col-lg-12 mb-3">
                     <input
                         name="email"
                         placeholder="EMAIL ID*"
                         type="email"
                        />
                    </div> 
                    <div className="col-lg-12 mb-3">
                     <input
                         name="phonenumber"
                         placeholder="PHONE NUMBER*"
                         type="number"
                        />
                    </div>
                    <div className="col-lg-12 mb-3">
                     <input
                         name="date"
                         placeholder=""
                         type="date"
                        />
                    </div>
                    <div className="col-lg-12 mb-3">
                     <input
                         name="amount"
                         placeholder="Enter Amount*"
                         type="text"
                        />
                    </div>
                    
              </form>
              <Button className="dp-submit mt-3">
                  Submit Details
              </Button>
          </div>
        </div>
      </Row>
      </Container>
  </LayoutOne>
  );

 }


 WalletWithdraw.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default WalletWithdraw;
