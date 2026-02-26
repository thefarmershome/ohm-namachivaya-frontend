import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Container, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";

// MUI Icons
import AgricultureIcon from "@mui/icons-material/Agriculture";
import BiotechIcon from "@mui/icons-material/Biotech";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import ShieldIcon from "@mui/icons-material/Shield";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedIcon from "@mui/icons-material/Verified";
import ScienceIcon from "@mui/icons-material/Science";
import RecyclingIcon from "@mui/icons-material/Recycling";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import GrassIcon from "@mui/icons-material/Grass";
import YardIcon from "@mui/icons-material/Yard";
import ParkIcon from "@mui/icons-material/Park";
import PublicIcon from "@mui/icons-material/Public";
import InventoryIcon from "@mui/icons-material/Inventory";
import SyncIcon from "@mui/icons-material/Sync";
import HighQualityIcon from "@mui/icons-material/HighQuality";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";
import BlenderIcon from "@mui/icons-material/Blender";

// Imported existing components (keep as-is)
import NavbarS2 from "../../components/NavbarS2/NavbarS2";
import ProductSection from "../../components/ProductSection/ProductSection";
import PartnersSection from "../../components/PartnersSection/PartnersSection";
import TeamSection from "../../components/TeamSection/TeamSection";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import SignUpModal from "../SignUpPage";

// Images
import LogoOhm from "../../images/Logo/Ohm_namachiva.png";
import HeroBg from "../../images/slider/imageNewOneTwo.jpg";
import AboutImg from "../../images/slider/backgroundImageOld.jpg";
import LeefImg from "../../images/slider/leefOne.png";
import LeefImgTwo from "../../images/slider/leefTwo.png";
import VamImg from "../../images/slider/seedsVamMu.png";
import CowDungImg from "../../images/products/cow-dung-vam.jpeg";
import CocoPithImg from "../../images/products/coco-pith.jpeg";
import PestControlImg from "../../images/products/pest-control-herbs.jpeg";
import GrowthBoosterImg from "../../images/products/growth-booster.jpeg";
import QuoteAvatar from "../../images/slider/vam-down-image.png";

// CSS
import "./homePagePremium.css";

// ============================================================
// ANIMATION VARIANTS
// ============================================================
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" },
  }),
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

// ============================================================
// 1. HERO SECTION
// ============================================================
const HeroSection = () => (
  <section
    className="hero-premium"
    style={{ backgroundImage: `url(${HeroBg})` }}
  >
    {/* Floating leaves */}
    <img src={LeefImgTwo} alt="" className="hero-floating-leaf hero-leaf-top-left" style={{ top: 100, left: 40, width: 70 }} />
    <img src={LeefImg} alt="" className="hero-floating-leaf" style={{ bottom: 10, right: 90, width: 90 }} />

    <Container>
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.div variants={fadeUp} custom={0}>
          <span className="hero-badge">Ancient Indian Wisdom for Modern Farming</span>
        </motion.div>

        <motion.h1 variants={fadeUp} custom={1} className="hero-title">
          Pure Indian Organic Fertilisers{" "}
          <span className="highlight">for a Healthier Planet</span>
        </motion.h1>

        <motion.p variants={fadeUp} custom={2} className="hero-subtitle">
          Exporting globally from the heart of Indian farms.
        </motion.p>

        <motion.p variants={fadeUp} custom={3} className="hero-tagline">
          From <span className="soul-text">SOIL</span> to{" "}
          <span className="soul-text">SOUL</span> — Regenerating Earth, Naturally
        </motion.p>

        <motion.div variants={fadeUp} custom={4}>
          <Link to="/our-products" className="hero-cta">
            Explore Our Products
            <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
          </Link>
        </motion.div>

        <motion.p variants={fadeUp} custom={5} className="hero-extra">
          Export-Quality Organic Inputs from India
        </motion.p>
      </motion.div>
    </Container>
  </section>
);

