/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React from "react";
// import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import { Link } from "react-router-dom";
class SoxyPayTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
      responseData : {},
   
      CODE:"14",
      isCode : false,
      code: "RJP",
      circle_code: ""
      //  number : 9748876319
    };
  }
  componentDidMount = () =>{
    console.log('@props@@@@@',this.props)
  }

  onRechargeSubmit = (e) =>{
         
    console.log('@@@@',this.state.CODE)
    if(this.state.CODE === '' || this.state.CODE === 0 ){
     this.setState({ isCode : true });
     return true;
    } else{
     let payload = {
       
      code : this.state.CODE, //parseInt(this.state.number)
         circle_code : this.state.responseData?.code,

        //  number : this.state.number //parseInt(this.state.number)
     
     }
//  axios
//    .post(`http://35.154.134.118/api/admin/Plans/`, payload)
//    .then((response) => {
//      console.log(response.data);
//      console.log(response.data.STATUSMSG);
//      this.setState({ responseData : response.data })
//    })
//    .catch((error) => {
//      console.log(error.response);
//    });
    }
   } 
     
    render() {
     const {plans,selectedTask} = this.props;
    return (
        <div>
          <div className="container">
            {/* section title */}
            <Tab.Container defaultActiveKey="bestSeller">
              <Nav
                variant="pills"
                className="sttt"
              >
                <Nav.Item>
                  <Nav.Link eventKey="bt-1" className="ftt-1 active">
                    <p className="ftt-2">Popular</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="bt-2" className="ftt-1">
                    <p className="ftt-2">Special Recharge</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="bt-3" className="ftt-1">
                    <p className="ftt-2">Top Up</p>
                  </Nav.Link>
                </Nav.Item>
                 <Nav.Item>
                  <Nav.Link eventKey="bt-4" className="ftt-1">
                    <p className="ftt-2">2G/3G/4G Data</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="bt-5" className="ftt-1">
                    <p className="ftt-2">Full Talktime</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="bt-6" className="ftt-1">
                    <p className="ftt-2">Roaming</p>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="ftt-3">
                <Tab.Pane eventKey="bt-1" className="active">
                  <div className="row">
                  <div className="table-content table-responsive cart-table-content tt-1">
                      <table>
                        <thead>
                          <tr>
                            <th>Talktime</th>
                            <th>Validity</th>
                            <th>Description</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                         
                              {/* <tr > */}
                              {
                         (this.props.plans !==undefined ? this.props.plans.map(function(item, i){
                            return  <>
                                  <tr>
                                  <td className="product-thumbnail">{item.talktime}</td>
                                  <td className="product-thumbnail">{item.validity}</td>
                                  <td className="product-thumbnail">{item.planDescription}</td>
                                   <td className="product-thumbnail">
                                     <Link className="st-amt">
                                        {item.amount}
                                    </Link>
                                    {/* onClick= {() => selectedTask(item.amount)} */}
                                    </td>
                                  </tr>
                                  </>
                                  
                                }) : null)
                              }

                               {/* <td className="product-thumbnail">
                              {this.state.plans?.talktime}
                              </td> */}

                                {/* <td className="product-name">
                                  ghghghghg
                                </td> */}

                                {/* <td className="product-price-cart">
                                 ggghghggh
                                </td> */}

                                {/* <td className="product-quantity">
                                 hghghghghgh
                                </td> */}

 
                                                           
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="bt-2">
                  <div className="row">
                  <div className="table-content table-responsive cart-table-content tt-1">
                      <table>
                        <thead>
                          <tr>
                            <th>Talktime</th>
                            <th>Validity</th>
                            <th>Description</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                         
                              {/* <tr > */}
                              {
                         (this.props.plans !==undefined ? this.props.plans.map(function(item, i){
                            return  <>
                                  <tr>
                                  <td className="product-thumbnail">{item.talktime}</td>
                                  <td className="product-thumbnail">{item.validity}</td>
                                  <td className="product-thumbnail">{item.planDescription}</td>
                                   <td className="product-thumbnail">
                                     <Link className="st-amt">
                                        {item.amount}
                                    </Link>
                                    </td>
                                  </tr>
                                  </>
                                  
                                }) : null)
                              }

                               {/* <td className="product-thumbnail">
                              {this.state.plans?.talktime}
                              </td> */}

                                {/* <td className="product-name">
                                  ghghghghg
                                </td> */}

                                {/* <td className="product-price-cart">
                                 ggghghggh
                                </td> */}

                                {/* <td className="product-quantity">
                                 hghghghghgh
                                </td> */}

 
                                                           
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="bt-3">
                  <div className="row">
                  <div className="table-content table-responsive cart-table-content tt-1">
                      <table>
                        <thead>
                          <tr>
                            <th>Talktime</th>
                            <th>Validity</th>
                            <th>Description</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                         
                              {/* <tr > */}
                              {
                         (this.props.plans !==undefined ? this.props.plans.map(function(item, i){
                            return  <>
                                  <tr>
                                  <td className="product-thumbnail">{item.talktime}</td>
                                  <td className="product-thumbnail">{item.validity}</td>
                                  <td className="product-thumbnail">{item.planDescription}</td>
                                   <td className="product-thumbnail">
                                     <Link className="st-amt">
                                        {item.amount}
                                    </Link>
                                    </td>
                                  </tr>
                                  </>
                                  
                                }) : null)
                              }

                               {/* <td className="product-thumbnail">
                              {this.state.plans?.talktime}
                              </td> */}

                                {/* <td className="product-name">
                                  ghghghghg
                                </td> */}

                                {/* <td className="product-price-cart">
                                 ggghghggh
                                </td> */}

                                {/* <td className="product-quantity">
                                 hghghghghgh
                                </td> */}

 
                                                           
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="bt-4">
                  <div className="row">
                  <div className="table-content table-responsive cart-table-content tt-1">
                      <table>
                        <thead>
                          <tr>
                            <th>Talktime</th>
                            <th>Validity</th>
                            <th>Description</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                         
                              {/* <tr > */}
                              {
                         (this.props.plans !==undefined ? this.props.plans.map(function(item, i){
                            return  <>
                                  <tr>
                                  <td className="product-thumbnail">{item.talktime}</td>
                                  <td className="product-thumbnail">{item.validity}</td>
                                  <td className="product-thumbnail">{item.planDescription}</td>
                                   <td className="product-thumbnail">
                                     <Link className="st-amt">
                                        {item.amount}
                                    </Link>
                                    </td>
                                  </tr>
                                  </>
                                  
                                }) : null)
                              }

                               {/* <td className="product-thumbnail">
                              {this.state.plans?.talktime}
                              </td> */}

                                {/* <td className="product-name">
                                  ghghghghg
                                </td> */}

                                {/* <td className="product-price-cart">
                                 ggghghggh
                                </td> */}

                                {/* <td className="product-quantity">
                                 hghghghghgh
                                </td> */}

 
                                                           
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="bt-5">
                  <div className="row">
                  <div className="table-content table-responsive cart-table-content tt-1">
                      <table>
                        <thead>
                          <tr>
                            <th>Talktime</th>
                            <th>Validity</th>
                            <th>Description</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                         
                              {/* <tr > */}
                              {
                         (this.props.plans !==undefined ? this.props.plans.map(function(item, i){
                            return  <>
                                  <tr>
                                  <td className="product-thumbnail">{item.talktime}</td>
                                  <td className="product-thumbnail">{item.validity}</td>
                                  <td className="product-thumbnail">{item.planDescription}</td>
                                   <td className="product-thumbnail">
                                     <Link className="st-amt">
                                        {item.amount}
                                    </Link>
                                    </td>
                                  </tr>
                                  </>
                                  
                                }) : null)
                              }

                               {/* <td className="product-thumbnail">
                              {this.state.plans?.talktime}
                              </td> */}

                                {/* <td className="product-name">
                                  ghghghghg
                                </td> */}

                                {/* <td className="product-price-cart">
                                 ggghghggh
                                </td> */}

                                {/* <td className="product-quantity">
                                 hghghghghgh
                                </td> */}

 
                                                           
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="bt-6">
                  <div className="row">
                  <div className="table-content table-responsive cart-table-content tt-1">
                      <table>
                        <thead>
                          <tr>
                            <th>Talktime</th>
                            <th>Validity</th>
                            <th>Description</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                         
                              {/* <tr > */}
                              {
                         (this.props.plans !==undefined ? this.props.plans.map(function(item, i){
                            return  <>
                                  <tr>
                                  <td className="product-thumbnail">{item.talktime}</td>
                                  <td className="product-thumbnail">{item.validity}</td>
                                  <td className="product-thumbnail">{item.planDescription}</td>
                                   <td className="product-thumbnail">
                                     <Link className="st-amt">
                                        {item.amount}
                                    </Link>
                                    </td>
                                  </tr>
                                  </>
                                  
                                }) : null)
                              }

                               {/* <td className="product-thumbnail">
                              {this.state.plans?.talktime}
                              </td> */}

                                {/* <td className="product-name">
                                  ghghghghg
                                </td> */}

                                {/* <td className="product-price-cart">
                                 ggghghggh
                                </td> */}

                                {/* <td className="product-quantity">
                                 hghghghghgh
                                </td> */}

 
                                                           
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      );
    };
  
}    
export default SoxyPayTab;
