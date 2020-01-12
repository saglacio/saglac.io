import React from 'react';
import Helmet from 'react-helmet';
import config from '~/SiteConfig';
import Page from '@/components/layout/Page';
// import IntroSection
import './IndexPage.scss';
import IntroSection from './IntroSection';
import AboutSection from './AboutSection';
import NextEventSection from './NextEventSection';

const IndexPage = () => (
  <Page className="home-page">
    <Helmet title={`Home | ${config.siteTitle}`} />
    <IntroSection />
    <AboutSection />
    <NextEventSection />
  </Page>
);

export default IndexPage;
