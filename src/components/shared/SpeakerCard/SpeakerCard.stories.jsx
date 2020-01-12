import React from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import SpeakerCard from './SpeakerCard';

export default {
  title: 'Shared/SpeakerCard',
};

export const DefaultSpeakerCard = () => (
  <Row>
    <Col lg={{ size: 6 }}>
      <SpeakerCard author="Émile Bergeron" talk="Test gatsby" />
    </Col>
  </Row>
);
