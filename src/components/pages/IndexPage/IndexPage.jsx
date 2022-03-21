import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import './IndexPage.scss';
import IntroSection from './IntroSection';
import AboutSection from './AboutSection';
import NextEventSection from './NextEventSection';

const IndexPage = ({ event }) => (
  <PageLayout className="home-page" title="Home">
    <IntroSection />
    <AboutSection />
    <NextEventSection event={event} />
  </PageLayout>
);

export default IndexPage;
