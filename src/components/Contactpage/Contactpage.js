import React, { useState } from 'react';
import ContactForm from '../ContactFrom/ContactForm'
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
// import { MapPin, Phone, Mail } from "lucide-react";
import staberryImage from "../../images/Contect/leftside.png"
import LeefImg from "../../images/slider/leefOne.png";
import LeefImgTwo from "../../images/slider/leefTwo.png";
import "./contactPremium.css"

const Contactpage = () => {
  // ✅ state for success message
  const [submitted, setSubmitted] = useState(false);

  // ✅ animation variant
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };
  

  return (
    
    <Box className="animated-bg" sx={{ minHeight: "100vh", position: "relative" }}>

      {/* floating shapes */}
      <div className="shape one"></div>
      <div className="shape two"></div>

      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={6} alignItems="center">

          {/* LEFT SIDE */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <Box
                component="img"
                src={LeefImgTwo}
                className="floating-leaf"
                sx={{
                  position: "absolute",
                  width: 90,
                  top: 420,
                  left: 60,
                  display: { xs: "none", md: "block" }
                }}
              />

              <Box
                component="img"
                src={staberryImage}
                alt="fresh fruits"
                className="zoom-img"
                sx={{ width: "100%" }}
              />
            </motion.div>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid item xs={12} md={6}>
            <motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>

  <Typography
    variant="h5"
    fontWeight="bold"
    color="#0f6a45"
    className="glow-title fade-item"
  >
    We Love to Hear From You
  </Typography>

  <Typography className="fade-item" color="text.secondary" mt={2} mb={4}>
    Om Namahsivaya Internationals connects organic farmers with global markets.
    Premium organic fertilisers, scientifically tested and export-ready.
    Contact us by leaving a message below.
  </Typography>

  {/* STORE DETAILS */}
  <Box className="fade-item" mb={4}>
    <Typography fontWeight="bold" color="#0f6a45">OUR STORE</Typography>
    <Typography>16, STV Nagar, Avinashi Road</Typography>
    <Typography>Peelamedu, Coimbatore – 641004</Typography>

    <Box mt={2}>
      <Typography fontWeight="bold" color="#0f6a45">CONTACT</Typography>
      <Typography>+91 93444 59699</Typography>
      <Typography>contact@thefarmershome.in</Typography>
    </Box>

    <Box mt={2}>
      <Typography fontWeight="bold" color="#0f6a45">BUSINESS HOURS</Typography>
      <Typography>Mon – Fri : 9am – 7pm</Typography>
      <Typography>Sat – Sun : 9am – 5pm</Typography>
    </Box>
  </Box>

  {/* FORM CARD */}
  <Paper elevation={0} className="glass-card fade-item">

    <Typography variant="h6" fontWeight="bold" color="#0f6a45">
      Want to be a Seller?
    </Typography>

    <Typography mb={2} color="#0f6a45">
      Leave A Message
    </Typography>

    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <TextField fullWidth label="Your Name" margin="normal" />
      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Subject" margin="normal" />
      <TextField fullWidth label="Message" multiline rows={4} margin="normal" />

      <button className="theme-btn">Submit</button>

      {submitted && (
        <Typography className="success-msg">
          ✅ Message sent successfully!
        </Typography>
      )}
    </Box>

  </Paper>

</motion.div>
          </Grid>

        </Grid>
      </Container>
    </Box>

    )

}

export default Contactpage;
