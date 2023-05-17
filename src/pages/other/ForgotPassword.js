// import PropTypes from "prop-types";
import React from "react";
import { Container, Row,  Col, Input, InputGroup, Form, Button } from "reactstrap";
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import Logo from '../../assets/img/logo/logo.png';
import passfor from "../../assets/img/passfor.png"
import { Link } from "react-router-dom";

// import swal from 'sweetalert';
class ForgotPassword extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
            password:"",
            cnfrmPassword:""
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        //let { id } = this.props.match.params;
        axiosConfig
          .post(`/user/forgetpass_user`, this.state, {
            headers: {
              "auth-token": localStorage.getItem("auth-token"),
            },
          })
          .then((response) => {
            localStorage.removeItem("auth-token")
            console.log(response.data.STATUSMSG);
            if(response.data.msg == "success"  && response.data.msg === "success"){
              swal("Success!", " Password Change Successfully ", "success");
              this.props.history.push("/login-register");
            }
            else {
              swal("Error!", "Try Again", "error");
            }
          })
          .catch((error) => {
            console.log(error.response.msg == "error" && error.response.msg === "error");
            swal("Error!", "Password not matched", "error");
          });
    
      };

      changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
      
      handlechange = (e) => {
        e.preventDefault();
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
                           <img src= {Logo}   style={{width:200}} />
                        </div>
                        <img src= {passfor}   style={{width:200}} />
                        <br></br>
                        <br></br>
                       <h3>Forgot Password</h3>
                       <br></br>
                       <Form onSubmit={this.submitHandler}>
                          <Input
                              type="Password"
                              placeholder="New Password"
                              name="password"
                              required
                              value={this.state.password}
                              onChange={this.changeHandler}
                              >
                          </Input>
                          <br></br>
                          <Input
                              type="Password"
                              placeholder="Confirm Password"
                              required
                              name="cnfrmPassword"
                              value={this.state.cnfrmPassword}
                              onChange={this.changeHandler}
                              >
                          </Input>
                            <br></br> 
                            <div className="login-toggle-btn ">
                                <button type="submit" className="sr-btn1 ">
                                   Submit
                                </button>
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
export default ForgotPassword;