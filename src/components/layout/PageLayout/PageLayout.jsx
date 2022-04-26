import '@/scss/main.scss';
import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import config from '~/SiteConfig';
import Footer from '@/components/layout/Footer';
import Typography from '@/components/shared/Typography';
import PageHeader from './PageHeader';
import PageIntro from './PageIntro';
import './PageLayout.scss';

const PageLayout = ({ children, title, intro }) => (
  <div className="io-layout">
    <Helmet title={`${title} | ${config.siteTitle}`}>
      <meta name="description" content={config.siteDescription} />
      <html lang="en" />
    </Helmet>
    <PageHeader />
    {intro || (
      <PageIntro>
        <Typography variant="h1" className="display-3 mb-5" uppercase light>
          {title}
        </Typography>
      </PageIntro>
    )}
    {children}
    <Footer config={config} />
  </div>
);

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.node,
  children: PropTypes.node,
};

export default PageLayout;
