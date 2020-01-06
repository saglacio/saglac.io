import React from 'react';
import Helmet from 'react-helmet';
import config from '~/SiteConfig';
import Page from '@/components/layout/Page';
import './AboutPage.scss';

const AboutPage = () => (
  <Page>
    <div className="about-container">
      <Helmet title={`About | ${config.siteTitle}`} />
    Edit the components/pages/AboutPage
    </div>
  </Page>
);

export default AboutPage;
