import React, { useState } from "react";
import { Link } from "react-router-dom";
import FtShape1 from "../../images/ft-shape-1.png";
import FtShape2 from "../../images/ft-shape-2.png";
import Btnicon from "../../images/pointer.svg";
import "./footer.css"

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Footer = (props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError("");
      console.log("Newsletter email:", email);
    } else {
      setError("Please enter a valid email address.");
    }
  };

  return (
    <footer className="modern-footer">
  <div className="footer-container">

    <div className="footer-col brand">
      <h2>Om Namahsivaya Internationals</h2>
      <p>
        Premium organic fertilisers manufacturer and global exporter from Coimbatore, India. Rooted in Indian soil. Trusted by global farms.
      </p>

      <div className="socials">
        <a href="#"><i className="ti-facebook"></i></a>
        <a href="#"><i className="ti-twitter"></i></a>
        <a href="#"><i className="ti-linkedin"></i></a>
      </div>
    </div>

    <div className="footer-col">
      <h4>Quick Links</h4>
      <a href="/aboutUS">About</a>
      <a href="/our-products">Products</a>
      <a href="/contact">Contact</a>
    </div>

    <div className="footer-col">
      <h4>Contact</h4>
      <p>📍 Coimbatore, India</p>
      <p>📞 +91 96777 03476</p>
      <p>✉ info@namachivaya.com</p>
    </div>

    <div className="footer-col">
      <h4>Newsletter</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
        <button>Subscribe</button>
      </form>
    </div>

  </div>

  <div className="footer-bottom">
    © {new Date().getFullYear()} Om Namahsivaya Internationals
  </div>
</footer>
  );
};

export default Footer;
