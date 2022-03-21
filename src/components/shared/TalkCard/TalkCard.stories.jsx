import React from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import TalkCard from './TalkCard';

export default {
  title: 'Shared/TalkCard',
};

export const DefaultSpeakerCard = () => (
  <Row>
    <Col lg={{ size: 6 }}>
      <TalkCard author="Émile Bergeron" talk="Test gatsby" />
    </Col>
  </Row>
);
