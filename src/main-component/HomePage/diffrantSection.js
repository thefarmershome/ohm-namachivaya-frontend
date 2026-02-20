import React from "react";
import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DiffrantImg from "../../images/slider/diffrantSectionImage.png";

const DifferentSection = () => {
  return (
    <Grid container spacing={3} alignItems="center" px={5} mb={10}>
      {/* Left Side Text + Accordion */}
      <Grid item xs={12} md={6}>
        <Typography
          variant="overline"
          sx={{ color: "#b6bf4b", fontWeight: "bold" }}
        >
          Why Choose Namachivaya
        </Typography>

        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: "#0f6a45" }}
        >
          What Makes Our Solutions Different
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
          Namachivaya focuses on natural agricultural inputs that strengthen soil
          health, improve crop performance, and support sustainable farming
          practices worldwide.
        </Typography>

        {/* Accordion 1 */}
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              100% Natural & Organic Inputs
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our products are developed using natural ingredients and organic
              processes, free from harmful chemicals, ensuring long-term soil
              fertility and environmental safety.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion 2 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              Science-Backed Biological Enrichment
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We integrate beneficial microorganisms such as VAM and
              mycorrhiza to enhance nutrient absorption, root strength, and soil
              microbial activity.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion 3 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              Sustainable & Future-Focused
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our approach supports eco-friendly agriculture, helping growers
              improve productivity today while preserving soil health for future
              generations.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>

      {/* Right Side Image */}
      <Grid item xs={12} md={6}>
        <img
          src={DiffrantImg}
          alt="Sustainable agriculture"
          style={{
            width: "100%",
            objectFit: "cover",
            boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default DifferentSection;
