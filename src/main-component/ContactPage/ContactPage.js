import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Contactpage from '../../components/Contactpage/Contactpage';
import Logo from '../../images/logo.svg'
import NavbarS2 from '../../components/NavbarS2/NavbarS2';


const ContactPage = () => {
    return (
        <Fragment>
            {/* <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} /> */}
            <NavbarS2 hclass={'wpo-header-style-2'} Logo={Logo} />
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} />
            
            <Contactpage />
            <Footer FooterShape={false} />
            <Scrollbar />
        </Fragment>
    )
};
export default ContactPage;





