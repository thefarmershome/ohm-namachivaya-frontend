import React, { Fragment } from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Contactpage from '../../components/Contactpage/Contactpage';


const ContactPage = () => {
    return (
        <Fragment>
            <NavbarS2 hclass={'wpo-header-style-2'} />
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} />
            
            <Contactpage />
            <Footer FooterShape={false} />
            <Scrollbar />
        </Fragment>
    )
};
export default ContactPage;





