import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ShopPageSection from '../../components/ShopPageSection/ShopPageSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '../../images/logo.svg'
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import backgroundImageShop from '../../images/shop/breadcrumb_woo.jpg';


const ShopPage = () => {





    return (
        <Fragment>
            {/* <HeaderTop /> */}
            <NavbarS2 hclass={'wpo-header-style-2'} Logo={Logo} />
            <PageTitle pageTitle={'Shop'} pagesub={'Shop'} backgroundImage={backgroundImageShop}/>
            <ShopPageSection/>
            <Footer FooterShape={false} />
            <Scrollbar />
        </Fragment>
    )
};

export default ShopPage;