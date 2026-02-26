import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ScienceIcon from "@mui/icons-material/Science";
import SavingsIcon from "@mui/icons-material/Savings";
import RecyclingIcon from "@mui/icons-material/Recycling";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import "./whyChooseUs.css";

const benefits = [
  {
    icon: <VerifiedIcon sx={{ fontSize: 28, color: "#0f6a45" }} />,
    title: "100% Organic & Chemical-Free",
    description:
      "All our products are purely natural, free from synthetic chemicals, ensuring safe and sustainable agriculture.",
  },
  {
    icon: <ScienceIcon sx={{ fontSize: 28, color: "#0f6a45" }} />,
    title: "Scientifically Tested",
    description:
      "Every product undergoes rigorous scientific testing to guarantee quality and effectiveness.",
  },
  {
    icon: <SavingsIcon sx={{ fontSize: 28, color: "#0f6a45" }} />,
    title: "Farmer Friendly Pricing",
    description:
      "Premium quality organic fertilisers at prices that support farmers' livelihoods.",
  },
  {
    icon: <RecyclingIcon sx={{ fontSize: 28, color: "#0f6a45" }} />,
    title: "Eco-Friendly Packaging",
    description:
      "Sustainable packaging solutions that minimize environmental impact.",
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 28, color: "#0f6a45" }} />,
    title: "Worldwide Export & Delivery",
    description:
      "Export-ready packaging and reliable delivery worldwide, bringing organic solutions to farmers everywhere.",
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 28, color: "#0f6a45" }} />,
    title: "Expert Support",
    description:
      "Dedicated agricultural experts available to guide you on product usage and soil health.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box textAlign="center" mb={7}>
          <span className="section-badge">Why Choose Us</span>
          <Typography className="section-heading" component="h2">
            What Makes Om Namahsivaya Internationals Different
          </Typography>
          <Typography className="section-subtext">
            Committed to quality, sustainability, and empowering farmers with
            the best organic solutions.
          </Typography>
        </Box>

        {/* Benefits Grid */}
        <Grid container spacing={3}>
          {benefits.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} className="fade-in-up">
              <div className="benefit-card">
                <div className="benefit-icon">{item.icon}</div>
                <div>
                  <h4 className="benefit-title">{item.title}</h4>
                  <p className="benefit-desc">{item.description}</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
