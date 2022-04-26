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
    <MainNavItem to="/about">À propos</MainNavItem>
    <MainNavItem to="/faq">FAQ</MainNavItem>
    <Button
      href="https://conference.saglac.io/"
      target="_blank"
      size="sm"
      className="ml-3"
      outline
    >
      {'Conference '}
      <FontAwesomeIcon size="sm" icon={faExternalLinkAlt} />
    </Button>
  </nav>
);

export default MainNav;
