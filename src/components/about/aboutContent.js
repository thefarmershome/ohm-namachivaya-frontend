import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import ScienceIcon from "@mui/icons-material/Science";
import PublicIcon from "@mui/icons-material/Public";

const ProcessSteps = () => {
  const steps = [
    {
      icon: <AgricultureIcon sx={{ fontSize: 70, color: "#b6bf4b" }} />,
      title: "Sourced from Indian Desi Cows",
      description:
        "Our organic inputs begin with premium raw materials sourced from trusted Indian Desi cow farms and natural agricultural origins.",
    },
    {
      icon: <ScienceIcon sx={{ fontSize: 70, color: "#0f6a45" }} />,
      title: "Lab-Tested & Scientifically Enriched",
      description:
        "Every product is scientifically processed, enriched with beneficial microorganisms like VAM, and rigorously lab-tested for quality.",
    },
    {
      icon: <PublicIcon sx={{ fontSize: 70, color: "#b6bf4b" }} />,
      title: "Export-Ready Worldwide Delivery",
      description:
        "Packed in eco-friendly, export-ready packaging and delivered to organic farmers and agricultural partners across the globe.",
    },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        position: "relative",
        py: 6,
        mt: 2,
        mb: 2,
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="flex-start"
        spacing={4}
      >
        {steps.map((step, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ position: "relative" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
              }}
            >
              {step.icon}

              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mt: 2, color: "#0f6a45" }}
              >
                {step.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{ mt: 1, color: "#555", maxWidth: "240px" }}
              >
                {step.description}
              </Typography>
            </Box>

            {/* Arrow between cards */}
            {index < steps.length - 1 && (
              <Box
                component="svg"
                viewBox="0 0 250 150"
                sx={{
                  width: 160,
                  height: 100,
                  position: "absolute",
                  top: index % 2 === 0 ? 40 : "auto",
                  bottom: index % 2 !== 0 ? 95 : "auto",
                  right: -90,
                  display: { xs: "none", md: "block" },
                }}
              >
                {index % 2 === 0 ? (
                  <>
                    <path
                      d="M 10 40 Q 120 130 240 45"
                      stroke="#A9C939"
                      strokeWidth="4"
                      fill="transparent"
                      strokeDasharray="6,6"
                    />
                    <polygon
                      points="225,38 250,40 245,63"
                      fill="#A9C939"
                    />
                  </>
                ) : (
                  <>
                    <path
                      d="M 10 100 Q 120 10 240 100"
                      stroke="#A9C939"
                      strokeWidth="4"
                      fill="transparent"
                      strokeDasharray="6,6"
                    />
                    <polygon
                      points="235,75 240,100 220,105"
                      fill="#A9C939"
                    />
                  </>
                )}
              </Box>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProcessSteps;
