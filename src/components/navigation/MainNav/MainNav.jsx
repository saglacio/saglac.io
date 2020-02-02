import React from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
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
      href="https://conference.saglac.io/"
      target="_blank"
      size="sm"
      className="ml-3"
      color="primary"
    >
      {'Conference '}
      <FontAwesomeIcon size="sm" icon={faExternalLinkAlt} />
    </Button>
  </nav>
);

export default MainNav;
