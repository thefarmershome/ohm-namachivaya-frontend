import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '../../images/logo.svg'
import Whishlist from '../../components/WishlistPageSection/whishlist';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';


const WhishListPage = () => {





    return (
        <Fragment>
            {/* <HeaderTop /> */}
           <NavbarS2 hclass={'wpo-header-style-2'} Logo={Logo} />
            <PageTitle pageTitle={'WhishList'} pagesub={'WhishList'} />
            <Whishlist/>
            <Footer FooterShape={false} />
            <Scrollbar />
        </Fragment>
    )
};

export default WhishListPage;