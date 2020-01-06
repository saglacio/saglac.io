import React from 'react';
import Helmet from 'react-helmet';
import config from '~/SiteConfig';
import Page from '@/components/layout/Page';
import './IndexPage.scss';

const IndexPage = () => (
  <Page className="home-page">
    <Helmet title={`Home | ${config.siteTitle}`} />
    Test home page
    {' '}
    <a href="#top" alt="">test link</a>
  </Page>
);

export default IndexPage;
