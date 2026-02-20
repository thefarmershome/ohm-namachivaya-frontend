import React from "react";
import Slider from "react-slick";
import { Box, Avatar, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import thiruvalluvar from "../../images/slider/thiruvalluvar.jpg";
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

export default function ThirukuralSlideAbout() {
  const testimonials = [
    {
      img: "/images/profile1.jpg",
      text: "“மற்றுந்தொன்று வேண்டாவாம் யாக்கைக்கு ஆகுந்தொன்று அம்மையால் பொற்செவி உளன்.”",
     
    },
    {
      img: "/images/profile2.jpg",
      text: "“உழுதுண்டு வாழ்வாரே வாழ்வார்மற் றெல்லாம் தொழுதுண்டு பின்செல் பவர்.”",
      
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
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
      mt={12}
    >
      {/* Floating leaf background (you can replace with images) */}
      <Box
        component="img"
        src={LeefImgTwo}
        sx={{ position: "absolute", top: 30, left: 30, width: 80, 
          // opacity: 0.5
         }}
      />
      <Box
        component="img"
        src={LeefImg}
        sx={{ position: "absolute", top: 50, right: 50, width: 100, 
          // opacity: 0.5
         }}
      />

      {/* Testimonial Slider */}
      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <Box key={i}>
            <Avatar
              src={thiruvalluvar}
              alt={t.author}
              sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
            />
            <Typography
              variant="h6"
              sx={{
                fontStyle: "italic",
                maxWidth: 600,
                mx: "auto",
                mb: 2,
                color: "text.primary",
              }}
            >
              {t.text}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>Thiruvalluvar – Tamil Poet</Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
