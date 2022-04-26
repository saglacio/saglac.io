import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { eventType } from '@/types';
import IntroSection from './IntroSection';
import AboutSection from './AboutSection';
import NextEventSection from './NextEventSection';
import MeetupExplanation from './MeetupExplanation';
import './IndexPage.scss';

const moreInfoId = 'about-saglac-io';

const IndexPage = ({ event }) => (
  <PageLayout
    className="home-page"
    title="Home"
    intro={
      <IntroSection
        eventUrl={event?.event_url}
        moreInfoUrl={`#${moreInfoId}`}
      />
    }
  >
    <AboutSection id={moreInfoId} />
    <NextEventSection event={event} />
    <MeetupExplanation />
  </PageLayout>
);

IndexPage.propTypes = {
  event: eventType,
};

export default IndexPage;
