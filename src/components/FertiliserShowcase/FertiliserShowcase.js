import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import BiotechIcon from "@mui/icons-material/Biotech";
import ScienceIcon from "@mui/icons-material/Science";
import ShieldIcon from "@mui/icons-material/Shield";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import LeefImg from "../../images/slider/leefOne.png";
import LeefImgTwo from "../../images/slider/leefTwo.png";
import "./fertiliserShowcase.css";

const fertilisers = [
  {
    icon: <AgricultureIcon sx={{ fontSize: 36, color: "#0f6a45" }} />,
    name: "Cow Dung Fertiliser",
    tagline:
      "Organic Indian Desi Cow Dung Manure available in Granules & Powder.",
    benefits: [
      "Enriches soil naturally",
      "Improves water-holding capacity",
      "Provides balanced nutrients",
    ],
  },
  {
    icon: <BiotechIcon sx={{ fontSize: 36, color: "#0f6a45" }} />,
    name: "VAM (Vesicular Arbuscular Mycorrhiza)",
    tagline:
      "Beneficial fungal biofertilizer forming symbiotic root relationships.",
    benefits: [
      "Enhances phosphorus uptake",
      "Improves drought resistance",
      "Promotes healthy root systems",
    ],
  },
  {
    icon: <ScienceIcon sx={{ fontSize: 36, color: "#0f6a45" }} />,
    name: "Enriched Cow Dung Powder with VAM",
    tagline:
      "Premium blend of cow dung powder infused with VAM biofertilizer.",
    benefits: [
      "Combines traditional & modern science",
      "Dual-action soil enrichment",
      "Boosts microbial activity",
    ],
  },
  {
    icon: <ShieldIcon sx={{ fontSize: 36, color: "#0f6a45" }} />,
    name: "Natural Pest Control",
    tagline:
      "100% Organic Herbal Solution from Neem, Garlic, Aloe Vera & Milkweed.",
    benefits: [
      "Controls Aphids, Whiteflies & Mites",
      "No chemical residue",
      "Safe for beneficial insects",
    ],
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 36, color: "#0f6a45" }} />,
    name: "Organic Growth Booster",
    tagline:
      "Natural growth enhancer to accelerate plant development & yield.",
    benefits: [
      "Strengthens root systems",
      "Promotes healthy foliage",
      "Improves overall crop productivity",
    ],
  },
  {
    icon: <ViewInArIcon sx={{ fontSize: 36, color: "#0f6a45" }} />,
    name: "Coco Blocks",
    tagline:
      "Compressed coco pith blocks for superior soil conditioning.",
    benefits: [
      "Excellent water retention",
      "Improves soil aeration",
      "Eco-friendly and sustainable",
    ],
  },
];

const FertiliserShowcase = () => {
  return (
    <section className="fertiliser-showcase">
      {/* Floating leaves */}
      <Box
        component="img"
        src={LeefImgTwo}
        className="floating-leaf"
        sx={{ top: 40, left: 40, width: 70 }}
      />
      <Box
        component="img"
        src={LeefImg}
        className="floating-leaf"
        sx={{ bottom: 30, right: 50, width: 90 }}
      />

      <Container maxWidth="lg">
        {/* Section Header */}
        <Box textAlign="center" mb={7}>
          <span className="section-badge">Our Organic Range</span>
          <Typography className="section-heading" component="h2">
            Premium Organic Fertilisers
          </Typography>
          <Typography className="section-subtext">
            Scientifically tested, farmer-friendly organic solutions to nourish
            your soil naturally.
          </Typography>
        </Box>

        {/* Product Grid */}
        <Grid container spacing={4}>
          {fertilisers.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} className="fade-in-up">
              <div className="fertiliser-card">
                <div className="icon-wrap">{item.icon}</div>
                <h3 className="card-name">{item.name}</h3>
                <p className="card-tagline">{item.tagline}</p>
                <ul className="benefit-list">
                  {item.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default FertiliserShowcase;
