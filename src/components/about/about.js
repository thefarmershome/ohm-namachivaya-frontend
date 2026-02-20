import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

// images
import Abd1 from "../../images/about/1.png";
import LeftImageabt from "../../images/slider/backgroundImageOld.jpg"
import Abd4 from "../../images/about/3.png";
import sine from "../../images/about/image1-h4.jpg";
import LeefImg from "../../images/slider/leefOne.png";
import LeefImgTwo from "../../images/slider/leefTwo.png";
import siteConfig from "../../config/siteConfig";
import "./aboutPremium.css"

const about = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="about-premium">

  {/* floating leaves */}
  <Box component="img" src={LeefImgTwo} className="floating-leaf"
       sx={{ top: 40, left: 40, width: 70 }} />

  <Box component="img" src={LeefImg} className="floating-leaf"
       sx={{ bottom: 20, right: 50, width: 90 }} />

  <div className="about-shape-bg"></div>

  <div className="container">
    <div className="row align-items-center">

      {/* IMAGE */}
      <div className="col-lg-5">
        <div className="about-img-wrap">
          <img src={siteConfig.leftSideImageChange ? LeftImageabt : sine} alt="about" />
        </div>
      </div>

      {/* TEXT */}
      <div className="col-lg-7">
        <div className="about-text">

          <div className="about-badge fade-up">
            ABOUT NAMACHIVAYA
          </div>

          <h2 className="about-title fade-up">
            Natural Solutions for <br/> Sustainable Agriculture
          </h2>

          <p className="fade-up">
            Namachivaya promotes sustainable and eco-friendly farming practices
            through natural agricultural inputs that improve soil health and plant growth.
          </p>

          <p className="fade-up">
            Our products include organic fertilizers, cocopeat, cow dung manure,
            VAM and mycorrhiza to enhance crop productivity naturally.
          </p>

          <p className="fade-up">
            We believe healthy soil is the foundation of sustainable agriculture.
            Our mission is to support farmers worldwide with reliable natural solutions.
          </p>

          <p className="about-signature fade-up">Namachivaya</p>
          <p className="about-sub-signature fade-up">
            Natural Agriculture Solutions
          </p>

          <Link to="/contact" className="theme-btn-s2 fade-up">
            Get In Touch
          </Link>

        </div>
      </div>

    </div>
  </div>
</section>
  );
};

export default about;