// ============================================================
// 2. ABOUT SECTION
// ============================================================
const AboutSection = () => (
  <section className="about-premium-section premium-section">
    <img src={LeefImgTwo} alt="" className="hero-floating-leaf" style={{ top: 40, left: 40, width: 70 }} />
    <img src={LeefImg} alt="" className="hero-floating-leaf" style={{ bottom: 30, right: 50, width: 90 }} />

    <Container>
      <div className="row align-items-center">
        {/* Image */}
        <div className="col-lg-5 mb-4 mb-lg-0">
          <motion.div
            className="about-img-wrap"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={AboutImg} alt="About Om Namahsivaya Internationals" />
          </motion.div>
        </div>

        {/* Text */}
        <div className="col-lg-7">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div variants={fadeUp}>
              <span className="premium-badge">ABOUT OM NAMAHSIVAYA INTERNATIONALS</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="premium-heading">
              Who We Are
            </motion.h2>

            <motion.p variants={fadeUp} className="premium-subtext">
              Om Namahsivaya Internationals is an Indian agri-input brand focused on producing
              high-quality organic fertilisers designed for sustainable agriculture.
            </motion.p>

            <motion.p variants={fadeUp} className="premium-subtext" style={{ marginTop: 12 }}>
              Rooted in traditional Indian farming knowledge and strengthened by
              modern biological science, our products support long-term soil
              fertility, strong root systems, and consistent crop performance.
            </motion.p>

            <motion.div variants={fadeUp}>
              <div className="serve-card">
                <h4>We serve:</h4>
                <ul>
                  <li>Greenhouse operators</li>
                  <li>Landowners &amp; plantations</li>
                  <li>Nurseries &amp; organic farms</li>
                </ul>
              </div>
            </motion.div>

            <motion.p variants={fadeUp} className="about-goal">
              Our goal is simple: to rebuild soil life and help crops grow
              naturally and efficiently.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </Container>
  </section>
);

