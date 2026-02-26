import React from "react";
import { Box, Container } from "@mui/material";
import "./ctaBanner.css";

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div className="cta-shape-extra" />
      <Container maxWidth="md">
        <Box textAlign="center" py={10} position="relative" zIndex={1}>
          <p className="cta-overline">Get In Touch</p>
          <h2 className="cta-heading">
            Ready to Nourish Your Soil Naturally?
          </h2>
          <p className="cta-subtext">
            Contact us for bulk orders, expert consultation, or product
            inquiries
          </p>
          <Box
            display="flex"
            justifyContent="center"
            gap={3}
            flexWrap="wrap"
          >
            <a href="tel:+919677703476" className="cta-btn-light">
              Call: +91 96777 03476
            </a>
            <a href="mailto:info@namachivaya.com" className="cta-btn-outline">
              Email Us
            </a>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default CTABanner;
