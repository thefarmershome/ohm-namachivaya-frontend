import React, { Fragment } from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Error from '../../components/404/404'
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';


const ErrorPage = () => {
    return (
        <Fragment>
            <NavbarS2 hclass={'wpo-header-style-2'} />
            <PageTitle pageTitle={'404'} pagesub={'404'} />
            <Error/>
            <Footer FooterShape={false} />
            <Scrollbar />
        </Fragment>
    )
};
export default ErrorPage;

