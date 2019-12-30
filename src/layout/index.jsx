import React from 'react';
import Helmet from 'react-helmet';
import config from '../../SiteConfig';
import './index.css';

const MainLayout = ({ children }) => (
  <div className="layout-container">
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <html lang="en" />
    </Helmet>
    {children}
  </div>
);

export default MainLayout;
