import React, { Fragment } from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Testimonial from '../../components/Testimonial/Testimonial';
import PartnersSection from '../../components/PartnersSection/PartnersSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';


const TestimonialPage = () => {
    return (
        <Fragment>
            <NavbarS2 hclass={'wpo-header-style-2'} />
            <PageTitle pageTitle={'Testimonial'} pagesub={'Testimonial'} />
            <Testimonial />
            <PartnersSection />
            <BlogSection/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TestimonialPage;