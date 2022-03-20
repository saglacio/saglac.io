import '@/scss/main.scss';
import './PageLayout.scss';
import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import config from '~/SiteConfig';
import Footer from '@/components/layout/Footer';
import PageHeader from './PageHeader';

const PageLayout = ({ children, title }) => (
  <div className="io-layout">
    <Helmet title={`${title} | ${config.siteTitle}`}>
      <meta name="description" content={config.siteDescription} />
      <html lang="en" />
    </Helmet>
    <PageHeader />
    {children}
    <Footer config={config} />
  </div>
);

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default PageLayout;
