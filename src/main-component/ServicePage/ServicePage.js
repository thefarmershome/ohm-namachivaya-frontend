import React, { Fragment } from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';


const ServicePage = () => {
    return (
        <Fragment>
            <NavbarS2 hclass={'wpo-header-style-2'} />
            <PageTitle pageTitle={'Service'} pagesub={'Service'} />
            <ServiceSection SectionTitleShow={false}  />
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default ServicePage;
