import React from 'react';
import Helmet from 'react-helmet';
import config from '~/SiteConfig';
import Layout from '@/layout';
import './AboutPage.scss';

const AboutPage = () => (
  <Layout>
    <div className="about-container">
      <Helmet title={`About | ${config.siteTitle}`} />
    Edit the components/pages/AboutPage
    </div>
  </Layout>
);

export default AboutPage;
