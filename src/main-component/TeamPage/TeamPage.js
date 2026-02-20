import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import TeamSection from '../../components/TeamSection/TeamSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'
import BecomeFarmer from '../BecomeFarmer/becomeFarmer';


const ServicePage = () => {
    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            {/* <PageTitle pageTitle={'Team'} pagesub={'Team'} /> */}
            <BecomeFarmer/>
            <TeamSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ServicePage;
