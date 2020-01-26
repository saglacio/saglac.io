import React from 'react';
import PropTypes from 'prop-types';
// import Link from '@/components/shared/Link';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import LogoLink from '@/components/shared/LogoLink';
import Typography from '@/components/shared/Typography';
import Section from '@/components/shared/Section';
import FooterNav from '@/components/navigation/FooterNav';
import FooterCol from './FooterCol';
import './Footer.scss';

const Footer = ({ config }) => {
  // const url = config.siteRss;
  const { copyright } = config;

  return (
    <footer className="io-footer">
      <Section className="footer-content">
        <Row>
          <FooterCol lg={4} md={6}>
            <LogoLink className="mb-4" />
            <Typography size="sm" light className="title-font">
              Le saglac.io est une communauté de passionnés de technologies,
              organisée par un groupe de bénévoles de la région qui ont le partage
              de connaissances à coeur.
            </Typography>
          </FooterCol>
          <FooterCol lg={4} md={6} title="Liens pratiques">
            <FooterNav />
          </FooterCol>
          <FooterCol lg={4} md={6} title="Nous contacter">
          test
          </FooterCol>
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
