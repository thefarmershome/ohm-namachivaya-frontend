import React, { Fragment } from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageTitle from '../../components/pagetitle/PageTitle'
import ShopPageSection from '../../components/ShopPageSection/ShopPageSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '../../images/logo.svg'
import backgroundImageShop from '../../images/shop/breadcrumb_woo.jpg';


const ShopPage = () => {





    return (
        <Fragment>
            {/* <HeaderTop /> */}
            <NavbarS2 hclass={'wpo-header-style-2'} Logo={Logo} />
            <PageTitle pageTitle={'Our Products'} pagesub={'Our Products'} backgroundImage={backgroundImageShop}/>
            <ShopPageSection/>
            <Footer FooterShape={false} />
            <Scrollbar />
        </Fragment>
    )
};

export default ShopPage;