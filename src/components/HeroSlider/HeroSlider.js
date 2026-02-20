import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import hero1 from '../../images/slider/slide-new-1.jpg'
import newHero from "../../images/slider/imageNewOneTwo.jpg"
import hero2 from '../../images/slider/slide-03.jpg'
import Shape from '../../images/slider/shape-1.png'
import Shape2 from '../../images/slider/shape-2.png'
import Shape3 from '../../images/slider/shape-3.png'
import Shape4 from '../../images/slider/shape-4.png'
import Shape5 from '../../images/slider/shape-5.png'

import Shape01 from '../../images/slider/new-slide-01.png'
import HeroIm1 from '../../images/slider/hero-s2.jpg';

import Slide004 from '../../images/slider/land-image-two.jpg';
import Slide005 from '../../images/slider/vam-image-two.jpg';
import bamboo from '../../images/slider/bamboo-image.jpg';
import { Button } from "@mui/material";
import Farmer from '../../images/slider/farmer-one.jpg';
import Seeds from '../../images/slider/seedsVamMu.png';
import VegJuicesBG from '../../images/slider/vagiFrushJuicesBG.png';
import LastSlideBG from '../../images/slider/lastSlideScreenBG.png';

import SheedsDown from '../../images/slider/seeds-down.png'
import SheedsDownTwo from '../../images/slider/seeds-down-two.png'
import VamDownImage from '../../images/slider/vam-down-image.png'
import VamDownImageTwo from '../../images/slider/vam-down-image-two.png'

import JuiceDown from '../../images/slider/juices-image.png'
import VegetablesDown from '../../images/slider/vegi.png'
import FruiteDownImage from '../../images/slider/fruites-Images.png'
import siteConfig from "../../config/siteConfig";
import { motion } from "framer-motion";
import "./heroPremium.css"



const HeroSlider = () => {
    return (
       <section className="hero-section">

  {/* Background */}
  <div
    className="hero-bg"
    style={{
      backgroundImage: `url(${siteConfig.sliderBgImageChange ? newHero : hero1})`
    }}
  />

  <div className="hero-overlay"></div>

  {/* floating shapes */}
  <div className="hero-shape one"></div>
  <div className="hero-shape two"></div>

  <div className="hero-content">

    <motion.div
      className="hero-badge"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      🌿 Healthy Days
    </motion.div>

    <motion.h1
      className="hero-title"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      Pure & Sustainable <br /> Agriculture
    </motion.h1>

    <motion.p
      className="hero-subtext"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      Use code <span style={{color:"#FF4D4D",fontWeight:"bold"}}>25% OFF</span> in stores & online
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <Link to="/shop" className="hero-btn">
        Explore Our Products
      </Link>
    </motion.div>

  </div>
</section>
    );
};

export default HeroSlider;