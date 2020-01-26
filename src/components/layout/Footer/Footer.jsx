import React from 'react';
import PropTypes from 'prop-types';
// import Link from '@/components/shared/Link';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
// import UserLinks from '@/components/UserLinks/UserLinks';
import LogoLink from '@/components/shared/LogoLink';
import Typography from '@/components/shared/Typography';
import Section from '@/components/shared/Section';
import FooterNav from '@/components/navigation/FooterNav/FooterNav';
import './Footer.scss';

const Footer = ({ config }) => {
  // const url = config.siteRss;
  const { copyright } = config;

  return (
    <footer className="io-footer">
      <Section className="footer-content">
        <Row>
          <Col lg={4} md={6}>
            <LogoLink className="mb-2" />
            <Typography light>
            Le saglac.io est une communauté de passionnés de technologies,
            organisée par un groupe de bénévoles de la région qui ont le partage
            de connaissances à coeur.
            </Typography>
          </Col>
          <Col lg={4} md={6}>
            <Typography uppercase variant="h4" className="h6">
              Liens pratiques
            </Typography>
            <FooterNav />
          </Col>
          <Col lg={4} md={6}>
            <Typography uppercase variant="h4" className="h6">
                Nous contacter
            </Typography>
          </Col>
        </Row>
      </Section>
      <Container className="copyright">
        <small>
          {copyright}
        </small>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  config: PropTypes.object.isRequired,
};

export default Footer;
