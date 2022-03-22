import React from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import TalkCard from './TalkCard';

export default {
  title: 'Shared/TalkCard',
};

const MOCK_TALK = {
  title: 'NPM: NPM Package Manager',
  authors: [
    {
      name: 'Oven Cooling',
    },
  ],
};

export const DefaultTalkCard = () => (
  <Row>
    <Col lg={{ size: 6 }}>
      <TalkCard talk={MOCK_TALK} />
    </Col>
  </Row>
);
