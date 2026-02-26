import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Avatar,
  Stack,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import GrassIcon from "@mui/icons-material/Grass";
import YardIcon from "@mui/icons-material/Yard";
import BiotechIcon from "@mui/icons-material/Biotech";
import ParkIcon from "@mui/icons-material/Park";
import FlagIcon from "@mui/icons-material/Flag";
import VisibilityIcon from "@mui/icons-material/Visibility";
import OpacityIcon from "@mui/icons-material/Opacity";
import TimerIcon from "@mui/icons-material/Timer";
import SprayIcon from "@mui/icons-material/Wash";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";

import NavbarS2 from "../NavbarS2/NavbarS2";
import PageTitle from "../pagetitle/PageTitle";
import Footer from "../footer/Footer";
import Scrollbar from "../scrollbar/scrollbar";
import Logo from "../../images/Logo/Ohm_namachiva.png";
import AboutImg from "../../images/slider/backgroundImageOld.jpg";
import LeefImg from "../../images/slider/leefOne.png";
import LeefImgTwo from "../../images/slider/leefTwo.png";
import PestControlImg from "../../images/products/pest-control-herbs.jpeg";

const theme = createTheme({
  palette: {
    primary: { main: "#0f6a45" },
    secondary: { main: "#b6bf4b" },
  },
  typography: {
    fontFamily:
      "Outfit, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
  },
  shape: { borderRadius: 0 },
});

