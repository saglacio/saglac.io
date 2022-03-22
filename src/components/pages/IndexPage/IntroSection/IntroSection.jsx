import React from 'react';
// import Typo
import './IntroSection.scss';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Typography from '@/components/shared/Typography';
import Button from '@/components/shared/Button';

const IntroSection = () => (
  <section id="intro" className="io-intro-section">
    <div className="intro-wrapper">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={{ size: 8 }} className="">
            <Typography variant="h1" className="display-3 mb-5" uppercase light>
              Rencontre
              <br />
              technologique
              <br />
              <Typography tag="div" className="h2" uppercase>
                du Saguenay—Lac-St-Jean
              </Typography>
            </Typography>
            <Button size="lg">Participer!</Button>
            <Button outline size="lg">
              En savoir plus
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  </section>
);

export default IntroSection;
