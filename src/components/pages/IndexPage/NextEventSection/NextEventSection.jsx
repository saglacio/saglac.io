import React from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import { eventType } from '@/types';
import Section from '@/components/shared/Section';
import TalkCard from '@/components/shared/TalkCard';
import EventDetails from './EventDetails';

const TALK_LAYOUT = [2, 2, 3, 2];

const NextEventSection = ({
  event: {
    title,
    // date,
    formattedDate,
    event_url,
    location,
    talks,
    description,
  },
}) => (
  <Section id="next-event" title="Prochain événement" subtitle={formattedDate}>
    {talks.length > 0 && (
      <Row>
        {talks.map((talk) => (
          <Col
            key={talk.title}
            xs={12}
            lg={12 / (TALK_LAYOUT[talks.length - 1] ?? 3)}
          >
            <TalkCard talk={talk} />
          </Col>
        ))}
      </Row>
    )}
    <EventDetails
      location={location}
      title={title}
      description={description}
      eventUrl={event_url}
    />
  </Section>
);

NextEventSection.propTypes = {
  event: eventType,
};

export default NextEventSection;
