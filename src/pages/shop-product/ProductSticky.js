import React, { Fragment, Component } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
//import { connect } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import "../../assets/css/productdetail.css";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescriptionSticky from "../../wrappers/product/ProductImageDescriptionSticky";
import Axios from "axios";
import businessbg from "../../assets/img/business-img.jpg";
import { Container, Row } from "reactstrap";

export class ProductSticky extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: {},
      pid: "",
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    Axios.get(`http://44.205.32.29:8000/admin/getoneproduct/${id}`)
      .then((response) => {
        this.setState({
          detail: response.data.data,
          pid: response.data.data._id,
        });
      })
      .catch((error) => {});
  }

  render() {
    return (
      <LayoutOne headerTop="visible">
        <Container fluid className="mb-4">
          <Row className="mb-5">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: `url(${businessbg})`,
                width: "100%",
                padding: "100px 0px",
                backgroundSize: "cover",
              }}
            >
              <div className="text-center">
                <h1 className="text-light text-center">PRODUCT DETAIL </h1>
                {/* <p style={{ color: "white" }}>
                  INVEST IN YOUR BUSINESS. MAGNIFY YOUR RESULTS.
                </p> */}
              </div>
            </div>
          </Row>
        </Container>

        {/* product description with image */}
        <ProductImageDescriptionSticky
          spaceTopclass="mt-100"
          spaceBottomclass="mb-100"
          productImage={JSON.stringify(this.state.detail)}
        />

        {/* product description tab */}
        <ProductDescriptionTab
          spaceBottomclass="pb-90"
          productFullDesc={JSON.stringify(this.state.detail)}
          productid={this.state.pid}
        />
      </LayoutOne>
    );
  }
}

export default ProductSticky;
