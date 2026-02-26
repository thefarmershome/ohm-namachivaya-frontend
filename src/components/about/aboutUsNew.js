import * as React from "react";
import {
  Container,
  Box,
  Typography,
  Stack,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Avatar
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import HeaderTop from "../HeaderTop/HeaderTop";
import Navbar from "../Navbar/Navbar";
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageTitle from "../pagetitle/PageTitle";
import Footer from "../footer/Footer";
import Scrollbar from "../scrollbar/scrollbar";
import Logo from '../../images/logo.svg';
import thiruvalluvar from "../../images/slider/thiruvalluvar.jpg";
import ThirukuralSlideAbout from "./thirukuralSlideAbout";
import backGroundImageAbout from "../../images/about/h5_img.jpg";
import backgroundAvatar from "../../images/about/h5_quality.png";
import whoWeAreImg from "../../images/about/whoweareImage.jpg";
import OurProductsImg from "../../images/about/ourproducts.jpg";
import howWeWorkImg from "../../images/about/howweare.jpg";
// import EcoOutlinedIcon from "@mui/icons-material/EcoOutlined";

// --- Replace these image URLs with your own assets when integrating ---
const IMAGES = {
  heroOrange:
    "https://images.unsplash.com/photo-1589927986089-35812388d1a3?q=80&w=1920&auto=format&fit=crop",
  grid1:
    "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop",
  grid2:
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop",
  grid3:
    "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1600&auto=format&fit=crop",
  qualityRing:backgroundAvatar
};

const theme = createTheme({
  palette: {
    primary: { main: "#1f6f4a" }, // deep green
    secondary: { main: "#f4a100" } // orange accent
  },
  typography: {
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 }
  },
  shape: { borderRadius: 0 }
});

function Hero() {
  return (
    <Box id="home" sx={{ position: "relative", bgcolor: "#f4efe6", overflow: "hidden" }}>
      <Container sx={{ py: { xs: 8, md: 12 } }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="overline" color="primary.main">Home • About us</Typography>
            <Typography variant="h2" sx={{ mt: 1 }}>About Us</Typography>
          </Box>
        </Stack>
      </Container>
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          right: { xs: -120, sm: -40, md: 0 },
          bottom: { xs: -80, md: "auto" },
          top: { md: 0 },
          width: { xs: 300, sm: 380, md: 520 },
          height: { xs: 300, sm: 380, md: 520 },
          backgroundImage: `url(${IMAGES.heroOrange})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottomLeftRadius: 9999,
          borderTopLeftRadius: { md: 9999 },
          boxShadow: 3
        }}
      />
    </Box>
  );
}

function SectionTitle({ kicker, title }) {
  return (
    <Stack spacing={1} sx={{ textAlign: "center", my: { xs: 6, md: 8 } }}>
      <Stack direction="row" spacing={1} sx={{ justifyContent: "center", alignItems: "center" }}>
        <EmojiNatureIcon color="secondary" />
        <Typography variant="overline" sx={{color:"#b6bf4b",fontSize:"12px",fontWeight:500}}>{kicker}</Typography>
      </Stack>
      <Typography variant="h3" sx={{color:"#1f6f4a"}}>{title}</Typography>
    </Stack>
  );
}

function WhoWeAre() {
  const cards = [
    {
      title: "Who We Are",
      text: "Om Namahsivaya Internationals is a premium organic fertilisers manufacturer and global exporter, delivering chemical-free solutions to farmers worldwide.",
      img: whoWeAreImg
    },
    {
      title: "Our Products",
      text: "All products at Om Namahsivaya Internationals are organic, lab-tested, and crafted to restore soil health and boost crop productivity.",
      img: OurProductsImg
    },
    {
      title: "How We Work",
      text: "We collect the products from farmers and deliver to our customers with their necessity.",
      img: howWeWorkImg
    }
  ];

  return (
    <Container>
      <SectionTitle kicker="Local • Best Organic Store" title="Organic" />      
      <Grid container spacing={2}>
        {cards.map((c) => (
          <Grid key={c.title} item xs={12} md={4}>
            <Card elevation={0} sx={{ height: "100%" }}>
              <CardMedia component="img" height="220" image={c.img} alt={c.title} />
              <CardContent>
                <Typography sx={{textAlign:"center",color:"primary.main",fontWeight:700}} variant="h6" gutterBottom>{c.title}</Typography>
                <Typography sx={{textAlign:"center"}} color="text.secondary">{c.text}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function Quality() {
  const left = [
    { icon: <AutoAwesomeIcon/>, title: "Handmade", text: "Direct from farmers with passion across the country.",id:1 },
    { icon: <ThumbUpAltOutlinedIcon/>, title: "100% Natural", text: "Eat local, consume local, closer to nature.",id:2 },
    { icon: <LocalFloristIcon/>, title: "Curated Products", text: "Selected and seasonal items, closer to nature.",id:3 }
  ];

  const right = [
    { icon: <AgricultureIcon/>, title: "Modern Farm", text: "Made with passion by 500+ farmers." },
    { icon: <SpaOutlinedIcon/>, title: "Always Fresh", text: "Farm-fresh products, delivered fast." },
    { icon: <SpaOutlinedIcon/>, title: "Sustainable", text: "Chemical-free consumption and on your body." }
  ];
  const colors = ["#e5dc9f", "#e5c599", "#ace8d8"];
  const colorsRight = ['#a3c7e3', '#c29aec', '#e59ab1'];

  return (
    <Box sx={{ mt: { xs: 6, md: 10 } }}>
      <Container>
        <SectionTitle kicker="Our Products" title="Highest Quality" />
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sm={4}>
            <Stack spacing={3}>
              {left.map((item,index) => (
                <Stack key={item.title} direction="row" spacing={2}>
                  <Avatar sx={{ bgcolor: colors[index] }}>{item.icon}</Avatar>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={700} sx={{color:"#0f6a45"}}>{item.title}</Typography>
                    <Typography color="text.secondary">{item.text}</Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box sx={{ position: "relative",backgroundImage: `url(${backGroundImageAbout})`, backgroundSize: "cover", backgroundPosition: "center",height:"40vh",width:"100%", display:"flex", alignItems:"center", justifyContent:"center", p:2,borderRadius:2  }}>
            
              <Avatar
                src={IMAGES.qualityRing}
                alt="Quality badge surrounded by vegetables"
                sx={{ width: { xs: 100, md: 100 }, height: { xs: 100, md: 100 }, mx: "auto"}}
              />
             
              <Avatar sx={{ position: "absolute", bottom: -16, left: -16, bgcolor: "secondary.main" }}>
                <EmojiNatureIcon />
              </Avatar>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Stack spacing={3}>
              {right.map((item,index) => (
                <Stack key={item.title} direction="row" spacing={2}>
                  <Avatar sx={{ bgcolor: colorsRight[index] }}>{item.icon}</Avatar>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={700} sx={{color:"#0f6a45"}}>{item.title}</Typography>
                    <Typography color="text.secondary">{item.text}</Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}



export default function AboutUsPageNew() {
  return (
    <React.Fragment>
                {/* <HeaderTop/> */}
                <NavbarS2 hclass={'wpo-header-style-2'} Logo={Logo} />
                
                <PageTitle pageTitle={'About Us'} pagesub={'About'} />
              
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.paper" }}>
        
        <WhoWeAre />
        <Quality />
        <ThirukuralSlideAbout/>
      </Box>
    </ThemeProvider>
    <Footer  />
                <Scrollbar/>
                </React.Fragment>
  );
}
