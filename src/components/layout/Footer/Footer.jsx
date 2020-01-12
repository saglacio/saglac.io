import React from 'react';
import PropTypes from 'prop-types';
// import Link from '@/components/shared/Link';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
// import UserLinks from '@/components/UserLinks/UserLinks';
import LogoLink from '@/components/shared/LogoLink';
import Typography from '@/components/shared/Typography';
import './Footer.scss';

const Footer = ({ config }) => {
  // const url = config.siteRss;
  const { copyright } = config;

  return (
    <footer className="io-footer">
      <div className="footer-content">
        <Container>
          <Row>
            <Col lg={4} md={6}>
              <LogoLink />
              <Typography>
            Le saglac.io est une communauté de passionnés de technologies,
            organisée par un groupe de bénévoles de la région qui ont le partage de connaissances à coeur.
              </Typography>
            </Col>
            <Col lg={4} md={6}>
              <Typography uppercase variant="h4">
              Liens pratiques
              </Typography>
            </Col>
            <Col lg={4} md={6}>
              <Typography uppercase variant="h4">
                Nous contacter
              </Typography>
            </Col>
          </Row>
        </Container>
      </div>
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
