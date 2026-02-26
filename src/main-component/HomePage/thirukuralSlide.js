import React from "react";
import Slider from "react-slick";
import { Box, Avatar, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import thiruvalluvar from "../../images/slider/vam-down-image.png"; // can replace later
import LeefImg from "../../images/slider/leefOne.png";
import LeefImgTwo from "../../images/slider/leefTwo.png";

// Custom Arrow components
const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right: 20,
      top: "50%",
      transform: "translateY(-50%)",
      bgcolor: "white",
      boxShadow: 2,
      "&:hover": { bgcolor: "grey.100" },
    }}
  >
    <ArrowForwardIosIcon fontSize="small" />
  </IconButton>
);

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      left: 20,
      top: "50%",
      transform: "translateY(-50%)",
      bgcolor: "white",
      boxShadow: 2,
      "&:hover": { bgcolor: "grey.100" },
    }}
  >
    <ArrowBackIosNewIcon fontSize="small" />
  </IconButton>
);

export default function ThirukuralSlide() {
  const quotes = [
    {
      text: "Nourishing the earth naturally is not just our tagline — it is the philosophy behind every product we create at Om Namahsivaya Internationals.",
      author: "Om Namahsivaya Internationals",
      role: "Our Philosophy",
    },
    {
      text: "From the sacred Indian Desi cow to the beneficial mycorrhiza in our soil, nature holds the key to sustainable and abundant agriculture.",
      author: "Om Namahsivaya Internationals",
      role: "Our Belief",
    },
    {
      text: "We believe that organic farming is the future. Our mission is to empower every farmer with chemical-free, scientifically proven solutions for a greener tomorrow.",
      author: "Om Namahsivaya Internationals",
      role: "Our Mission",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box
      sx={{
        bgcolor: "#fef9f4",
        py: 10,
        px: 2,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
      mb={10}
      mt={10}
    >
      {/* Decorative leaf images */}
      <Box
        component="img"
        src={LeefImgTwo}
        sx={{ position: "absolute", top: 30, left: 30, width: 80 }}
      />
      <Box
        component="img"
        src={LeefImg}
        sx={{ position: "absolute", top: 50, right: 50, width: 100 }}
      />

      {/* Quote Slider */}
      <Slider {...settings}>
        {quotes.map((q, i) => (
          <Box key={i}>
            <Avatar
              src={thiruvalluvar}
              alt={q.author}
              sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
            />
            <Typography
              variant="h6"
              sx={{
                fontStyle: "italic",
                maxWidth: 650,
                mx: "auto",
                mb: 2,
                color: "text.primary",
              }}
            >
              “{q.text}”
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              {q.author} – {q.role}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
