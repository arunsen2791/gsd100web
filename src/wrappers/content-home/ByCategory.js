import React from "react";
import axios from "axios";
// import Carousel from "react-elastic-carousel";
import { Container, Col, Row, Button, Jumbotron } from "reactstrap";
import "../../assets/css/productcard.css";
import men from "../../assets/img/team/men.jpg";
import women from "../../assets/img/women.jpg";
import kid from "../../assets/img/kid.jpg";
import { Link } from "react-router-dom";
import axiosConfig from "../../axiosConfig";
import shirt from "../../assets/img/shirt-1.png";
import cap from "../../assets/img/Front.jpg";


class ByCategory extends React.Component {
  state = {
    ByCategoryList: [],
  };
  componentDidMount() {
    axiosConfig.get(`/admin/getproductCategory/`).then((res) => {
      console.log(res);
      this.setState({ ByCategoryList: res.data.data });
    });
  }
  // const [users, setUsers] = useState([]);
  // const getUsers = async()=>{
  // const res= await axios.get(`http://35.154.134.118/api/admin/productbycategory/618a05e27e718858ba3de153`).then((data)=>{
  //   console.log(data)
  //   console.log(data.data.data)
  //   setUsers(data.data.data)

  // }).catch((error)=>{
  //   console.log(error)
  // });
  // console.log(res);
  //setUsers(await res.json());
  // console.log(data);
  // }
  // useEffect(() => {
  //    getUsers();
  // },[]);

  render() {
    const ByCategoryListData = this.state.ByCategoryList?.map((data) => {
      return (
        <div>
          <Col lg="4">
            <Link to={`/shop-list-standard/${data.data?._id}`}>
              {/* <img
                src={data?.product_img}
                alt="store"
                height="320vh"
                width="250px"
              /> */}
              <img src={shirt} alt="" />
            </Link>
          </Col>
          <Col lg="4"></Col>
        </div>
      );
    });

    return (
      <Container className="main mb-2">
        <Jumbotron className="mb-5">
          <Row className="m-2">
            <Col lg="12">
              <h1 style={{ fontWeight: "bold" }}>Browse By Category</h1>
              <span className="ex-btn">
                <Button
                  color=""
                  className="btn-expand"
                  onClick={(event) => {
                    window.location.href = "/shop-grid-two-column";
                    console.log("ok");
                  }}
                >
                  Explore All
                </Button>
              </span>
            </Col>
          </Row>
        </Jumbotron>
        <Jumbotron className="d-flex align-items-center justify-content-center">
          {/* {ByCategoryListData} */}
          <Row>
            <Col lg="4">
              <Link to="/shop-grid-men-column">
                <img src={shirt} alt="img" height="300vh" width="100%" />
              </Link>
            </Col>
            <Col lg="4">
              <Link to="/shop-grid-women-column">
                <img src={cap} alt="img" height="300vh" width="100%" />
              </Link>
            </Col>
            <Col lg="4">
              <Link to="/shop-grid-kids-column">
                <img src={shirt} alt="img" height="300vh" width="100%" />
              </Link>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}
export default ByCategory;
