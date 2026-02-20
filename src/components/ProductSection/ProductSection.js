import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SectionTitle from "../SectionTitle/SectionTitle";
import api from "../../api";
import { addToCart } from "../../store/actions/action";
import PopupQuickview from "../PopupQuickview/PopupQuickview";

import Shape1 from "../../images/product/shape-1.png";
import Shape2 from "../../images/product/shape-2.png";
import AddProductController from "../../Controller/ProductController";
import CartController from "../../Controller/CartController";
import { toast, ToastContainer } from "react-toastify";
import { useUser } from "../Context/UserContext";
import SignUpPage from "../../main-component/SignUpPage";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import { USER_UID } from "../../LocalStorage/LocalStorageNames";
import { useLoader } from "../Context/LoaderContext";
import "react-toastify/dist/ReactToastify.css";
import ToastService from "../../../src/util/validationAlerts/toastService";
import ImageWithFallback from "../common/ImageWithFallback";
import productsData from "../ProductData/products";
import "./products.css"

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const ProductSection = ({ addToCart }) => {
   const { isLoggedIn} = useUser();
   // Add loader context
   const { startLoading, stopLoading, showLottieLoader, hideLottieLoader } = useLoader();
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [category, setCategory] = useState("All");
   const userUid = localStorage.getItem(USER_UID);
  const [ loaderOpen, setLoaderOpen ] = useState(false);
  const userLoginUid = localStorage.getItem("loginUserUid");
  const [showPopup, setShowPopup] = useState(false);
    const [selectedProductData, setSelectedProductData] = useState(null);
  

  const handleLoaderOpen = () =>{
    setLoaderOpen(true);
  }

  const handleLoaderClose = () =>{
    setLoaderOpen(false);
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseClick = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      startLoading();
      try {
        let data = {
          category:""
        }
        const response = await AddProductController.getProductListData(data);
         console.log(response,"response")

        const parseData = JSON.parse(response);
        console.log(parseData,"response")
        

        let productData = parseData?.data?.items;

        console.log(productData, "productData");

        if (parseData.status == "SUCCESS") {
          setProducts(productData);
        }
        stopLoading();
      }catch(err){
        stopLoading();
          console.log(err)
      }finally {
        stopLoading();
      }
      // const productsArray = await api();
      // setProducts(productsArray);
    };
    fetchProducts();
  }, [category]);

//   useEffect(() => {
//   setProducts(productsData);
// }, []);

  const handleFilterChange = (newFilter) => {
    setCategory(newFilter);
    setFilter(newFilter);
  };

  const filteredProducts = (products || [])?.filter(
    (product) =>
      filter === "All" ||
      (product?.category?.name && product?.category?.name?.includes(filter.slice(1)))
  );

  console.log(filteredProducts,"filteredProducts")

    const addToCartProduct = async (product, userLoginUid, quantity = 1) => {
      if (isLoggedIn) {
        showLottieLoader();

        // Let React re-render *before* proceeding
        setTimeout(async () => {
          try {
            const responseData = await CartController.postAddCart({
              product_uid: product.product_uid,
              user_uid: userLoginUid
            });

            const parseData = JSON.parse(responseData);
            console.log(parseData);

            if (parseData.status === 'SUCCESS') {
              ToastService.successmsg(`${product.name} Added to Cart`);
            } else {
              ToastService.errormsg("Failed to add product to cart");
            }
          } catch (error) {
            console.error("Error adding to cart:", error);
            ToastService.errormsg("Something went wrong");
          } finally {
            hideLottieLoader();
          }
        }, 2000); // delay by 0ms to give React render time
      } else {
        setShowModal(true);
      }
    };


  return (
    <section className="orico-product-section section-padding">
      <div className="p-shape-1">
        {/* <img src={Shape1} alt="" /> */}
      </div>
      <div className="p-shape-2">
        <img src={Shape2} alt="" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <SectionTitle subtitle={"BEST PRODUCT"} title={"Latest Products"}/>
          </div>
        </div>
        <div className="product-wrap">
          <div className="row">
            <div className="col col-xs-12 sortable-gallery">
              <div className="gallery-filters">
                <ul className="product-filter-btn">
                  <li>
                    <button
                      className={`product-btn ${
                        filter === "" || filter === "All" ? "current" : ""
                      }`}
                      onClick={() => handleFilterChange("All")}
                    >
                      All
                    </button>
                  </li>
                                   <li>
                    <button
                      className={`product-btn ${
                        filter === "cold pressed oil" ? "current" : ""
                      }`}
                      onClick={() => handleFilterChange("cold pressed oil")}
                    >
                     Cold Pressed Oil
                    </button>
                  </li>
                  <li>
                    <button
                      className={`product-btn ${
                        filter === "Rice" ? "current" : ""
                      }`}
                      onClick={() => handleFilterChange("Rice")}
                    >
                     Rice
                    </button>
                  </li>
                  <li>
                          <button
                            className={`product-btn ${
                              filter === "Masala" ? "current" : ""
                            }`}
                            onClick={() => handleFilterChange("Masala")}
                          >
                            Masala
                          </button>
                        </li>
                         <li>
                          <button
                            className={`product-btn ${
                              filter === "Spices" ? "current" : ""
                            }`}
                            onClick={() => handleFilterChange("Spices")}
                          >
                            Spices
                          </button>
                        </li>
                        <li>
                          <button
                            className={`product-btn ${
                              filter === "Snacks" ? "current" : ""
                            }`}
                            onClick={() => handleFilterChange("Snacks")}
                          >
                            Snacks
                          </button>
                        </li>
                        <li>
                          <button
                            className={`product-btn ${
                              filter === "Aval" ? "current" : ""
                            }`}
                            onClick={() => handleFilterChange("Aval")}
                          >
                            Aval
                          </button>
                        </li>
                        
                </ul>
              </div>
              <div className="gallery-container gallery-fancybox masonry-gallery row">
                {filteredProducts.length > 0 &&
                  filteredProducts.slice(0, 8).map((product, index) => (
                   <div className="col-lg-3 col-md-6 col-12" key={index}>
                      <div className="pro-card">
  <div className="pro-img-wrap">
    <ImageWithFallback
      src={product?.product_image[0]}
      alt={product.name}
      className="pro-img"
    />

    <div className="pro-overlay">
      <button
  className="pro-btn"
  onClick={() => {
    setSelectedProductData(product);
    setShowPopup(true);
  }}
>
  View
</button>
    </div>
  </div>

  <div className="pro-info">
    <h3>{product.name}</h3>
  </div>
</div>
                      </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
  <div className="popup-overlay" onClick={() => setShowPopup(false)}>
    <div
      className="popup-box"
      onClick={(e) => e.stopPropagation()}
    >
      <span className="popup-close" onClick={() => setShowPopup(false)}>
        ✕
      </span>

      <h2>{selectedProduct?.name}</h2>

      <p className="popup-message">
        If you want to buy the product please contact
      </p>

      <a href="tel:90808978978" className="popup-phone">
        📞 90808978978
      </a>
    </div>
  </div>
)}
      <PopupQuickview
        product={selectedProduct}
        handleCloseClick={handleCloseClick}
      />



       <SignUpPage open={showModal} onClose={() => setShowModal(false)} />
        <Box display={"flex"} justifyContent={"center"}>
        <ToastContainer style={{ width: "auto" }} />
      </Box>
    </section>
  );

};



export default connect(null, { addToCart })(ProductSection);
