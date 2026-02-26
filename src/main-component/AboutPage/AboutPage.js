import React, { Fragment } from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';

import Testimonial from '../../components/Testimonial/Testimonial';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';


const AboutPage = () => {
    return (
        <Fragment>
            <NavbarS2 hclass={'wpo-header-style-2'} />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <About hclass={'orico-about-section section-padding'} />
           
            <Testimonial />
            <BlogSection />
            <Footer  />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
