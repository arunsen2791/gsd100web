/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogPagination from "../../wrappers/blog/BlogPagination";
import BlogPostsNoSidebar from "../../wrappers/blog/BlogPostsNoSidebar";
import { Col, Container } from "reactstrap";

import moment from "moment";
import axiosConfig from "../../axiosConfig";
import { Link } from "react-router-dom";
import deleteicon from "../../assets/img/deleteicon.png";
class OrderRecharge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [],
    };
  }

  componentDidMount() {
    let userInfo = {};
    userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo === null) {
      // const history = useHistory();
      // //history.push("/cart");
      // history.push("/login-register");
    } else {
      axiosConfig
        .get(`/admin/getusertransaction/` + userInfo.walletId)
        // axiosConfig.get(`/admin/getusertransaction/${id}`)
        .then((response) => {
          console.log("@@@@transaction API", response.data.data);
          this.setState({ table: response.data.data });
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  }

  render() {
    const { table } = this.state;
    console.log("@@@table data", table);

    const tableData =
      table.length > 0
        ? table.map((t) => {
            console.log("hello", t.agent_id);
            return (
              <>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="order-box">
                    <Link className="delicin">
                      <img src={deleteicon} alt="" className="delimg" />
                    </Link>
                    <ul>
                      <li>
                        Transaction ID : <span>{t.agent_id}</span>
                      </li>
                      <li>
                        Date : <span>{moment(t.createdAt).format("ll")}</span>
                      </li>
                      <li>
                        Amount : <span>{t.amount}</span>
                      </li>
                      <li>
                        Type : <span>{t.type}</span>
                      </li>

                      {/* <li>Service Name : <span>{t.recharge_type}</span></li> */}
                      {/* <li> Recharge : <span>{t.number}</span></li> */}

                      <li>
                        operator : <span>{t.biller_code}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            );
          })
        : null;

    return (
      <Fragment>
        <MetaTags>
          <title>GSD100</title>
          <meta
            name="description"
            content="Blog of flone react minimalist eCommerce template."
          />
        </MetaTags>
        <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
          Home
        </BreadcrumbsItem>
        <BreadcrumbsItem to={process.env.PUBLIC_URL + "/Orderrecharge"}>
          Recharge List
        </BreadcrumbsItem>
        <LayoutOne headerTop="visible">
          {/* breadcrumb */}
          <Breadcrumb />
          <div className="blog-area pt-60 pb-60 blog-no-sidebar">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="mr-20">
                    <div className="row">
                      {/* order */}

                      {tableData}
                      {/* {table.length > 0 ? table.map((t) =>{
                              <>
                                
                                </>
                              }): null}  */}
                      {/* </ul> */}
                      {/* </div> 
                    </div> */}
                      {/* <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                     <div className="order-box">
                            <ul>
                                <li>Transaction ID : <span>323233</span></li>
                                <li>Date : <span>05/02/2022</span></li>
                                <li>Amount : <span>120</span></li>
                                <li>Service Name : <span>mobile recharge</span></li>
                                <li>operator : <span>Airtel</span></li>
                            </ul>
                        </div>
                    </div> */}
                      {/* <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="order-box">
                            <ul>
                                <li>Transaction ID : <span>323233</span></li>
                                <li>Date : <span>05/02/2022</span></li>
                                <li>Amount : <span>120</span></li>
                                <li>Service Name : <span>mobile recharge</span></li>
                                <li>operator : <span>Airtel</span></li>
                            </ul>
                        </div>
                    </div> */}
                      {/* <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                       <div className="order-box">
                            <ul>
                                <li>Transaction ID : <span>323233</span></li>
                                <li>Date : <span>05/02/2022</span></li>
                                <li>Amount : <span>120</span></li>
                                <li>Service Name : <span>mobile recharge</span></li>
                                <li>operator : <span>Airtel</span></li>
                            </ul>
                        </div>
                    </div> */}
                      {/* <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="order-box">
                            <ul>
                                <li>Transaction ID : <span>323233</span></li>
                                <li>Date : <span>05/02/2022</span></li>
                                <li>Amount : <span>120</span></li>
                                <li>Service Name : <span>mobile recharge</span></li>
                                <li>operator : <span>Airtel</span></li>
                            </ul>
                        </div>
                    </div> */}
                    </div>

                    {/* blog pagination */}
                    <BlogPagination />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LayoutOne>
      </Fragment>
    );
  }
}

export default OrderRecharge;
