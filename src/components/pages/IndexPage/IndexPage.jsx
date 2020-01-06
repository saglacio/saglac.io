import React from 'react';
import Helmet from 'react-helmet';
import config from '~/SiteConfig';
import Page from '@/components/layout/Page';
// import IntroSection
import './IndexPage.scss';
import IntroSection from './IntroSection';

const IndexPage = () => (
  <Page className="home-page">
    <Helmet title={`Home | ${config.siteTitle}`} />
    <IntroSection />
  </Page>
);

export default IndexPage;
