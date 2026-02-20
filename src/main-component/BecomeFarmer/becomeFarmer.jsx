import React from 'react';
import '../../css/becomeFarmers.css';
import farmerImage from "../../images/about/becomeFarmers.jpg"
import { Card } from '@mui/material';
import "./farmersText.css"
const BecomeFarmer = () => {
    const letters = 'Become a Farmer'.split('');
  return (
    <>
   
     <div
      className="become-farmer-page"
      style={{ backgroundImage: `url(${farmerImage})` }}
    >
      <div className="overlay" />

      <div className="content-box">
        
         <div className="waviy">
        {letters.map((char, index) => (
          <span key={index} style={{ '--i': index + 1 }}>
            {char}
          </span>
        ))}
      </div>
        <p className="subheading">Contact Me</p>

        <hr />

        <p className="tamil-heading">அல்லது நீங்கள் ஒரு விவசாயி ஆக வேண்டுமா?</p>
        <p className="tamil-subtext">எங்களை தொடர்பு கொள்ளுங்கள்</p>

        <a
          href="mailto:contact@farmershome.com"
          className="contact-button"
        >
          Contact Us
        </a>
      </div>
    </div>
    </>
  );
};

export default BecomeFarmer;
