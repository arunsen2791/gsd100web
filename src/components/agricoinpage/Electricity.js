// import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Cloth from "../../assets/img/Cloth.jpg";
import electrimg from '../../assets/img/electrimg.png';
import { Container, Row,  Col, Input, InputGroup, Form, Button } from "reactstrap";
import axios from "axios";
import swal from "sweetalert";
// import swal from 'sweetalert';
class Electricity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code :"",
      account: "",
      AMTNO:'',
      isElecBill : false,
      isAmount : false,
      responseData : {},
      billAmount:0,
      serviceR:[],
      isCode:false
     
  };
}
componentDidMount() {
  axios
    .get("http://44.205.32.29:8000/admin/electricity_operator/")
    .then((response) => {
    console.log(response.data.data);

    this.setState({ serviceR: response.data.data});
    })
      .catch((error) => {
        console.log(error.response);
      });
    }
    changeHandler = (e) => {
      
      let inputtxt = 0;
      this.setState({ [e.target.name]: e.target.value });

      if(e.target.name === 'account'){
        inputtxt = e.target.value;
        console.log(inputtxt)
         if (/^[1234][0-9]{9}$/.test(inputtxt)) {
          console.log('####',e.target.value)
          this.setState({ isElecBill : false, account : inputtxt });
          if(this.state.code === ""){
            this.setState({ isCode : true })
            return true;
          }
          let payload = {
            account : inputtxt,
            code:this.state.code
          }
          axios
          .post('http://44.205.32.29:8000/admin/fetch_Bill',payload)
          
          .then((response) => {
            console.log(response.data);
           
            if(response.data.status === 'success'){
              console.log(response.data.billAmount);
              this.setState({billAmount : response.data.billAmount})
            } else {
              swal("Warning!", response.data.errortext, "warning");
            }
           

          })
          .catch((error) => {
            console.log(error.response);
          });
  
            return true;
        }else{
          this.setState({ isElecBill : true });        
          return false;
        }}
    };


    onRechargeSubmit =() => {
      // if(this.state.AMTNO === '' || this.state.AMTNO === 0 ){
      //   this.setState({ isAmountVal : true });
      //   return true;
      //  } else{
      let payload = {
        
        walletId :this.state.userData.walletId,
        email : this.state.email,
        account : this.state.account,
        electricity_code : this.state.electricity_code,
        code:this.state.code,
        amount : this.state.amount
      }

    
     
    axios
    .post(`http://44.205.32.29:8000/admin/elec_paybill/`,payload)
    .then((response) => {
      console.log(response.data.data);
      console.log(response.data.STATUSMSG);
      if(response.data.STATUSMSG !== "Failed" && response.data.STATUSMSG !== "Failed" ){
         swal("Success!", "Recharge SuccessFull!", "success");
       }
       else {
         swal("Error!", "Recharge UnsuccssFull!", "error");
       }
    })
  .catch((error) => {
    console.log(error.response);
   });

// }
} 

updateItem = (value) => {
 console.log('Selected Value::',value); 
} 




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
          <h1 className="text-light text-center">Electricity Bills</h1>
        </div>
      </div>
    </Row>
  </Container>
  <section style={{margin:"70px 0px"}}>
    <Container>
      <Row>
        <Col md="6">
         <div className="text-box mb-30">
          <Row>
            <h4 className="sr-h4">Pay For Electricity</h4>
            <div className="sr-1">
            <Form className="m-1">
              <Col md="12">
                <Input
                  type="select"
                  className="st-select"
                  name="code"
                  value={this.state.code}
                  onChange={this.changeHandler}>
                  <option>Choose an operator</option>
                  {this.state.serviceR?.map((servicep) => (
                  <option value={servicep.code} key={servicep._id}>
                  {servicep.service}
                  </option>))}
                </Input> 
                <span style={{color : 'red'}}>{this.state.isCode ? 'Please select operator' : null}</span>  
                </Col>
                <br></br>
                <Col md="12">
                  <Input type="number"
                    name="account"
                    required
                    value={this.state.account}
                    onChange={this.changeHandler}
                    className="form-control"
                    placeholder="Consumer Number"
                  />
                   <span style={{color : 'red'}}>{this.state.isElecBill ? 'Please enter 10 digits IVRS number' : null}</span>
                </Col>

                <small style={{color:"red",}}>(Subscriber ID starts with 1 and is 10 digits long. To locate it, press the home button on remote.)</small>
                <br></br>
                <br></br>
                <Col md="12">
                <InputGroup>
                <span className="sr-2">{this.state.isAmount ?'Rs': null}</span>
                  
                      <Input
                        className="form-control"
                        placeholder="Amount"
                        value={this.state.billAmount}
                        name="AMTNO"
                        type="number"
                        onChange={this.changeHandlerAmount}
                      />
                      <span style={{color : 'red'}}>{this.state.isAmountVal ? 'Please enter recharge amount' : null}</span>
            
                  </InputGroup>
                </Col>
                <br></br>
                  {localStorage.getItem("auth-token") ? (
                  <Button className="sr-btn" onClick ={this.onRechargeSubmit}>Proceed </Button>
                  ) : (
                  <Button 
                    className="sr-btn"
                    onClick={(e) =>
                      (window.location.href = "/login-register")}>Proceed</Button>
                      )}
                  </Form>
                </div>
          </Row>
          </div>
         </Col>
       
            <Col md="6">
               <div className="sr-3 text-center">
                   <img src= {electrimg}  alt="image" />
                </div>
              </Col>
            </Row>  
          </Container> 
        </section>
      </LayoutOne>
    );
  }
}
export default Electricity;