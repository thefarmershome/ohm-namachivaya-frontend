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
            ABOUT OM NAMAHSIVAYA INTERNATIONALS
          </div>

          <h2 className="about-title fade-up">
            Nourishing the Earth, <br/> Naturally
          </h2>

          <p className="fade-up">
            Om Namahsivaya Internationals is a Coimbatore-based manufacturer
            and global exporter of premium organic fertilisers. We are committed
            to delivering chemical-free agricultural solutions backed by science
            and rooted in Indian farming tradition.
          </p>

          <p className="fade-up">
            Our flagship range — Cow Dung Fertiliser, VAM Mycorrhiza, Enriched
            Cow Dung Powder with VAM, Natural Pest Control, Organic Growth
            Booster, and Coco Blocks — is designed to restore soil vitality,
            enhance crop yield, and support sustainable agriculture worldwide.
          </p>

          <p className="fade-up">
            Every product is lab-tested for quality, packaged in eco-friendly
            materials, and export-ready for international markets. From soil
            enrichment to pest management, we provide end-to-end organic
            solutions that farmers trust.
          </p>

          <p className="about-signature fade-up">Om Namahsivaya Internationals</p>
          <p className="about-sub-signature fade-up">
            Premium Organic Fertilisers & Global Export
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
