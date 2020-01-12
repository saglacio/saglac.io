import React from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Section from '@/components/shared/Section';
import Typography from '@/components/shared/Typography';

const AboutSection = () => (
  <Section className="io-about-section" dark>
    <Row>
      <Col>
        <Typography variant="h4" uppercase>
          Saglac IO
        </Typography>
        <Typography light className="mb-0">
          Depuis 2013, le Saglac IO est une communauté bénévole de professionnels et d'amateurs
          passionnés de technologies qui partagent et s'entraident toute l'année.
        </Typography>
      </Col>
      <Col>
        <Typography variant="h4" uppercase>
          Meetups
        </Typography>
        <Typography light className="mb-0">
          À tous les mois, dans une formule 5 à 7 informel, la communauté
          partagent leurs dernières découvertes dans de courtes présentations.
        </Typography>
      </Col>
      <Col>
        <Typography variant="h4" uppercase>
          Conférence
        </Typography>
        <Typography light className="mb-0">
          Anuellement, une journée entière est dédiée à des présentations plus
          complètes centrées sur les technologies du web, du jeu vidéo,
          ou sur le développement en général.
        </Typography>
      </Col>
    </Row>
  </Section>
);

export default AboutSection;
