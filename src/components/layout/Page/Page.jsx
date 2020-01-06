import React from 'react';
import Helmet from 'react-helmet';
import config from '~/SiteConfig';
import '@/scss/main.scss';
import './Page.scss';

const Page = ({ children }) => (
  <div className="io-layout">
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <html lang="en" />
    </Helmet>
    {children}
  </div>
);

export default Page;
