import '@/scss/main.scss';
import './Page.scss';
import React from 'react';
import Helmet from 'react-helmet';
import config from '~/SiteConfig';
import PageHeader from './PageHeader';

const Page = ({ children }) => (
  <div className="io-layout">
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <html lang="en" />
    </Helmet>
    <PageHeader />
    {children}
  </div>
);

export default Page;
