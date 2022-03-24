import React from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Section from '@/components/shared/Section';
import Typography from '@/components/shared/Typography';

const MeetupExplanation = () => (
  <Section secondary>
    <Row>
      <Col xs={12} lg={4}>
        <Typography variant="h4" uppercase>
          La formule
        </Typography>
        <Typography>
          Réseautage, discussions et présentations. Courtes présentations de
          5-15 minutes sur des sujets reliés à l'informatique et aux
          technologies s'y rattachant.
        </Typography>
      </Col>
      <Col xs={12} lg={4}>
        <Typography variant="h4" uppercase>
          À quel prix?
        </Typography>
        <Typography>
          L'événement est totalement gratuit. Par contre, toute consommation est
          généralement aux frais du participant.
        </Typography>
      </Col>
      <Col xs={12} lg={4}>
        <Typography variant="h4" uppercase>
          Pour qui?
        </Typography>
        <Typography>
          Ouvert au public, tous les passionnés de technologies, autant
          professionnels qu'amateurs, sont invités à se joindre à nous.
        </Typography>
      </Col>
    </Row>
  </Section>
);

export default MeetupExplanation;
