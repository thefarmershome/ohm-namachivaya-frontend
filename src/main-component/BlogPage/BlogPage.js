import React, { Fragment } from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList'
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const BlogPage = () => {
    return (
        <Fragment>
            <NavbarS2 hclass={'wpo-header-style-2'} />
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'} />
            <BlogList />
            <Footer FooterShape={false} />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogPage;