// ============================================================
// ABOUT SECTION (same content as Home)
// ============================================================
const AboutContent = () => (
  <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#fff", position: "relative", overflow: "hidden" }}>
    <Box
      component="img"
      src={LeefImgTwo}
      alt=""
      sx={{ position: "absolute", top: 30, left: 30, width: 70, opacity: 0.85, zIndex: 10, pointerEvents: "none" }}
    />
    <Box
      component="img"
      src={LeefImg}
      alt=""
      sx={{ position: "absolute", bottom: 30, right: 50, width: 90, opacity: 0.85, zIndex: 10, pointerEvents: "none" }}
    />

    <Container>
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={12} md={5}>
          <Box sx={{ borderRadius: 4, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
            <Box
              component="img"
              src={AboutImg}
              alt="About Om Namahsivaya Internationals"
              sx={{ width: "100%", height: 420, objectFit: "cover" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography
            variant="overline"
            sx={{
              background: "linear-gradient(135deg, #0f6a45, #1c8c5d)",
              color: "#fff",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 2.5,
              px: 2.5,
              py: 0.75,
              borderRadius: 30,
              display: "inline-block",
              mb: 2,
            }}
          >
            ABOUT OM NAMAHSIVAYA INTERNATIONALS
          </Typography>

          <Typography variant="h3" sx={{ color: "#232323", mb: 2 }}>
            Who We Are
          </Typography>

          <Typography sx={{ color: "#3d3d3d", lineHeight: 1.8, mb: 1.5 }}>
            Om Namahsivaya Internationals is an Indian agri-input brand focused on producing
            high-quality organic fertilisers designed for sustainable agriculture.
          </Typography>

          <Typography sx={{ color: "#3d3d3d", lineHeight: 1.8, mb: 2 }}>
            Rooted in traditional Indian farming knowledge and strengthened by
            modern biological science, our products support long-term soil
            fertility, strong root systems, and consistent crop performance.
          </Typography>

          <Box
            sx={{
              backdropFilter: "blur(14px)",
              background: "rgba(255,255,255,0.95)",
              borderRadius: 3,
              p: 3,
              boxShadow: "0 10px 35px rgba(0,0,0,0.06)",
              borderLeft: "4px solid #0f6a45",
              borderTop: "2px solid rgba(15,106,69,0.1)",
              mb: 2,
            }}
          >
            <Typography sx={{ fontWeight: 700, color: "#0f6a45", mb: 1, fontSize: 15 }}>
              We serve:
            </Typography>
            {["Greenhouse operators", "Landowners & plantations", "Nurseries & organic farms"].map(
              (item, i) => (
                <Typography key={i} sx={{ color: "#3d3d3d", fontSize: 14, pl: 2, position: "relative", "&::before": { content: '"✓"', position: "absolute", left: 0, color: "#0f6a45", fontWeight: 700 } }}>
                  {item}
                </Typography>
              )
            )}
          </Box>

          <Typography
            sx={{ color: "#0f6a45", fontWeight: 600, fontStyle: "italic", fontSize: 17, mt: 2 }}
          >
            Our goal is simple: to rebuild soil life and help crops grow naturally
            and efficiently.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

// ============================================================
// PHILOSOPHY SECTION (same content as Home)
// ============================================================
const PhilosophyContent = () => {
  const focusAreas = [
    { icon: <GrassIcon />, title: "Feeding the soil ecosystem" },
    { icon: <YardIcon />, title: "Strengthening root-soil relationships" },
    { icon: <BiotechIcon />, title: "Encouraging beneficial microorganisms" },
    { icon: <ParkIcon />, title: "Reducing dependency on chemical fertilisers" },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#faf7f2", position: "relative", "&::before": { content: '""', display: "block", width: 80, height: 3, background: "linear-gradient(90deg, #0f6a45, #b6bf4b)", borderRadius: 2, mx: "auto", mb: 0 } }}>
      <Container>
        <Box textAlign="center" mb={5}>
          <Typography
            variant="overline"
            sx={{
              background: "linear-gradient(135deg, #0f6a45, #1c8c5d)",
              color: "#fff",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 2.5,
              px: 2.5,
              py: 0.75,
              borderRadius: 30,
              display: "inline-block",
              mb: 2,
            }}
          >
            OUR FARMING PHILOSOPHY
          </Typography>
          <Typography variant="h3" sx={{ color: "#232323", mb: 2 }}>
            Permaculture-Based Approach
          </Typography>
          <Typography sx={{ color: "#3d3d3d", maxWidth: 640, mx: "auto", lineHeight: 1.7 }}>
            At Om Namahsivaya Internationals, we believe farming should work with nature, not
            against it.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {focusAreas.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Box
                sx={{
                  backdropFilter: "blur(14px)",
                  background: "rgba(255,255,255,0.88)",
                  borderRadius: 4,
                  p: 3.5,
                  boxShadow: "0 10px 35px rgba(0,0,0,0.06)",
                  textAlign: "center",
                  height: "100%",
                  transition: "all 0.4s ease",
                  borderTop: "3px solid transparent",
                  "&:hover": { transform: "translateY(-8px)", boxShadow: "0 16px 45px rgba(0,0,0,0.1)", borderTop: "3px solid #0f6a45" },
                }}
              >
                <Avatar
                  sx={{
                    background: "linear-gradient(135deg, #0f6a45, #1c8c5d)",
                    width: 56,
                    height: 56,
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  {item.icon}
                </Avatar>
                <Typography sx={{ fontWeight: 700, fontSize: 15, color: "#232323" }}>
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Flow Diagram */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          sx={{ my: 5 }}
        >
          {["Healthy Soil", "Healthy Roots", "Healthy Crops"].map((step, i) => (
            <React.Fragment key={i}>
              {i > 0 && (
                <Typography sx={{ color: "#0f6a45", fontWeight: 800, fontSize: 28 }}>→</Typography>
              )}
              <Box
                sx={{
                  background: "linear-gradient(135deg, #0f6a45, #1c8c5d)",
                  color: "#fff",
                  px: 3.5,
                  py: 1.5,
                  borderRadius: 50,
                  fontWeight: 700,
                  fontSize: 16,
                  boxShadow: "0 6px 20px rgba(15,106,69,0.3)",
                }}
              >
                {step}
              </Box>
            </React.Fragment>
          ))}
        </Stack>

        <Typography sx={{ color: "#3d3d3d", textAlign: "center", lineHeight: 1.7, maxWidth: 640, mx: "auto" }}>
          This approach ensures long-term productivity and sustainability for farmers.
        </Typography>

        {/* Extended */}
        <Box
          sx={{
            maxWidth: 800,
            mx: "auto",
            mt: 5,
            p: 4.5,
            backdropFilter: "blur(14px)",
            background: "rgba(255,255,255,0.88)",
            borderRadius: 4,
            boxShadow: "0 10px 35px rgba(0,0,0,0.06)",
            borderLeft: "4px solid #0f6a45",
          }}
        >
          <Typography sx={{ color: "#3d3d3d", lineHeight: 1.8, mb: 2 }}>
            At Om Namahsivaya Internationals, we believe farming is not just cultivation — it
            is a restoration of life. Rooted in ancient Indian agricultural wisdom
            and aligned with modern sustainable practices, we promote
            Permaculture-based regenerative farming systems that rebuild soil,
            enhance biodiversity, and create long-term agricultural resilience.
            Our mission is simple:{" "}
            <strong style={{ color: "#0f6a45" }}>
              Restore Soil. Strengthen Roots. Sustain the Future.
            </strong>
          </Typography>

          <Box sx={{ width: 40, height: 2, bgcolor: "#b6bf4b", borderRadius: 1, my: 2 }} />

          <Typography variant="h6" sx={{ color: "#232323", fontWeight: 700, mt: 2.5, mb: 1 }}>
            Our Permaculture Approach
          </Typography>
          <Typography sx={{ color: "#3d3d3d", mb: 1 }}>
            We follow the principles of permaculture — designing agricultural
            systems that work with nature, not against it.
          </Typography>
          <Typography sx={{ color: "#3d3d3d", fontWeight: 600 }}>
            Improve soil structure naturally
          </Typography>
          {[
            "Increase microbial activity",
            "Reduce chemical dependency",
            "Enhance long-term soil fertility",
            "Preserve ecological balance",
          ].map((item, i) => (
            <Typography key={i} sx={{ color: "#232323", fontSize: 15, py: 0.5, pl: 3, position: "relative", "&::before": { content: '"✓"', position: "absolute", left: 0, color: "#0f6a45", fontWeight: 700 } }}>
              {item}
            </Typography>
          ))}
          <Box sx={{ width: 40, height: 2, bgcolor: "#e8f5e9", borderRadius: 1, my: 2 }} />
          <Typography sx={{ color: "#3d3d3d", mt: 1.5 }}>
            Our inputs are designed to support living soil ecosystems, ensuring
            healthier crops and higher productivity — sustainable.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

// ============================================================
// MISSION & VISION SECTION
// ============================================================
const MissionVisionSection = () => (
  <Box sx={{ py: { xs: 6, md: 10 }, background: "linear-gradient(170deg, #f0f7f2 0%, #e8f5e9 100%)", position: "relative", "&::before": { content: '""', display: "block", width: 80, height: 3, background: "linear-gradient(90deg, #0f6a45, #b6bf4b)", borderRadius: 2, mx: "auto", mb: 0 } }}>
    <Container>
      <Box textAlign="center" mb={5}>
        <Typography
          variant="overline"
          sx={{
            background: "linear-gradient(135deg, #0f6a45, #1c8c5d)",
            color: "#fff",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: 2.5,
            px: 2.5,
            py: 0.75,
            borderRadius: 30,
            display: "inline-block",
            mb: 2,
          }}
        >
          Our Purpose
        </Typography>
        <Typography variant="h3" sx={{ color: "#232323", mb: 2 }}>
          Pure India, Healthier Organic
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Mission */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              background: "linear-gradient(135deg, #0f6a45, #1c8c5d)",
              borderRadius: 4,
              p: 5,
              color: "#fff",
              height: "100%",
              boxShadow: "0 20px 60px rgba(15,106,69,0.25)",
            }}
          >
            <Avatar sx={{ bgcolor: "rgba(255,255,255,0.15)", mb: 2 }}>
              <FlagIcon />
            </Avatar>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Our Mission
            </Typography>
            <Typography sx={{ lineHeight: 1.8, color: "#fff" }}>
              To empower every farmer with chemical-free, scientifically proven
              organic solutions. We are committed to restoring soil health,
              enhancing biodiversity, and promoting sustainable agriculture — from
              India to the world.
            </Typography>
            <Typography sx={{ mt: 2, fontWeight: 600, fontStyle: "italic", color: "#fff" }}>
              Restore Soil. Strengthen Roots. Sustain the Future.
            </Typography>
          </Box>
        </Grid>

        {/* Vision */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              background: "linear-gradient(170deg, #ffffff 0%, #f0f7f2 100%)",
              border: "2px solid #0f6a45",
              borderRadius: 4,
              p: 5,
              height: "100%",
              boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
            }}
          >
            <Avatar sx={{ bgcolor: "#e8f5e9", mb: 2 }}>
              <VisibilityIcon sx={{ color: "#0f6a45" }} />
            </Avatar>
            <Typography variant="h4" sx={{ color: "#232323", mb: 2 }}>
              Our Vision
            </Typography>
            <Typography sx={{ color: "#3d3d3d", lineHeight: 1.8 }}>
              A world where every farm thrives on pure, organic inputs — where
              Indian agricultural wisdom meets modern science to create a
              healthier planet. We envision a future where organic farming is the
              standard, not the exception.
            </Typography>
            <Typography sx={{ mt: 2, fontWeight: 600, color: "#0f6a45", fontStyle: "italic" }}>
              Pure India. Healthier Organic. Global Impact.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

// ============================================================
// HOW TO USE SECTION (from Pest Control PDF)
// ============================================================
const HowToUseSection = () => {
  const steps = [
    {
      icon: <OpacityIcon sx={{ fontSize: 36, color: "#fff" }} />,
      title: "Measure",
      description: "Mix 100 ml per 1 Litre of Water",
      color: "#0f6a45",
    },
    {
      icon: <TimerIcon sx={{ fontSize: 36, color: "#fff" }} />,
      title: "Schedule",
      description: "Apply early morning / 15-20 days interval",
      color: "#1c8c5d",
    },
    {
      icon: <SprayIcon sx={{ fontSize: 36, color: "#fff" }} />,
      title: "Spray",
      description: "Spray evenly on crops and foliage",
      color: "#7d8a2e",
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#fff", position: "relative", "&::before": { content: '""', display: "block", width: 80, height: 3, background: "linear-gradient(90deg, #0f6a45, #b6bf4b)", borderRadius: 2, mx: "auto", mb: 0 } }}>
      <Container>
        <Box textAlign="center" mb={5}>
          <Typography
            variant="overline"
            sx={{
              background: "linear-gradient(135deg, #0f6a45, #1c8c5d)",
              color: "#fff",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 2.5,
              px: 2.5,
              py: 0.75,
              borderRadius: 30,
              display: "inline-block",
              mb: 2,
            }}
          >
            Organic Herbal Pest Control Solution
          </Typography>
          <Typography variant="h3" sx={{ color: "#232323", mb: 1 }}>
            How to Use
          </Typography>
          <Typography sx={{ color: "#3d3d3d", maxWidth: 600, mx: "auto" }}>
            Eco Friendly · Chemical-Free · Safe for Organic Farming
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="center">
          {/* Steps */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {steps.map((step, i) => (
                <Grid item xs={12} key={i}>
                  <Stack direction="row" spacing={3} alignItems="center">
                    <Avatar
                      sx={{
                        bgcolor: step.color,
                        width: 72,
                        height: 72,
                        boxShadow: `0 8px 24px ${step.color}40`,
                        flexShrink: 0,
                      }}
                    >
                      {step.icon}
                    </Avatar>
                    <Box>
                      <Stack direction="row" spacing={1} alignItems="center" mb={0.5}>
                        <Typography
                          sx={{
                            bgcolor: step.color,
                            color: "#fff",
                            borderRadius: 50,
                            width: 28,
                            height: 28,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 14,
                            fontWeight: 700,
                          }}
                        >
                          {i + 1}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: "#232323" }}>
                          {step.title}
                        </Typography>
                      </Stack>
                      <Typography sx={{ color: "#3d3d3d", fontSize: 15, lineHeight: 1.6 }}>
                        {step.description}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>

            {/* Product details */}
            <Box
              sx={{
                mt: 4,
                p: 3,
                backdropFilter: "blur(14px)",
                background: "rgba(255,255,255,0.95)",
                borderRadius: 3,
                boxShadow: "0 10px 35px rgba(0,0,0,0.06)",
              }}
            >
              <Typography sx={{ fontWeight: 700, color: "#0f6a45", mb: 1 }}>
                Composition:
              </Typography>
              {[
                "Neem Seeds Extract",
                "Neem Leaf Extract",
                "Garlic Extract",
                "Aloe Vera Extract",
                "Milkweed Extract",
              ].map((item, i) => (
                <Typography
                  key={i}
                  sx={{
                    fontSize: 14,
                    color: "#3d3d3d",
                    pl: 2.5,
                    py: 0.5,
                    borderBottom: "1px solid rgba(15,106,69,0.06)",
                    "&:last-child": { borderBottom: "none" },
                    position: "relative",
                    "&::before": {
                      content: '"•"',
                      position: "absolute",
                      left: 0,
                      color: "#0f6a45",
                      fontWeight: 700,
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
              <Typography sx={{ mt: 1.5, fontSize: 14, color: "#3d3d3d" }}>
                <strong style={{ color: "#0f6a45" }}>Controls:</strong> Aphids · Whiteflies · Thrips · Mites · Caterpillars
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#3d3d3d" }}>
                <strong style={{ color: "#0f6a45" }}>Benefits:</strong> 100% Herbal &amp; Natural · No Chemical Residue
              </Typography>
              <Typography sx={{ fontSize: 13, color: "#6b6b6b", mt: 1 }}>
                Net Content: 500 ml · Made in India
              </Typography>
            </Box>
          </Grid>

          {/* Image */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              }}
            >
              <Box
                component="img"
                src={PestControlImg}
                alt="Organic Herbal Pest Control Solution"
                sx={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// ============================================================
// MAIN ABOUT PAGE
// ============================================================
export default function AboutUsPageNew() {
  return (
    <React.Fragment>
      <NavbarS2 hclass={"wpo-header-style-2"} Logo={Logo} />
      <PageTitle pageTitle={"About Us"} pagesub={"About"} />

      <ThemeProvider theme={theme}>
        <Box sx={{ bgcolor: "background.paper" }}>
          {/* — ABOUT OM NAMAHSIVAYA INTERNATIONALS — */}
          <AboutContent />

          {/* — OUR FARMING PHILOSOPHY — */}
          <PhilosophyContent />

          {/* — MISSION & VISION — */}
          <MissionVisionSection />

          {/* — HOW TO USE (Pest Control) — */}
          <HowToUseSection />
        </Box>
      </ThemeProvider>

      <Footer />
      <Scrollbar />
    </React.Fragment>
  );
}
