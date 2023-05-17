import React from "react";
import { Link } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { string } from "prop-types";
import { Container, Row,  Col, Input, InputGroup, Form,Button } from "reactstrap";
import axiosConfig from "../../axiosConfig";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

class HomeCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //service: "",
      code: "",
      re_type: "",
      allService:[],
      MobileNo:8121787777,
      APIKey: "vzfWPhGe8GQRWHarKgzFVXJYxmkgFLdZrUG",
      REQTYPE: "RECH",
      SERCODE: "",
      CUSTNO: "",
      REFMOBILENO: "",
      AMT: "",
      STV: "",
      RESPTYPE: "",
      serviceR:[]
    };
  } 
  componentDidMount() {
    axiosConfig
      .get("/admin/getOperators")
      .then((response) => {
         console.log(response.data.data);
        this.setState({ serviceR: response.data.data});
      })
      .catch((error) => {
        console.log(error);
      });
    }
  

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  submitHandler = (e) => {
    e.preventDefault();
    // let { id } = this.props.match.params;
    axiosConfig
      .post(`/admin/moRecharge/`, this.state)
      
      .then((response) => {
        console.log(response.data);
        console.log(response.data.STATUSMSG);
        if(response.data.STATUSMSG !== "Failed" && response.data.STATUSMSG != "Failed" ){
          swal("Success!", "Recharge SuccessFull!", "success");

        }
        else {
          swal("Error!", "Recharge UnsuccssFull!", "error");

        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {

    // const notify = () => toast.success("Recharge Successful!");

  return (
    <div className="col-lg-12 col-md-12 mb-30">
      <div className="category-home">
      <section className="st-p">
      <Container>
        <div className="bx1">
          <Row>
            <Col md="12">
              <ul className="st-2">
               <li className="st-1">
                  <Link to={process.env.PUBLIC_URL + "/electricity"}>
                    {string["electricity"]}
                    <i className="pe-7s-light circle-1" />
                    <p>Electricity</p>
                  </Link>
                </li>
                <li className="st-1">
                  {/* <Link to={process.env.PUBLIC_URL + "/gass"}>
                    {string["gass"]} */}
                    <Link to={process.env.PUBLIC_URL + "/ComingSoon"}>
                    {string["ComingSoon"]}
                    <i className="pe-7s-safe circle-1" />
                    <p>Gas</p>
                  </Link>
                </li>
                <li className="st-1">
                  {/* <Link  to={process.env.PUBLIC_URL + "/water"}>
                    {string["water"]} */}
                    <Link to={process.env.PUBLIC_URL + "/ComingSoon"}>
                    {string["ComingSoon"]}
                    <i className="pe-7s-paint-bucket circle-1" />
                    <p>Water</p>
                  </Link>
                </li>
                <li className="st-1">
                  {/* <Link to={process.env.PUBLIC_URL + "/internet"}>
                  {string["internet"]} */}
                   <Link to={process.env.PUBLIC_URL + "/ComingSoon"}>
                    {string["ComingSoon"]}
                    <i className="pe-7s-global circle-1" />
                    <p>Broadband Bill</p>
                  </Link>
                </li>
               
                <li className="st-1">
                  <Link to={process.env.PUBLIC_URL + "/mobilerecharge"}>
                    {string["mobilerecharge"]} 
                    <i className="pe-7s-phone circle-1 " />
                    <p>Mobile Recharge</p>
                  </Link>
                </li>

                <li className="st-1">
                  <Link to={process.env.PUBLIC_URL + "/dthbill"}>
                    {string["dthbill"]}
                    <i className="pe-7s-airplay circle-1" />
                    <p>DTH</p>
                  </Link>
                </li>

                <li className="st-1">
                <Link to={process.env.PUBLIC_URL + "/ComingSoon"}>
                    {string["ComingSoon"]}
                    <i className="pe-7s-clock circle-1" />
                    <p>Airtime</p>
                  </Link>
                </li>
                
                <li className="st-1">
                  {/* <Link to={process.env.PUBLIC_URL + "/shoppingbill"}>
                    {string["shoppingbill"]} */}
                     <Link to={process.env.PUBLIC_URL + "/ComingSoon"}>
                    {string["ComingSoon"]}
                    <i className="pe-7s-ticket circle-1" />
                    <p>Train Ticket</p>
                  </Link>
                </li>
                <li className="st-1">
                <Link to={process.env.PUBLIC_URL + "/ComingSoon"}>
                    {string["ComingSoon"]}
                    <i className="pe-7s-ticket circle-1" />
                    <p>Bus Ticket</p>
                  </Link>
                </li>
                <li className="st-1">
                  <Link to={process.env.PUBLIC_URL + "/soxiservice"}>
                    {string["soxiservice"]}
                    <i className="pe-7s-more circle-1" />
                    <p> More</p>
                  </Link>
                </li>
              </ul>
            </Col>
            {/* <div className="bx-2">
              <h3 className="mb-3 bold">Quick Recharge</h3>
              <Form onSubmit={this.submitHandler}>
                <div className="int-box">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Prepaid"
                  />
                </div>
                <div className="int-box">
                  <FormControlLabel control={<Checkbox />} label="Postpaid" />
                </div>
                <Row>
                  <Col md="3" className="mb-2">
                  <Input
                  type="select"
                  name="SERCODE"
                  className="st-select"
                  value={this.state.SERCODE}
                  onChange={this.changeHandler}>
                  <option>Choose an operator</option>
                   {this.state.serviceR?.map((servicep) => (
                  <option value={servicep.code} key={servicep._id}>
                    {servicep.service}
                  </option>
                ))}</Input>
                  </Col>
                  <Col md="3" className="mb-2">
                  <Input type="number"
                        name="CUSTNO"
                        required
                        value={this.state.CUSTNO}
                        onChange={this.changeHandler}
                        className="form-control"
                        placeholder="Registered Mobile No."
                          />
                  </Col>
                  <Col md="3" className="mb-2">
                       <Input 
                              className="form-control"
                              placeholder="Amount"
                              required
                              name="AMT"
                              type="number"
                              value={this.state.AMT}
                              onChange={this.changeHandler}
                            />
                  </Col>
                  <Col md="3">
                        {localStorage.getItem("auth-token") ? (
                            <Button className="btn-s mb-st">Continue</Button>
                          ) : (
                            <Button
                              className="btn-s mb-st"
                              onClick={(e) =>
                                (window.location.href = "/login-register")
                              }
                            >
                              Continue
                            </Button>
                          )}
                  </Col>
                </Row>
              </Form>
            </div> */}
          </Row>
        </div>
      </Container>
    </section>
    </div>
    </div>
  );
  }
}


export default HomeCategory;
