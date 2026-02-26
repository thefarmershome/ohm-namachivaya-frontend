import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import api from "../../api";
import { addToCart } from "../../store/actions/action";
import PopupQuickview from "../PopupQuickview/PopupQuickview";
import AddProductController from "../../Controller/ProductController";
import CartController from "../../Controller/CartController";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useUser } from "../Context/UserContext";
import SignUpPage from "../../main-component/SignUpPage";
import { USER_UID } from "../../LocalStorage/LocalStorageNames";
import WhishListController from "../../Controller/WhishListCintroller";
import { FaHeart } from "react-icons/fa";
import { useLoader } from "../Context/LoaderContext";
import { Box, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { color } from "framer-motion";
import ImageWithFallback from "../common/ImageWithFallback";
import productsData from "../ProductData/products";
import "./shopPage.css"

const brandsList = [
  "All",
  "Cold Pressed Oil",
  "Rice",
  "Masala",
  "Spices",
  "Snacks",
  "Aval"
 
,
];

const ShopPageSection = ({ addToCart }) => {
  const navigate = useNavigate();
  const user_uid = localStorage.getItem(USER_UID);
  const { isLoggedIn } = useUser();
  // Add loader context
  const { startLoading, stopLoading } = useLoader();
  const [shopeTab, setShopeTab] = useState(0);
  const [filter, setFilter] = useState("*");
  const [category, setCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [wishlistIds, setWishlistIds] = useState([]);
  

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
   const [searchText, setSearchText] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedProductData, setSelectedProductData] = useState(null);
  

  // All checkbox click
const handleAllChange = () => {
  setSelectedBrands([]); // reset → All mode
};

// Brand checkbox click
const handleCheckboxChange = (brand) => {
  if (brand === "All") {
    handleAllChange();
    return;
  }

  setSelectedBrands((prev) => {
    // If currently All mode
    if (prev.length === 0) {
      return [brand];
    }

    return prev.includes(brand)
      ? prev.filter((b) => b !== brand)
      : [...prev, brand];
  });
};


  const filteredBrands = brandsList.filter((brand) =>
    brand.toLowerCase().includes(searchText.toLowerCase())
  );

  const brandsToShow = showAll ? filteredBrands : filteredBrands.slice(0, 5);

  const handleFilterChange = (newFilter) => {
    setCategory(newFilter);
    setFilter(newFilter);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseClick = () => {
    setSelectedProduct(null);
  };

  const fetchProducts = async () => {
    // startLoading();
    try {
      let data = {
          category:category
        }
      const response = await AddProductController.getProductListData(data);
      const parseData = JSON.parse(response);
      let productData = parseData?.data?.items;
      console.log(productData,"productDataproductData")
      if (parseData.status == "SUCCESS") {
        setProducts(productData);
      }
    } finally {
      // stopLoading();
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

    useEffect(() => {
  setProducts(productsData);
}, []);

  const addToCartProduct = async (product, quantity = 1) => {
    if (isLoggedIn) {
      startLoading();
      try {
        const responseData = await CartController.postAddCart({
          product_uid: product.product_uid,
          user_uid: user_uid,
        });
        const parseData = JSON.parse(responseData);
        if (parseData.status == "SUCCESS") {
          toast.success(`${product.name} Added to Cart`);
        }
      } finally {
        stopLoading();
      }
    } else {
      setShowModal(true);
    }
  };

  const fetchSelectedWhishList = async () => {
    startLoading();
    try {
      const response = await WhishListController.getSelectedWhishList(
        user_uid,
        ""
      );

      const parseData = JSON.parse(response);

      console.log(parseData, "productDataWishhh");

      let productData = parseData?.data?.productIds;

      if (parseData.status == "SUCCESS") {
        setWishlistIds(productData);
      }
    } finally {
      stopLoading();
    }
  };

  // useEffect(() => {
  //   fetchSelectedWhishList();
  // }, []);

  const addToWhishListProduct = async (product) => {
    if (isLoggedIn) {
      startLoading();
      try {
        const responseData = await WhishListController.postAddWhishList({
          user_uid: user_uid,
          product_uid: product?.product_uid,
        });
        console.log(responseData, "postWhishlist");
        const parseData = JSON.parse(responseData);
        

        if (parseData.status == "SUCCESS") {
          toast.success(`${product.name} Added to WhishList`);
          // fetchProducts();
          fetchSelectedWhishList();
        }
      } finally {
        stopLoading();
      }
    } else {
      setShowModal(true);
    }
  };

  const deleteSelectedWhishList = async (product) => {
    startLoading();
    try {
      const data = {
        userId: user_uid,
        productId: product?._id,
      };
      const query = `?userId=${data.userId}&productId=${data.productId}`;
      const response = await WhishListController.deleteWhishListList(
        query,
        data
      );

      const parseData = JSON.parse(response);

      console.log(parseData, "productDataWishhh");

      if (parseData.status == "SUCCESS") {
        toast.success(`Wish List Deleted Successfully`);
        // fetchProducts();
        fetchSelectedWhishList();
      }
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="shop-section section-padding orico-product-section section-padding">
      <div className="container product-wrap">
        <div className="row">
           {/* <div className="col-lg-2">
              <Box sx={{p: 2, border: "1px solid #ccc", borderRadius: 1 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        PRODUCTS
      </Typography>

      <TextField
        fullWidth
        size="small"
        placeholder="Search Products"
        variant="outlined"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        sx={{ mb: 2 }}
      />

      {brandsToShow.map((brand) => (
  <Box key={brand}>
    <FormControlLabel
      control={
        <Checkbox
          checked={
            brand === "All"
              ? selectedBrands.length === 0   // 👈 ONLY ALL DEFAULT TICK
              : selectedBrands.includes(brand)
          }
          onChange={() => handleCheckboxChange(brand)}
        />
      }
      label={brand}
    />
  </Box>
))}


     {filteredBrands.length > 5 && (
       <Typography
  component="button"
  variant="body2"
  onClick={() => setShowAll(!showAll)}
  sx={{ mt: 1, display: "block", color: "#8AC224", background: "none", border: "none", cursor: "pointer", p: 0 }}
>
  {showAll ? "Show Less" : "Show More"}
</Typography>
      )}
    </Box>
           </div> */}
          <div className="col-lg-12">
            <div className="shop-section-top-inner">
              <div className="shoping-list">
                <ul className="nav main-tab">
                  <li className="nav-item">
                    <button
                      className={`nav-link ${shopeTab === 0 ? "active" : ""}`}
                      onClick={() => setShopeTab(0)}
                    >
                      <i className="fa fa-th"></i>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${shopeTab === 1 ? "active" : ""}`}
                      onClick={() => setShopeTab(1)}
                    >
                      <i className="fa fa-list"></i>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="shoping-product">
                <span>Showing Products {products.length - 1} Result</span>
              </div>
              <div className="short-by">
                <ul>
                  <li>Short By :</li>
                  <li>
                    <select name="show">
                      <option value="">Show 9 Items</option>
                      <option value="">Show 18 Items</option>
                      <option value="">Show 27 Items</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>

         

            <div className="tab-content">
              {shopeTab === 0 && (
                <div className="row">
                  {products?.length > 0 &&
                    products?.map((product, pitem) => (
                      <div className="col-lg-3 col-md-6 col-12" key={pitem}>
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
              )}
              {shopeTab === 1 && (
                <div className="row product-list">
                  {products?.length > 0 &&
                    products.slice(0, 4).map((product, pitem) => (
                      <div className="col-12" key={pitem}>
                        <div className="orico-product-single">
                          <div className="orico-product-item">
                            <div className="orico-product-img">
                              <div
                                style={{
                                  height: "220px",
                                  borderRadius: "25px",
                                  overflow: "hidden",
                                }}
                              >
                                <ImageWithFallback
                                  src={product?.product_image}
                                  alt={product.name}
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                            </div>
                           
                          </div>
                          <div className="orico-product-text">
                            <h2>
                              <Link
                                onClick={ClickHandler}
                                to={`/our-products-single/${product.slug}`}
                              >
                                {product.name}
                              </Link>
                            </h2>
                            
                            <p>
                              For a food to be classed as organic, at least 95 %
                              of its ingredients must have been produced using
                              organically farmed plants or animals. Organic food
                              farmers and producers must have their products
                              approved by a specific certifying body. This
                              certification body carries out regular inspections
                              on production methods, packaging, and labelling to
                              ensure that producers continue to meet strict
                              industry standards
                            </p>
                            <ul>
                              <li>Benefits of Eating Organic Food.</li>
                              <li>Reduced Risk of Heart Disease.</li>
                              <li>Improved human Immune System.</li>
                              <li>Reduction in Pesticide Consumption.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
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
      </div>
      <PopupQuickview
        product={selectedProduct}
        handleCloseClick={handleCloseClick}
      />
      <SignUpPage open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default connect(null, { addToCart })(ShopPageSection);
