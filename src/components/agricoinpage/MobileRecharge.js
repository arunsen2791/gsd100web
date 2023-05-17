import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Cloth from "../../assets/img/Cloth.jpg";
import { Container, Row,  Col, Input, InputGroup, Form,Button } from "reactstrap";
import axiosConfig from "../../axiosConfig";
import SoxyPayTab from "../agricoinpage/SoxyPayTab";

import swal from 'sweetalert';



class MobileRecharge extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    //  walletId:"",
      circle_name:"",
      circle_code:"",
      circleN:[],
      number : '',
      isMobile : false,
      isAmount : false,
      isAmountVal : false,
      responseData : {},
      amount : "",
      biller_code : "",
      AMTNO:'',
      plans:[],
      isPostpaidLn: true,
      status:"",
      
      userData:{},
    };
  }
  componentDidMount() {
    
    let user = JSON.parse(localStorage.getItem("userInfo"))
    this.setState({userData:user})
    //console.log(user);
    axiosConfig
      .get("/admin/getcircles")
      .then((response) => {
         console.log(response.data.data);
        this.setState({ circleN: response.data.data});
        
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
          this.setState({ isMobile : false, number : inputtxt });
          
          let payload = {
            number : inputtxt
          }
          axiosConfig
          .post(`/admin/operatorLookup/
          `,payload)
          
          .then((response) => {
            console.log(response.data);
            console.log(response.data.STATUSMSG);
            this.setState({ responseData : response.data,circle_name:response.data?.state })
            let obj = this.state.circleN.find(data => data.circle_name === response.data?.state);
            this.setState({ circle_code:obj?.circle_code })
            console.log('@@@',obj,response.data.code)
            this.getPlan(obj,response.data.code)

          })
          .catch((error) => {
            console.log(error.response);
          });
  
            return true;
        }else{
          this.setState({ isMobile : true });        
          return false;
        }}
      };

     async getPlan(circle_data,code){
      let payload = {
        code: code,
        circle_code: circle_data.circle_code
      }
     await axiosConfig.post(`/admin/Plans`,payload)  
      .then((response) => {
        console.log('plan details',response.data.data);
        console.log(response.data.STATUSMSG);
        this.setState({plans : response.data.data.plans})

      })
      .catch((error) => {
        console.log(error.response);
      });
      }

  
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
      axiosConfig
        .post(`/admin/mobile_recharge/
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
      
      onRechargeSubmit = (e) =>{
       if(this.state.AMTNO === '' || this.state.AMTNO === 0 ){
        this.setState({ isAmountVal : true });
        return true;
       } else{
        let payload = {
          
          walletId :this.state.userData.walletId,
            amount : this.state.AMTNO, //parseInt(this.state.number)
            biller_code : this.state.responseData?.code,
            number : this.state.number //parseInt(this.state.number)
        
        }
    axiosConfig
      .post(`/admin/mobile_recharge
      `, payload)
      
      .then((response) => {
        console.log(response.data);
        console.log(response.data.STATUSMSG);
        this.setState({ responseData : response.data })
        swal("Successful!", "Recharge Successful!", "success");
        this.props.history.push("/orderrecharge"); 
      })
      
      .catch((error) => {
        
        console.log(error.response);
        swal("Error!", "Invalid!", "error");
      });
       }
      } 

    updateItem = (value) => {
       console.log('Selected Value::',value); 
    } 

  render() {

     let { isPostpaidLn } = this.state;

    const {plans} =this.state;
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
            <h1 className="text-light text-center">Mobile Recharge</h1>
          </div>
        </div>
      </Row>
      </Container>
      <section style={{margin:"70px 0px"}}>
        <Container>
        <Row>
          <Col md="5">
            <div className="text-box">
              <Row>
                <h4 className="sr-h4 pb-2">Mobile Recharge</h4>
                <div className="sr-1">
                <Form className="m-1" onSubmit={this.submitHandler}>
                  <div className="int-box">
                  
        <label   condition={isPostpaidLn}>
             <button>Prepaid</button>
             </label>
       <label    condition={!isPostpaidLn}>
             <button>Postpaid</button>
             </label>
               
                  </div>
                  <Col md="12"> 
                 
          <Col md="12">
            <Input type="text"
                  name="CUSTNO"
                  maxLength="10"
                  required
                  value={this.state.CUSTNO}
                  onChange={this.changeHandler}
                  className="form-control"
                  placeholder="Registered Mobile No."
            />
            <span style={{color : 'red'}}>{this.state.isMobile ? 'Please enter 10 digits mobile number' : null}</span>
          </Col>
            <small style={{color:"red",}}>(Subscriber ID starts with 1 and is 10 digits long. To locate it, press the home button on remote.)</small>
          <br></br>
                  
        <Col md="12">
          <Input
              // type="select"
              className="st-select"
              placeholder="operator"
              name="biller"
              value={this.state.responseData?.service}
              onChange={this.changeHandler}>
              {/* <option>Choose an operator</option> */}
              <option value={this.state.responseData?.service} 
                      key={this.state.responseData?.service}>
                {this.state.responseData?.service}
              </option>
          </Input>
        </Col>
        <br></br>
      </Col>
        <br></br>
      
          <Col md="12">     
            <select
                  type="select"
                  className="st-select tt-1"
                  name="circle_code"
                  value={this.state.circle_code}
                  onChange={this.changeHandler}
                  >
                   
                  <option>Choose an operator</option>
                  {this.state.circleN?.map((circlep) => (
                  <option value={circlep.circle_code} key={circlep._id} selected={this.state.responseData?.state === circlep.circle_name ? true : false}>
                    {circlep.circle_name}
                  </option>
                  ))}
            </select> 
          </Col>
      
        <br></br>
        <Col md="12">
          <InputGroup>
            <span className="sr-2">{this.state.isAmount ?'Rs': null}</span>
              <Input 
                className="form-control"
                placeholder="Amount"
                name="AMTNO"
                type="number"
                required
                value={this.state.AMTNO}
                onChange={this.changeHandlerAmount}
              />
              <span style={{color : 'red'}}>{this.state.isAmountVal ? 'Please enter recharge amount' : null}</span>
          </InputGroup>
        </Col>
        <br></br>
        {localStorage.getItem("auth-token") ? (
        <Button className="sr-btn" onClick ={this.onRechargeSubmit}>Proceed to Recharge</Button>
        ) : (
        <Button
          className="sr-btn"
          onClick={(e) =>
              (window.location.href = "/login-register")}>
          Proceed to Recharge
        </Button>
        )}
      </Form>
           
    </div>
  </Row>
</div>
  </Col>
  <Col md="7">
    <div className="sr-3">
      <h4 className="sr-h">Plan Details</h4>
        <SoxyPayTab plans={plans} selectedTask={() => this.updateItem}/>
      </div>
    </Col>
  </Row>

        
    </Container> 
    </section>

  </LayoutOne>
  );
        }
}

export default MobileRecharge;
