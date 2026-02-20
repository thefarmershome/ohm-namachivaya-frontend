import React from 'react'
import { Link } from 'react-router-dom'
import defaultImage from "../../images/about/breadcrumb_bkg.jpg"
import { motion } from "framer-motion";
import "./pageTitle.css"
const PageTitle = (props) => {
    return (
        <div
      className="hero-banner"
      style={{
        backgroundImage: `url(${props.backgroundImage || defaultImage})`
      }}
    >
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <motion.h2
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {props.pageTitle}
        </motion.h2>

        <motion.div
          className="breadcrumb-box"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link to="/home">Home</Link>
          <span></span>
          <span>{props.pagesub}</span>
        </motion.div>
      </div>
    </div>
    )
}

export default PageTitle;

