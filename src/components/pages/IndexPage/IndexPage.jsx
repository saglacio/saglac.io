import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../../../layout';
import config from '../../../../SiteConfig';
import './IndexPage.scss';

const IndexPage = () => (
  <Layout className="home-page">
    <Helmet title={`Home | ${config.siteTitle}`} />
    Test home page
    {' '}
    <a href="#top" alt="">test link</a>
  </Layout>
);

export default IndexPage;
