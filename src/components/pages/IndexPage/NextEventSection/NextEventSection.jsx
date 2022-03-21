import React from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Section from '@/components/shared/Section';
import LocationInfo from '@/components/shared/LocationInfo';
import { eventType } from '@/types';
import TalkCard from '@/components/shared/TalkCard';

const NextEventSection = ({
  event: { title, date, formattedDate, event_url, location, talks },
}) => (
  <>
    <Section
      className="io-about-section"
      title={title || 'Événement'}
      subtitle={formattedDate}
    >
      {talks.length > 0 && (
        <Row>
          {talks.map((talk) => (
            <Col key={talk.title}>
              <TalkCard talk={talk} />
            </Col>
          ))}
        </Row>
      )}
    </Section>
    <Section fluid>
      <LocationInfo location={location} />
    </Section>
  </>
);

NextEventSection.propTypes = {
  event: eventType,
};

export default NextEventSection;
