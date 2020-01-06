import React from 'react';
import Helmet from 'react-helmet';
import config from '~/SiteConfig';
import Page from '@/components/layout/Page';

const HomePage = () => (
  <Page className="home-page">
    <Helmet title={`Oups | ${config.siteTitle}`} />
      404
  </Page>
);

export default HomePage;
