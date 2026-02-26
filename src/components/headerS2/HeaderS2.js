import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import CartController from "../../Controller/CartController";
import { toast } from "react-toastify";
import ProfileImage from "../../images/icon/UserProfile.png";
import SignUpModal from '../../main-component/SignUpPage';
import logo from '../../images/Logo/FarmersHomeLogo.svg'
import logoTwo from '../../images/Logo/Ohm_namachiva.png'
import { useUser } from "../Context/UserContext";
import { USER_NAME, USER_UID } from "../../LocalStorage/LocalStorageNames";
import ImageWithFallback from "../common/ImageWithFallback";
import siteConfig from "../../config/siteConfig";

const HeaderS2 = (props) => {
   const { isLoggedIn } = useUser();

  const [showModal, setShowModal] = useState(false);

  const [menuActive, setMenuState] = useState(false);
  const [cartActive, setcartState] = useState(false);
  const user_uid = localStorage.getItem(USER_UID);

  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem(USER_NAME);
    if (storedUsername) {
      setUserName(storedUsername);
    }
  }, []);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [carts, setCarts] = useState([]);

  const getCartData = async () => {
    const responseData = await CartController.getCartListData(user_uid);

    const parseData = JSON.parse(responseData);
    console.log(parseData, "parseData");

    if (parseData.status == "SUCCESS") {
      setCarts(parseData.data.data);
    }
  };

  useEffect(() => {
    getCartData();
  }, []);
  return (
    <header id="header" className={"" + props.hclass}>
      <div className="wpo-site-header">
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-1 col-md-3 col-3 d-lg-none dl-block">
                <MobileMenu />
              </div>
              <div className="col-lg-3 col-md-6 col-6 dl-block">
                <div className="navbar-header">
                  <Link
                    onClick={ClickHandler}
                    className="navbar-brand"
                    to="/home"
                  >
                    <img src={siteConfig.logoChange ? logoTwo : logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/#">
                        Home
                      </Link>
                     
                    </li>
                    {/* <li>
                      <Link onClick={ClickHandler} to="/aboutUS">
                        About
                      </Link>
                    </li> */}
                    
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="#">
                        Shop
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/shop">
                            Shop
                          </Link>
                        </li>
                       
                      </ul>
                    </li>
                    
                    <li>
                      <Link onClick={ClickHandler} to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-2 col-2">
              {siteConfig?.loginProfileHeader &&  <div className="header-right">
                  {!isLoggedIn ? (
                                      <img
                                        src={ProfileImage}
                                        // onClick={() => setShowModal(true)}
                                        style={{ width: "65px", height: "50px" }}
                                        alt="profileImage"
                                      />
                                    ) : (
                                      <Link to="/profilePage">
                                        <img
                                          src={ProfileImage}
                                          style={{ width: "65px", height: "50px" }}
                                          alt="profileImage"
                                        />
                                      </Link>
                                    )}
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        marginRight: "10px",
                                      }}
                                    >
                                      <p style={{ marginTop: "12px" }}>
                                        {!isLoggedIn ? "Login" : `${userName}`}
                                      </p>
                                    </div>
                  
                 {siteConfig.isCartEnabled && <div className="mini-cart">
                     <button
                      className="cart-toggle-btn"
                      onClick={() => setcartState(!cartActive)}
                    >
                      {" "}
                      <i className="flaticon-shopping-cart"></i>
                      <span className="cart-count">{carts.length}</span>
                    </button>
                    <div
                      className={`mini-cart-content ${
                        cartActive ? "mini-cart-content-toggle" : ""
                      }`}
                    >
                      <button
                        className="mini-cart-close"
                        onClick={() => setcartState(!cartActive)}
                      >
                        <i className="ti-close"></i>
                      </button>
                      <div className="mini-cart-items">
                        {carts &&
                          carts.length > 0 &&
                          carts.map((catItem, crt) => (
                            <div className="mini-cart-item clearfix" key={crt}>
                              <div className="mini-cart-item-image">
                                <span>
                                  <ImageWithFallback
                                    src={catItem?.product?.product_image?.url}
                                    alt={catItem?.product?.name}
                                  />
                                </span>
                              </div>
                              <div className="mini-cart-item-des">
                                <p>{catItem.product.name} </p>
                                <span className="mini-cart-item-price">
                                 ₹{catItem.product.price} x {catItem.quantity}
                                </span>
                                <span className="mini-cart-item-quantity">
                                  <button
                                    onClick={() =>
                                      props.removeFromCart(catItem.id)
                                    }
                                    className="btn btn-sm btn-danger"
                                  >
                                    <i className="ti-close"></i>
                                  </button>{" "}
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                      <div className="mini-cart-action clearfix">
                        <span className="mini-checkout-price">
                          Subtotal: <span> {totalPrice(carts)}</span>
                        </span>
                        <div className="mini-btn">
                          <Link to="/checkout" state={{ cartItem: carts, amount: { totalBillAmount: carts, productCount: carts.length, subTotal: totalPrice(carts), currency: "INR" } }} className="view-cart-btn">
                            Checkout
                          </Link>
                          <Link to="/cart" className="view-cart-btn">
                            View Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div> }
                 
                </div>}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <SignUpModal open={showModal} onClose={() => setShowModal(false)} />
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};

export default connect(mapStateToProps, { removeFromCart })(HeaderS2);
