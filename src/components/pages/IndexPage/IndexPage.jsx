import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import './IndexPage.scss';
import { eventType } from '@/types';
import IntroSection from './IntroSection';
import AboutSection from './AboutSection';
import NextEventSection from './NextEventSection';
import MeetupExplanation from './MeetupExplanation';

const moreInfoId = 'about-saglac-io';

const IndexPage = ({ event }) => (
  <PageLayout className="home-page" title="Home">
    <IntroSection eventUrl={event?.event_url} moreInfoUrl={`#${moreInfoId}`} />
    <AboutSection id={moreInfoId} />
    <NextEventSection event={event} />
    <MeetupExplanation />
  </PageLayout>
);

IndexPage.propTypes = {
  event: eventType,
};

export default IndexPage;
