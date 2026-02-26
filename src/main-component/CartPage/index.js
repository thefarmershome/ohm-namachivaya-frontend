import React, { Fragment, useEffect, useState } from "react";
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { totalPrice, priceConversion } from "../../utils";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../store/actions/action";
import Footer from "../../components/footer/Footer";
import Logo from "../../images/logo.svg";
import CartController from "../../Controller/CartController";
import ToastService from "../../util/validationAlerts/toastService";
import { USER_UID } from "../../LocalStorage/LocalStorageNames";
import ImageWithFallback from "../../components/common/ImageWithFallback";

const CartPage = (props) => {
  const userUID = localStorage.getItem(USER_UID);
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const { carts } = props;
  const userLoginUid = localStorage.getItem("loginUserUid") || "";
  const [cart, setCart] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [count, setCount] = useState(1);

  const getCartData = async (userLoginUid) => {
    const responseData = await CartController.getCartListData(userLoginUid);

    const parseData = JSON.parse(responseData);
    console.log(parseData, "catItem");

    if (parseData.status == "SUCCESS") {
      setCart(parseData.data.data || []);
    }
  };

  useEffect(() => {
    if (userLoginUid.length > 0) {
      getCartData(userLoginUid);
    }
  }, [userLoginUid, count]);

  const handleDelete = async (cartUid) => {
    try {
      let uid = cartUid;
      console.log(uid, "productUidDelete");
      let data = {
        is_active: true,
        is_deleted: false,
      };
      const res = await CartController.deleteCartList(uid, data);
      const jsonData = JSON.parse(res);
      console.log(jsonData, "jsonData");
      if (jsonData.status === "SUCCESS") {
        const datas = jsonData?.data;
        if (datas && datas.type === "success") {
          ToastService.successmsg(datas.message);
          setCount(count + 1);
          // getTheProductDataList();
          // setTimeout(() => {
          //   navigate("/products");
          // }, 3700);
        } else if (datas.type === "error") {
          console.error("Failed to delete cart", jsonData);
          ToastService.errormsg(
            jsonData?.error?.message || "Failed to delete cart"
          );
        }
      } else if (jsonData.status === "FAILED") {
        console.error("Failed to delete cart", jsonData);
        ToastService.errormsg(
          jsonData?.error?.message || "Failed to delete cart"
        );
      }
    } catch (error) {
      console.error("Error deleting cart", error);
      ToastService.errormsg("Error deleting cart");
    }
  };

  useEffect(() => {
    if (cart && cart.length > 0) {
      const productDetails = cart.map((val, index) => {
        return val.product;
      });

      setProductDetails(productDetails);
    }
  }, [cart]);
  console.log(productDetails, "productDetailsproductDetails");

  let grandTotal = 0;
  let gstTotalAmount = 0;
  let ecoAmount = 0;

  cart.forEach((item) => {
    const price = Number(item.product.price) || 0;
    const gstRate = Number(item.product.gst_rate) || 0;
    const ecoTax = Number(item.product.eco_tax) || 0;
    const quantity = Number(item.quantity) || 0;

    const baseTotal = price * quantity;
    const gstAmount = (gstRate / 100) * baseTotal;
    const ecoTaxTotal = ecoTax * quantity;

    const finalAmount = baseTotal + gstAmount + ecoTaxTotal;

    gstTotalAmount += gstAmount;
    ecoAmount += ecoTaxTotal;
    grandTotal += finalAmount;
  });

  return (
    <Fragment>
      {/* <HeaderTop /> */}
      <NavbarS2 hclass={'wpo-header-style-2'} Logo={Logo} />
      <PageTitle pageTitle={"Cart"} pagesub={"Cart"} />
      <div className="cart-area section-padding">
        <div className="container">
          <div className="form">
            <div className="cart-wrapper">
              <div className="row">
                <div className="col-12">
                  <form action="cart">
                    <table className="table-responsive cart-wrap">
                      <thead>
                        <tr>
                          <th className="images images-b">Image</th>
                          <th className="product-2">Product Name</th>
                          <th className="pr">Quantity</th>
                          <th className="ptice">Price</th>
                          <th className="stock">Total Price</th>
                          <th className="remove remove-b">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart &&
                          cart.length > 0 &&
                          cart.map((catItem, crt) => (
                            <tr key={crt}>
                              <td className="images">
                                <ImageWithFallback
                                  src={catItem?.product?.product_image?.url}
                                  alt={catItem?.product?.name}
                                />
                              </td>
                              <td className="product">
                                <ul>
                                  <li className="first-cart">
                                    {catItem?.product?.name}
                                  </li>
                                  <li>
                                    Category : {catItem?.product?.category}
                                  </li>
                                  {/* <li>Size : {catItem?.product?.size}</li> */}
                                </ul>
                              </td>
                              <td className="stock">
                                <div className="pro-single-btn">
                                  <Grid className="quantity cart-plus-minus">
                                    <span
                                      className="dec qtybutton"
                                      onClick={() => {
                                        props.decrementQuantity(
                                          catItem?.cart_uid,
                                          catItem?.quantity
                                        );
                                        setCount(count + 1);
                                      }}
                                    >
                                      -
                                    </span>
                                    <input
                                      value={catItem?.quantity}
                                      type="text"
                                    />
                                    <span
                                      className="inc qtybutton"
                                      onClick={() => {
                                        props.incrementQuantity(
                                          catItem?.cart_uid,
                                          catItem?.quantity
                                        );
                                        setCount(count + 1);
                                      }}
                                    >
                                      +
                                    </span>
                                  </Grid>
                                </div>
                              </td>
                              <td className="price">
                                ₹{catItem?.quantity * catItem?.product?.price}
                              </td>
                              <td className="stock">
                                ₹{catItem?.quantity * catItem?.product?.price}
                              </td>
                              <td className="action">
                                <ul>
                                  <li
                                    className="w-btn"
                                    onClick={
                                      () => handleDelete(catItem?.cart_uid)
                                      // props.removeFromCart(catItem?.cart_uid)
                                    }
                                  >
                                    <i className="fi ti-trash"></i>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </form>
                  <div className="submit-btn-area">
                    <ul>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          className="theme-btn"
                          to="/our-products"
                        >
                          Continue Shopping{" "}
                        </Link>
                      </li>
                      {/* <li>
                        <button type="submit" className="theme-btn">Update Cart</button>
                      </li> */}
                    </ul>
                  </div>
                  <div className="cart-product-list">
                    <ul>
                      <li>
                        Total product<span>( {cart.length} )</span>
                      </li>
                      <li>
                        Sub Price<span>{totalPrice(cart)}</span>
                      </li>
                      <li>
                        Gst<span>₹{gstTotalAmount}</span>
                      </li>
                      <li>
                        Eco Tax<span>₹{ecoAmount}</span>
                      </li>
                      <li>
                        Delivery Charge<span>₹0</span>
                      </li>
                      <li className="cart-b">
                        Total Price<span>{priceConversion(grandTotal)}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="submit-btn-area">
                    <ul>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          className="theme-btn"
                          to="/checkout"
                          state={{
                            cartItem: cart,
                            amount: {
                              totalBillAmount: grandTotal,
                              productCount: cart.length,
                              subTotal: totalPrice(cart),
                              currency: "INR",
                            },
                          }}
                        >
                          Proceed to Checkout{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};
export default connect(mapStateToProps, {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
})(CartPage);
