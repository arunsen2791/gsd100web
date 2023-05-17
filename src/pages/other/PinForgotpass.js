// import PropTypes from "prop-types";
import React from "react";
import { Container, Row,  Col, Input, InputGroup, Form, Button } from "reactstrap";
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import codeimg from "../../assets/img/codeimg.png"
import Logo from '../../assets/img/logo/logo.png';

// import swal from 'sweetalert';
class PinForgotPass extends React.Component {
 
    constructor(props) {
        super(props);
    
        this.state = {

            customerId:""
        }
    }
        
      handlechange = (e) => {
            e.preventDefault();
            this.setState({ [e.target.name]: e.target.value });
      };

      submitHandler = (e) => {
        e.preventDefault();
        //let { id } = this.props.match.params;
        axiosConfig
          .post(`/user/verifycode`, this.state, {
            headers: {
              "auth-token": localStorage.getItem("auth-token"),
              
            },
          })
          .then((response) => {
            console.log(response.data);
            console.log(response.data.token);
            if(response.data.token !== "" && response.data.token !== null && response.data.token !== undefined){
              localStorage.setItem("auth-token" , response.data.token)
            }
            if(response.data.msg == "otp verified"  && response.data.msg === "otp verified" ){
              swal("Success!", " UserID Submitted Successful..", "success");
              this.props.history.push("/ForgotPassword");
            }
            else {
              swal("Error!", "Try Again", "error");
            }
          })
          .catch((error) => {
            console.log(error.response.msg == "incorrect code" && error.response.msg === "incorrect code");
            swal("Error!", "Invalid UserID", "error");
          });
    
      };

      changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };

render() {

  return (
  
       <section style={{margin:"70px 0px"}}>
         <Container>
           <Row>
              <Col md="12">
                   <div className="resetpass">
                        <div className="headbox">
                           <Link to="/login-register">
                               <img src= {Logo}   style={{width:200}} />
                           </Link>
                        </div>
                        <img src= {codeimg}   style={{width:200}} />
                        <br></br>
                        <br></br>
                       <h3>Enter Your UserID</h3>
                       <br></br>
                       <Form onSubmit={this.submitHandler}>
                          <Input
                              type="number"
                              required
                              placeholder="Enter Your UserID"
                              name="customerId"
                              value={this.state.customerId}
                              onChange={this.handlechange}
                              >
                          </Input>
                            <br></br> 
                            <div className="login-toggle-btn ">
                                <Button type="submit" className="sr-btn1 ">
                                   Submit
                                </Button>
                            </div>
                       </Form>
                   </div>
              </Col>
            </Row>  
          </Container> 
        </section>
    );
  }
}
export default PinForgotPass;