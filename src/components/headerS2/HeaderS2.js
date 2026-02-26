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
            <div className="row">
              <div className="col-lg-3 col-md-6 col-6 text-start">
                <div className="navbar-header d-inline-block">
                  <Link
                    onClick={ClickHandler}
                    className="navbar-brand"
                    to="/home"
                  >
                    <img src={siteConfig.logoChange ? logoTwo : logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9 col-md-1 col-1 d-none d-lg-block text-lg-end">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder justify-content-lg-end"
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0 justify-content-lg-end">
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/#">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/aboutUS">
                        About
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="#">
                        Our Products
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/our-products">
                            Our Products
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/contact">
                        Contact
                      </Link>
                    </li>
                    {siteConfig.isLoginEnabled && (
                      <li className="d-flex align-items-center">
                        {!isLoggedIn ? (
                          <img
                            src={ProfileImage}
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
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="col-4 text-end d-lg-none d-block">
                <div className="header-right">
                  <div className="w-100 text-center">
                    <div className="mobile-menu-btn mt-0 mt-sm-4">
                      <MobileMenu />
                    </div>
                  </div>
                </div>
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
