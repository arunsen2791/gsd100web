import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../../helpers/product";
import axiosConfig from "../../../axiosConfig";

const MenuCart = ({ cartData, currency, deleteFromCart }) => {
  let cartTotalPrice = 0;
  const { addToast } = useToasts();
  const [carts, setCarts] = useState([]);
  const [ttl, setTotal] = useState([]);
  const { id } = useParams();

  const removeItemfromcart = async (id) => {
    console.log(id);

    try {
      const response = await axiosConfig.get(
        `/admin/remove_cart/${id}`,
        {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        }
      );
      if (response) {
        console.log(response);
        fetchcarts();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchcarts = async (token) => {
    const { data } = await axiosConfig.get(
      `/admin/cartbycustomer`,
      {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    );
    const carts = data.data;
    console.log(carts);
    // const sum = carts?.single?.gsttotal;

    // setTotal(sum);
    // console.log(sum);

    setCarts(carts);
    console.log(carts);
  };
  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      fetchcarts();
    }
    //fetchcarts();
  }, []);
  return (
    <div className="shopping-cart-content">
      {carts && carts?.length > 0 ? (
        <Fragment>
          <ul style={{ height: 150 }}>
            {carts.map((single, key) => {
              const discountedPrice = getDiscountPrice(
                single.product_price,
                single.discount
              );
              const finalProductPrice = (
                single.product_price * currency.currencyRate
              ).toFixed(2);
              const finalDiscountedPrice = (
                discountedPrice * currency.currencyRate
              ).toFixed(2);

              discountedPrice != null
                ? (cartTotalPrice += parseInt(single.product_price))
                : (cartTotalPrice += parseInt(single.product_price));

              return (
                <li className="single-shopping-cart" key={key}>
                  <div className="shopping-cart-img">
                    <Link
                      to={`${process.env.PUBLIC_URL}/product-sticky/${single.product?._id}`}
                    >
                      <img
                        alt=""
                        src={
                          process.env.PUBLIC_URL +
                          single.product?.product_img[0]
                        }
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="shopping-cart-title">
                    <h4>
                      <Link
                        to={
                          process.env.PUBLIC_URL +
                          "/product-sticky/" +
                          single.product?._id
                        }
                      >
                        {" "}
                        {single.product?.product_name}
                      </Link>
                    </h4>
                    <h6>Qty: {single.product_qty}</h6>
                    <h6>Color: {single.color}</h6>
                    <h6>Size: {single.size}</h6>
                    <h6>Price: {single.product_price}</h6>
                    <span></span>
                  </div>
                  <div className="shopping-cart-delete">
                    <button
                      onClick={() => removeItemfromcart(single.product?._id)}
                    >
                      <i className="fa fa-times-circle" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="shopping-cart-total">
            <h4>
              Total :<span className="shop-total">₹ {cartTotalPrice}</span>
            </h4>
          </div>
          <div className="shopping-cart-btn btn-hover text-center">
            <Link className="default-btn" to={process.env.PUBLIC_URL + "/cart"}>
              view cart
            </Link>
            {/* <Link
              className="default-btn"
              to={process.env.PUBLIC_URL + "/checkout"}
            >
              checkout
            </Link> */}
          </div>
        </Fragment>
      ) : (
        <p className="text-center">No items added to cart</p>
      )}
    </div>
  );
};

MenuCart.propTypes = {
  cartData: PropTypes.array,
  currency: PropTypes.object,
  deleteFromCart: PropTypes.func,
};

export default MenuCart;
