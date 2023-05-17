import React from "react";
import { Link } from "react-router-dom";
import axiosConfig from "../../axiosConfig";
// import { useHistory } from "react-router-dom";

class WalletHeader extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
    amount: 0,
    responseData:{}
   
    };
  } 

  componentDidMount() {
  // let { id } = this.props.match.params;
;
    //  let userInfo = localStorage.getItem( JSON.parse("userInfo"));
     let userInfo ={};
      userInfo = JSON.parse( localStorage.getItem('userInfo') );
    console.log('@@@@@',userInfo)
     if(userInfo === null){
            // const history = useHistory();
            // //history.push("/cart");
            // history.push("/login-register");
     } else{
      axiosConfig
      .get(`/admin/getone/`, {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      })
      .then((response) => {
         console.log('walletqqqqqqq####',response.data);
        this.setState({responseData: response.data.data});
        this.setState({amount: response.data.data.amount});
      })
      .catch((error) => {
        console.log(error);
      });
     }
    
    }
  

    changeHandler = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

  render() {
    
    return (
          
        <Link to="/wallet">
              <div className="wt-text">
                <i className="pe-7s-wallet" />
                {/* <span>INR:{this.state.data.data}</span> */}
                <span>INR:{this.state.amount}</span>
              </div>
        </Link>
      );
     };
    }


export default WalletHeader;