// ============================================================
// 3. PHILOSOPHY SECTION
// ============================================================
const PhilosophySection = () => {
  const focusAreas = [
    { icon: <GrassIcon />, title: "Feeding the soil ecosystem" },
    { icon: <YardIcon />, title: "Strengthening root-soil relationships" },
    { icon: <BiotechIcon />, title: "Encouraging beneficial microorganisms" },
    { icon: <ParkIcon />, title: "Reducing dependency on chemical fertilisers" },
  ];

  return (
    <section className="philosophy-section premium-section">
      <img src={LeefImgTwo} alt="" className="hero-floating-leaf" style={{ top: 30, right: 40, width: 80 }} />

      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          style={{ textAlign: "center" }}
        >
          <motion.div variants={fadeUp}>
            <span className="premium-badge">OUR FARMING PHILOSOPHY</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="premium-heading">
            Permaculture-Based Approach
          </motion.h2>

          <motion.p variants={fadeUp} className="premium-subtext centered">
            At Om Namahsivaya Internationals, we believe farming should work with nature, not
            against it.
          </motion.p>
        </motion.div>

        {/* Focus Area Cards */}
        <Grid container spacing={3} sx={{ mt: 5 }}>
          {focusAreas.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <div className="philosophy-focus-card">
                  <div className="focus-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                </div>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Flow Diagram */}
        <motion.div
          className="philosophy-flow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="flow-step">Healthy Soil</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step">Healthy Roots</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step">Healthy Crops</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="premium-subtext centered"
          style={{ textAlign: "center" }}
        >
          This approach ensures long-term productivity and sustainability for farmers.
        </motion.p>

        {/* Extended Content */}
        <motion.div
          className="philosophy-extended"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            At Om Namahsivaya Internationals, we believe farming is not just cultivation — it
            is a restoration of life. Rooted in ancient Indian agricultural wisdom
            and aligned with modern sustainable practices, we promote
            Permaculture-based regenerative farming systems that rebuild soil,
            enhance biodiversity, and create long-term agricultural resilience.
            Our mission is simple:{" "}
            <strong style={{ color: "#0f6a45" }}>
              Restore Soil. Strengthen Roots. Sustain the Future.
            </strong>
          </p>

          <h4 style={{ marginTop: 20, color: "#232323", fontWeight: 700 }}>
            Our Permaculture Approach
          </h4>
          <p style={{ color: "#555" }}>
            We follow the principles of permaculture — designing agricultural
            systems that work with nature, not against it.
          </p>
          <p style={{ color: "#555", fontWeight: 600 }}>
            Improve soil structure naturally
          </p>
          <ul className="check-list">
            <li>Increase microbial activity</li>
            <li>Reduce chemical dependency</li>
            <li>Enhance long-term soil fertility</li>
            <li>Preserve ecological balance</li>
          </ul>
          <p style={{ color: "#555", marginTop: 12 }}>
            Our inputs are designed to support living soil ecosystems, ensuring
            healthier crops and higher productivity — sustainable.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

// ============================================================
// 4. PRODUCTS SHOWCASE SECTION
// ============================================================
const productsData = [
  {
    id: "cow-dung",
    icon: <AgricultureIcon sx={{ fontSize: 32, color: "#0f6a45" }} />,
    name: "Cow Dung Fertiliser",
    tagline: "Derived from high-quality Indian desi cow sources.",
    image: CowDungImg,
    description:
      "Derived from high-quality Indian desi cow sources, our manure products are:",
    benefits: [
      "100% Organic & Chemical-Free",
      "Rich in Natural Nutrients",
      "Improves Soil Texture & Aeration",
      "Enhances Water Retention",
      "Promotes Beneficial Microbial Growth",
    ],
    meta: [
      "Available in Granular & Powder Forms/Export-Grade",
      "Packaging: 1kg | 5kg | 10kg | 25kg",
    ],
  },
  {
    id: "vam",
    icon: <BiotechIcon sx={{ fontSize: 32, color: "#0f6a45" }} />,
    name: "VAM (Vesicular Arbuscular Mycorrhiza)",
    tagline: "Organic VAM Biofertiliser for superior root health.",
    heroBadge: "HERO PRODUCT",
    image: VamImg,
    subtitle: "Organic VAM (Vesicular Arbuscular Mycorrhiza)",
    description:
      "Our premium VAM culture establishes a powerful symbiotic relationship between plant roots and beneficial fungi.",
    benefits: [
      "Expands Root Absorption Area",
      "Increases Phosphorus Uptake",
      "Enhances Nutrient Efficiency",
      "Improves Drought Resistance",
      "Strengthens Plant Immunity",
    ],
    meta: [
      "Ideal for: Horticulture | Greenhouses | Landscaping | Organic Farms",
    ],
  },
  {
    id: "enriched-blend",
    icon: <BlenderIcon sx={{ fontSize: 32, color: "#0f6a45" }} />,
    name: "Enriched Cow Dung Powder with VAM",
    tagline: "Dual-action blend of organic cow dung and active VAM biofertilizer.",
    image: CowDungImg,
    subtitle: "Advanced Organic Blend",
    description:
      "A premium formulation combining fine organic cow dung powder enriched with active VAM biofertilizer for superior soil and root performance.",
    benefits: [
      "Dual-action soil nutrition",
      "Enhanced root colonization by mycorrhiza",
      "Improved soil biology & microbial activity",
      "Balanced organic nutrition",
      "Suitable for modern and greenhouse farming",
    ],
    meta: [
      "Combines Cow Dung Powder + VAM Culture",
      "Export-Grade Quality",
    ],
  },
  {
    id: "pest-control",
    icon: <ShieldIcon sx={{ fontSize: 32, color: "#0f6a45" }} />,
    name: "Natural Pest Control",
    tagline: "Organic Herbal — Neem · Garlic · Aloe Vera · Milkweed Extracts",
    image: PestControlImg,
    subtitle: "Organic Herbal",
    description:
      "Om Namahsivaya Internationals Organic Herbal Pest Control Solution is made from neem seed, neem leaf, garlic, aloe vera and milkweed extracts. Effective against common pests while safe for crops and the environment.",
    benefits: [
      "Neem Seeds Extract",
      "Neem Leaf Extract",
      "Garlic Extract",
      "Aloe Vera Extract",
      "Milkweed Extract",
    ],
    benefitsLabel: "Composition:",
    extras: [
      { label: "Controls", value: "Aphids · Whiteflies · Thrips · Mites · Caterpillars" },
      { label: "Benefits", value: "100% Herbal & Natural · No Chemical Residue" },
    ],
  },
  {
    id: "growth-booster",
    icon: <TrendingUpIcon sx={{ fontSize: 32, color: "#0f6a45" }} />,
    name: "Organic Growth Booster",
    tagline: "Natural Plant Strength Enhancer — Advanced Organic Blend",
    image: GrowthBoosterImg,
    subtitle: "Natural Plant Strength Enhancer",
    description:
      "A premium formulation combining: Fine organic cow dung powder, Active VAM biofertilizer",
    benefits: [
      "Faster root establishment",
      "Balanced organic nutrition",
      "Higher nutrient efficiency",
      "Suitable for modern and greenhouse farming",
    ],
    benefitsLabel: "Advantages:",
    extras: [
      {
        label: "This product bridges",
        value: "traditional organic nutrition with advanced biological performance.",
      },
      {
        label: "Made from",
        value: "Cow Dung Powder · Sugarcane Juice · Milk · Curd · Ghee",
      },
    ],
  },
  {
    id: "coco-blocks",
    icon: <ViewInArIcon sx={{ fontSize: 32, color: "#0f6a45" }} />,
    name: "Coco Blocks",
    tagline: "Premium Growing Media — sustainably sourced and processed.",
    image: CocoPithImg,
    subtitle: "Premium Growing Media",
    description:
      "Sustainably sourced and processed, our Coco Blocks offer:",
    benefits: [
      "Excellent Water Retention",
      "Superior Root Aeration",
      "Balanced pH",
      "High Cation Exchange Capacity",
      "Ideal for Hydroponics & Nursery Cultivation",
    ],
    meta: [
      "Available in Blocks & Loose Forms",
      "Low EC | Export Quality",
    ],
  },
];

const ProductsShowcaseSection = () => {
  const [expanded, setExpanded] = useState(null);
  const selectedProduct = expanded ? productsData.find((p) => p.id === expanded) : null;

  const toggleProduct = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [expanded]);

  // Close modal on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setExpanded(null);
    };
    if (expanded) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [expanded]);

  return (
    <section className="products-showcase-section premium-section">
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box textAlign="center" mb={6}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp}>
              <span className="premium-badge">Our Organic Range</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="premium-heading">
              Premium Organic <span>Fertilisers</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="premium-subtext centered">
              Scientifically tested, farmer-friendly organic solutions to nourish
              your soil naturally.
            </motion.p>
          </motion.div>
        </Box>

        {/* Small Cards Grid */}
        <Grid container spacing={3}>
          {productsData.map((product, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ height: "100%" }}
              >
                <div
                  className={`product-small-card ${expanded === product.id ? "active" : ""}`}
                  onClick={() => toggleProduct(product.id)}
                >
                  {product.heroBadge && (
                    <span className="hero-product-badge">{product.heroBadge}</span>
                  )}
                  <div className="product-icon">{product.icon}</div>
                  <h3>{product.name}</h3>
                  <p className="product-tagline">{product.tagline}</p>
                </div>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="product-modal-backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setExpanded(null)}
            key="product-modal-backdrop"
          >
            <motion.div
              className="product-modal"
              style={{ backgroundImage: `url(${selectedProduct.image})` }}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              key="product-modal"
            >
              {/* Overlay + Scrollable Content */}
              <div className="product-modal-overlay">
                <button
                  className="product-modal-close"
                  onClick={() => setExpanded(null)}
                >
                  <CloseIcon sx={{ fontSize: 20 }} />
                </button>

                <div className="product-modal-content">
                  {selectedProduct.heroBadge && (
                    <span className="hero-product-badge">{selectedProduct.heroBadge}</span>
                  )}
                  <h2>{selectedProduct.name}</h2>
                  {selectedProduct.subtitle && (
                    <p className="detail-subtitle">{selectedProduct.subtitle}</p>
                  )}
                  <p>{selectedProduct.description}</p>

                  {selectedProduct.benefitsLabel && (
                    <p style={{ fontWeight: 600, color: "#232323", marginBottom: 8 }}>
                      {selectedProduct.benefitsLabel}
                    </p>
                  )}

                  <ul className="detail-list">
                    {selectedProduct.benefits.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>

                  {selectedProduct.extras &&
                    selectedProduct.extras.map((ex, j) => (
                      <p key={j} style={{ fontSize: 14, marginBottom: 6 }}>
                        <strong style={{ color: "#0f6a45" }}>{ex.label}:</strong>{" "}
                        {ex.value}
                      </p>
                    ))}

                  {selectedProduct.meta && (
                    <div className="detail-meta">
                      {selectedProduct.meta.map((m, j) => (
                        <span key={j} className="meta-tag">
                          {m}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// ============================================================
// 5. EXPORT & CONTACT SECTION
// ============================================================
const ExportContactSection = () => {
  const exportItems = [
    { icon: <InventoryIcon sx={{ fontSize: 20, color: "#0f6a45" }} />, text: "Bulk and retail packing options" },
    { icon: <SyncIcon sx={{ fontSize: 20, color: "#0f6a45" }} />, text: "Consistent supply" },
    { icon: <HighQualityIcon sx={{ fontSize: 20, color: "#0f6a45" }} />, text: "Export-ready quality standards" },
    { icon: <SupportAgentIcon sx={{ fontSize: 20, color: "#0f6a45" }} />, text: "Technical support available" },
  ];

  return (
    <section className="export-contact-section premium-section">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <Box textAlign="center" mb={6}>
            <motion.div variants={fadeUp}>
              <span className="premium-badge">Global Reach</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="premium-heading">
              Export &amp; Contact <span>Information</span>
            </motion.h2>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {/* Export Capability */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="export-card">
                <h3>Export Capability</h3>
                <ul className="export-list">
                  {exportItems.map((item, i) => (
                    <li key={i}>
                      <div className="export-icon">{item.icon}</div>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="contact-premium-card">
                <h3>Contact Us</h3>
                <p className="contact-brand">OM NAMAHSIVAYA INTERNATIONALS</p>

                <div className="contact-item">
                  <PlaceIcon sx={{ fontSize: 20 }} />
                  <span>Coimbatore, Tamil Nadu, India</span>
                </div>
                <div className="contact-item">
                  <EmailIcon sx={{ fontSize: 20 }} />
                  <a href="mailto:info@namachivaya.com">
                    info@namachivaya.com
                  </a>
                </div>
                <div className="contact-item">
                  <PhoneIcon sx={{ fontSize: 20 }} />
                  <a href="tel:+919677703476">+91 96777 03476</a>
                </div>
                <div className="contact-item">
                  <LanguageIcon sx={{ fontSize: 20 }} />
                  <span>www.omnamahsivaya.com</span>
                </div>

                <div className="export-worldwide">
                  <PublicIcon sx={{ fontSize: 20, mr: 1, verticalAlign: "middle" }} />
                  We Export Worldwide
                </div>
              </div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

// ============================================================
// 6. WHY CHOOSE US SECTION
// ============================================================
const whyChooseData = [
  { icon: <VerifiedIcon sx={{ fontSize: 30, color: "#0f6a45" }} />, title: "100% Organic & Natural" },
  { icon: <ScienceIcon sx={{ fontSize: 30, color: "#0f6a45" }} />, title: "Lab Tested for Quality" },
  { icon: <RecyclingIcon sx={{ fontSize: 30, color: "#0f6a45" }} />, title: "Eco-Friendly & Sustainable" },
  { icon: <LocalShippingIcon sx={{ fontSize: 30, color: "#0f6a45" }} />, title: "Export-Ready Packaging" },
  { icon: <VolunteerActivismIcon sx={{ fontSize: 30, color: "#0f6a45" }} />, title: "Trusted by Organic Farmers" },
];

const WhyChooseUsSection = () => (
  <section className="why-choose-premium premium-section">
    <Container>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <Box textAlign="center" mb={6}>
          <motion.div variants={fadeUp}>
            <span className="premium-badge">Why Choose Us</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="premium-heading">
            Why Choose <span>Us</span>
          </motion.h2>
        </Box>
      </motion.div>

      <Grid container spacing={3} justifyContent="center">
        {whyChooseData.map((item, i) => (
          <Grid item xs={6} sm={4} md key={i}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="why-choose-card">
                <div className="why-icon">{item.icon}</div>
                <h4>{item.title}</h4>
              </div>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <motion.p
        className="why-tagline"
        style={{ textAlign: "center" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Rooted in Indian soil. Trusted by global farms.
      </motion.p>
    </Container>
  </section>
);

// ============================================================
// 7. CTA BANNER SECTION
// ============================================================
const CTABannerSection = () => (
  <section className="cta-premium">
    <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.p variants={fadeUp} className="cta-overline">
          Get In Touch
        </motion.p>
        <motion.h2 variants={fadeUp}>
          Ready to Nourish Your Soil Naturally?
        </motion.h2>
        <motion.p variants={fadeUp} className="cta-sub">
          Contact us for bulk orders, expert consultation, or product inquiries
        </motion.p>
        <motion.div variants={fadeUp} className="cta-buttons">
          <a href="tel:+919677703476" className="cta-btn-primary">
            <PhoneIcon sx={{ fontSize: 18 }} />
            Call: +91 96777 03476
          </a>
          <a href="mailto:info@namachivaya.com" className="cta-btn-secondary">
            <EmailIcon sx={{ fontSize: 18 }} />
            Email Us
          </a>
        </motion.div>
      </motion.div>
    </Container>
  </section>
);

// ============================================================
// 8. QUOTE SLIDER SECTION
// ============================================================
const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute", right: 20, top: "50%",
      transform: "translateY(-50%)", bgcolor: "white",
      boxShadow: 2, "&:hover": { bgcolor: "grey.100" },
    }}
  >
    <ArrowForwardIosIcon fontSize="small" />
  </IconButton>
);

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute", left: 20, top: "50%",
      transform: "translateY(-50%)", bgcolor: "white",
      boxShadow: 2, "&:hover": { bgcolor: "grey.100" },
    }}
  >
    <ArrowBackIosNewIcon fontSize="small" />
  </IconButton>
);

const QuoteSliderSection = () => {
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
    <section className="quote-premium">
      <img src={LeefImgTwo} alt="" className="hero-floating-leaf" style={{ top: 30, left: 30, width: 80 }} />
      <img src={LeefImg} alt="" className="hero-floating-leaf" style={{ top: 50, right: 50, width: 100 }} />

      <Container maxWidth="md">
        <Slider {...settings}>
          {quotes.map((q, i) => (
            <Box key={i} sx={{ py: 4 }}>
              <Box
                component="img"
                src={QuoteAvatar}
                alt={q.author}
                sx={{ width: 80, height: 80, borderRadius: "50%", mx: "auto", mb: 2, objectFit: "cover" }}
              />
              <Typography
                variant="h6"
                sx={{ fontStyle: "italic", maxWidth: 650, mx: "auto", mb: 2, color: "text.primary" }}
              >
                &ldquo;{q.text}&rdquo;
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {q.author} &ndash; {q.role}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

// ============================================================
// 9. EARTH 3D SECTION
// ============================================================
const Earth3DSection = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 70}%`,
    delay: `${Math.random() * 5}s`,
    size: 3 + Math.random() * 4,
  }));

  return (
    <section className="earth3d-section">
      {/* Floating particles */}
      <div className="floating-particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <Container sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="earth-container">
            <div className="earth-sphere" />
          </div>
        </motion.div>

        <motion.h2
          className="earth-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          From SOIL to <span className="soul">SOUL</span>
        </motion.h2>

        <motion.p
          className="earth-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Regenerating Earth, Naturally
        </motion.p>
      </Container>

      {/* Soil layers */}
      <div className="soil-layers">
        <div className="soil-layer grass" />
        <div className="soil-layer topsoil" />
        <div className="soil-layer subsoil" />
      </div>
    </section>
  );
};

// ============================================================
// MAIN HOME PAGE COMPONENT
// ============================================================
const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <NavbarS2 hclass={"wpo-header-style-2"} Logo={LogoOhm} isTransparent={true} />

      {/* — HERO — */}
      <HeroSection />

      {/* — ABOUT OM NAMAHSIVAYA INTERNATIONALS — */}
      <AboutSection />

      {/* — OUR FARMING PHILOSOPHY — */}
      <PhilosophySection />

      {/* — PRODUCTS SHOWCASE (Fertilisers) — */}
      <ProductsShowcaseSection />

      {/* — FOOD PRODUCTS (existing) — */}
      <ProductSection />

      {/* — EXPORT & CONTACT INFORMATION — */}
      <ExportContactSection />

      {/* — WHY CHOOSE US — */}
      <WhyChooseUsSection />

      {/* — CTA BANNER — */}
      <CTABannerSection />

      {/* — QUOTE SLIDER — */}
      <QuoteSliderSection />

      {/* — EARTH 3D (removed) — */}
      {/* <Earth3DSection /> */}

      {/* — PARTNERS (existing) — */}
      <PartnersSection />

      {/* — FOUNDER (existing) — */}
      <TeamSection />

      {/* — FOOTER (existing) — */}
      <Footer hclass={"footer-section"} />

      {/* — SCROLLBAR — */}
      <Scrollbar />

      <SignUpModal open={showModal} onClose={() => setShowModal(false)} />
    </Fragment>
  );
};

export default HomePage;
