import React from 'react';
import Container from 'reactstrap/lib/Container';
import { Link } from 'gatsby';
import MainNav from '@/components/navigation/MainNav';
import LogoImg from '~/static/logos/SaglacIO_Logo_Meetups_Inverted.png';
import './PageHeader.scss';

const PageHeader = () => (
  <header className="io-header">
    <Container className="header-container">
      <div className="logo">
        <Link to="/">
          <img src={LogoImg} alt="" title="" />
        </Link>
      </div>
      <MainNav />
    </Container>
  </header>
);

export default PageHeader;
