import React from 'react';
import Button from '@/components/shared/Button';
import MainNavItem from './MainNavItem';
import './MainNav.scss';

const MainNav = () => (
  <nav className="io-main-nav">
    <MainNavItem to="/">Meetup</MainNavItem>
    <MainNavItem to="/about">About</MainNavItem>
    <MainNavItem to="/faq">Faq</MainNavItem>
    <Button
      size="sm"
      color="primary"
      href="https://conference.saglac.io/"
      target="_blank"
      className="ml-3"
    >
      Conference
    </Button>
  </nav>
);

export default MainNav;
