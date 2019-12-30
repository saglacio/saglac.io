import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import About from '../components/About/About';
import config from '../../SiteConfig';

const AboutPage = () => (
  <Layout>
    <div className="about-container">
      <Helmet title={`About | ${config.siteTitle}`} />
      <About />
    </div>
  </Layout>
);

export default AboutPage;
