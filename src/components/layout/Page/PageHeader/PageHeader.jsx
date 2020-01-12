import React from 'react';
import Container from 'reactstrap/lib/Container';
import MainNav from '@/components/navigation/MainNav';
import LogoLink from '@/components/shared/LogoLink';
import './PageHeader.scss';

const PageHeader = () => (
  <header className="io-header">
    <Container className="header-container">
      <LogoLink className="logo" />
      <MainNav />
    </Container>
  </header>
);

export default PageHeader;
