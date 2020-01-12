import React from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Section from '@/components/shared/Section';
import Typography from '@/components/shared/Typography';
import SpeakerCard from '@/components/shared/SpeakerCard';

const NextEventSection = () => (
  <Section
    className="io-about-section"
    title="Événement"
    subtitle="Les informations sur la prochaine rencontre mensuelle."
  >
    <Row>
      <Col>
        <SpeakerCard author="Émile B" talk="Configuration hell" />
      </Col>
      <Col>
        <SpeakerCard author="Émile B" talk="Configuration hell" />
      </Col>
    </Row>
  </Section>
);

export default NextEventSection;
