import React, { Fragment } from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import TeamSection from '../../components/TeamSection/TeamSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import BecomeFarmer from '../BecomeFarmer/becomeFarmer';


const ServicePage = () => {
    return (
        <Fragment>
            <NavbarS2 hclass={'wpo-header-style-2'} />
            {/* <PageTitle pageTitle={'Team'} pagesub={'Team'} /> */}
            <BecomeFarmer/>
            <TeamSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ServicePage;
