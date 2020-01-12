import React from 'react';
import { text, boolean, select } from '@storybook/addon-knobs';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import SpeakerCard from './SpeakerCard';

export default {
  title: 'Shared/SpeakerCard',
};

export const DefaultSpeakerCard = () => {
  const color = select('Color?', ['default', 'dark', 'secondary']);
  return (
    <Row>
      <Col lg={{ size: 6 }}>
        <SpeakerCard />
      </Col>
      <Col lg={{ size: 6 }}>
        <SpeakerCard />
      </Col>
    </Row>
  );
};
