import '@/scss/main.scss';
import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import config from '~/SiteConfig';
import Footer from '@/components/layout/Footer';
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
    {intro || <PageIntro title={title} />}
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
