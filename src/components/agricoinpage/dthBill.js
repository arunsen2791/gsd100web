import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Cloth from "../../assets/img/Cloth.jpg";
import alldth from '../../assets/img/alldth.png';
import { Container, Row,  Col, Input, InputGroup, Form,Button } from "reactstrap";
// import { Button } from "react-scroll";
import axios from "axios";
import swal from "sweetalert";
class DthtBill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      walletId :"",
     dth_code:"",
    amount: '',
    
    number: "",
      serviceR:[],
      code :"",
      account: "",
      AMTNO:'',
      biller_code : "",
      userData:{},
     
      isDthBill : false,
    };
  }
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("userInfo"))
    this.setState({userData:user})
    axios
      .get("http://44.205.32.29:8000/admin/dthlist/")
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
          
          if(e.target.name === 'CUSTNO'){
            inputtxt = e.target.value;
    
            if (/^[6789][0-9]{9}$/.test(inputtxt)) {
              this.setState({ isDthBill : false, number : inputtxt });
              if(this.state.biller_code === ""){
                this.setState({ isCode : true })
                return true;
              }
              
              let payload = {
                number : inputtxt,
                biller_code:this.state.biller_code
              }
              axios
              .post(`http://44.205.32.29:8000/admin/dth_recharge
              `,payload)
              
              .then((response) => {
                console.log(response.data);
                console.log(response.data.STATUSMSG);
              
              
              })
              .catch((error) => {
                console.log(error.response);
              });
      
                return true;
            }else{
              this.setState({ isDthBill : true });        
              return false;
            }}
          };

          
          
   changeHandlerAmount = (e) =>{
       
      let inputtxtamt = 0;
      this.setState({ [e.target.name]: e.target.value });
      if(e.target.name === 'AMTNO'){
        inputtxtamt = e.target.value;

        if  (/^[6789][0-9]{9}$/.test(inputtxtamt))  {
          this.setState({ isAmount : false, number : inputtxtamt }); 

        let payload = {
          number : inputtxtamt
        }
    axios
      .post(`http://44.205.32.29:8000/admin/dth_recharge
      `, payload)
      
      .then((response) => {
        console.log(response.data.STATUSMSG);
        this.setState({ responseData : response.data })

      })
      .catch((error) => {
        console.log(error.response);
      });
        return true;
      }else{
        this.setState({ isAmount : true });        
        return false;
      }}
    }; 
    
      
  
  


    onRechargeSubmit =() => {
     
          if(this.state.AMTNO === '' || this.state.AMTNO === 0 ){
            this.setState({ isAmountVal : true });
            return true;
           } else{
            let payload = {
        
        walletId :this.state.userData.walletId,
        dth_code :this.state.responseData?.dth_code,
        amount: this.state.AMTNO,
        biller_code : this.state.biller_code,
        number: this.state.number
      }

    axios
    .post(`http://44.205.32.29:8000/admin/dth_recharge/`,payload)
    .then((response) => {
      console.log(response.data.data);
      console.log(response.data.STATUSMSG);
      if(response.data.STATUSMSG !== "Failed" && response.data.STATUSMSG !== "Failed" ){
         swal("Success!", "Recharge SuccessFull!", "success");
         this.props.history.push("/orderrecharge"); 
       }
       else {
         swal("Error!", "Recharge UnsuccssFull!", "error");
       }
    })
  .catch((error) => {
    console.log(error.response);
   });

  }
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
            backgroundSize:"cover"
          }}
        >
          <div className="">
            <h1 className="text-light text-center">DTH Recharge</h1>
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
                  <h4 className="sr-h4">DTH Recharge</h4>
                  <div className="sr-1">
                  <Form className="m-1" onSubmit={this.submitHandler}>
                    <Col md="12">
                    <Input
                  type="select"
                  className="st-select"
                  name="biller_code"
                  value={this.state.biller_code}
                  onChange={this.changeHandler}>
                  <option>Choose an operator</option>
                  {this.state.serviceR?.map((servicep) => (
                  <option value={servicep.code} key={servicep._id}>
                  {servicep.service}
                  </option>))}
                </Input> 
                       
                    </Col>
                    <br></br>
                    <Col md="12">
                        <Input type="text"
                        className="form-control"
                        required
                        placeholder="Registered Mobile No./Subscriber ID/Customer Id"
                        name="CUSTNO"
                        value={this.state.CUSTNO} 
                        onChange={this.changeHandler} />
                        <span style={{color : 'red'}}>{this.state.isDthBill ? 'Please enter 10 digits mobile number' : null}</span>
                       
                    </Col>
                    <small style={{color:"red",}}>(Subscriber ID starts with 1 and is 10 digits long. To locate it, press the home button on remote.)</small>
                    <br></br>
                    <br></br>
                    <Col md="12">
                        <InputGroup>
                            <span className="sr-2">Rs.</span>
                            <Input 
                              className="form-control"
                              placeholder="Amount"
                              name="AMTNO"
                              required
                              value={this.state.AMTNO}
                              onChange={this.changeHandlerAmount}
                            />
                        </InputGroup>
                    </Col>
                    <br></br>
                    {/* <button className="sr-btn">Proceed to Recharge</button> */}

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
                    <img src= {alldth}  alt="image" className="dthlogo" />
                </div>
            </Col>
        </Row>
    </Container> 
    </section>
  </LayoutOne>
  );
}
}

export default DthtBill;
