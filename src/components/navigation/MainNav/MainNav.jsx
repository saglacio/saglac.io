import React from 'react';
import cn from 'classnames';
import Button from '@/components/shared/Button';
import MainNavItem from './MainNavItem';
import './MainNav.scss';

const MainNav = ({ className, vertical, ...props }) => (
  <nav
    className={cn('io-main-nav', className, {
      'd-flex flex-column vertical': vertical,
    })}
    {...props}
  >
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
