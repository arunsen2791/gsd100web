import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Cloth from "../../assets/img/Cloth.jpg";
import { Container, Row,  Col } from "reactstrap";
import TableHistory from "../agricoinpage/TableHistory"
import { Link } from "react-router-dom";
import axiosConfig from "../../axiosConfig";

// import { Button } from "react-scroll";
class Wallet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    
      walletAmount: 0,
      responseData:{},
      table:[]
    };
  } 

  componentDidMount() {
  //  let { id } = this.props.match.params;
    
    let userInfo ={};
    userInfo = JSON.parse( localStorage.getItem('userInfo') );
  console.log('@@@@@',userInfo)
   if(userInfo === null){
        
   } else{
    axiosConfig

    .get(`/admin/getone/`, {
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
      },
    })
    .then((response) => {
       console.log('wallet@2getone2@@@@@@@',response.data);
      this.setState({responseData: response.data.data});
      this.setState({ walletAmount: response.data.data.amount});
      this.setState({walletId: response.data.data.walletId});
    })
    .catch((error) => {
      console.log(error);
    });
    // let { id } = this.props.match.params;
     axiosConfig.get(`/admin/usersuccess_depositelist/`+userInfo.walletId)
    // axiosConfig.get(`/admin/getusertransaction/${id}`)
    .then((response) => {
       console.log('@@@@transaction API',response.data.data);
      this.setState({table: response.data.data});
    })
    .catch((error) => {
      console.log(error.response);
    });
    }
  }

    changeHandler = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
  render() {
    const {table} = this.state;
    console.log("222@@",this.state.table);
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
            <h1 className="text-light text-center">Wallet</h1>
          </div>
        </div>
      </Row>
    </Container>
    <section style={{margin:"70px 0px"}}>
      <Container>
        <Row>
          <Col md="6">
            <div className="sr-3 mb-4">
              <h4 className="sr-h">Wallet Details </h4>
                <ul className="sr-ul">
                  <li  className="sr-li dr">Available Wallet Balance : <span  className="sr-span">INR:{this.state.walletAmount}</span></li>
                </ul>
                <div className="sr-div">
                  <Link to="/depositform">
                  <button className="sr-btn1" >Deposit to Wallet</button>
                </Link>
              </div>
              {/* <div className="sr-div">
                <Link to="/walletwithdraw">
                <button className="sr-btn1">Withdraw to Wallet</button>
              </Link>
            </div> */}
          </div>
        </Col>
        <Col md="6">
          <div className="sr-3">
            <h4 className="sr-h">Deposit Transaction </h4>
              <TableHistory table={table.length > 0 ? table : []}/>
          </div>
        </Col>
      </Row>
    </Container> 
  </section>
</LayoutOne>
  );

};
}
Wallet.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default Wallet;
