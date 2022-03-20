import React from 'react';
import config from '~/SiteConfig';
import PageLayout from '@/components/layout/PageLayout';
// import IntroSection
import './IndexPage.scss';
import IntroSection from './IntroSection';
import AboutSection from './AboutSection';
import NextEventSection from './NextEventSection';

const IndexPage = ({ event }) => (
  <PageLayout className="home-page" title="Home">
    {console.log('dEBUG', event)}
    <IntroSection />
    <AboutSection />
    <NextEventSection />
  </PageLayout>
);

export default IndexPage;
