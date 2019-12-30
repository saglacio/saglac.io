import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import config from '../../SiteConfig';

const HomePage = () => (
  <Layout className="home-page">
    <Helmet title={`Oups | ${config.siteTitle}`} />
      404
  </Layout>
);

export default HomePage;
