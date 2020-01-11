import React from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Section from '@/components/shared/Section';
import './AboutSection.scss';
import Typography from '@/components/shared/Typography';

const AboutSection = () => (
  <Section className="io-about-section" dark>
    <Row>
      <Col lg={6}>
        <Typography variant="h4" uppercase>
          Qu'est-ce que le Saglac IO?
        </Typography>
        <Typography light className="mb-0">
          Le Saglac IO est un événement mensuel gratuit organisé par une
          communauté de passionnés de technologies.
          Dans une formule 5 à 7 informel, les passionnés d'informatique du
          Saguenay—Lac-St-Jean partagent leur passion et leurs dernières découvertes.
        </Typography>
      </Col>
      <Col>
        <Typography variant="h4" uppercase>
          Où?
        </Typography>
        <Typography light className="mb-0">
          En alternance entre Saguenay et Alma. Chaque événement mentionne où il
          aura lieu, dans un restaurant, à l'UQAC, etc.
        </Typography>
      </Col>
      <Col>
        <Typography variant="h4" uppercase>
          Quand?
        </Typography>
        <Typography light className="mb-0">
          À tous les mois, une date est décidée selon la disponibilité des
          organisateurs et présentateurs.
        </Typography>
      </Col>
    </Row>
  </Section>
);

export default AboutSection;
