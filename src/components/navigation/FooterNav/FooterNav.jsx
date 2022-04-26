import React from 'react';
import Nav from 'reactstrap/lib/Nav';
import FooterNavItem from './FooterNavItem';
import './FooterNav.scss';

const LINKS = [
  {
    children: 'La conférence',
    href: 'https://conference.saglac.io/',
    targetBlank: true,
  },
  {
    children: 'About',
    to: '/about',
  },
  {
    children: 'Nous joindre',
    to: '/contact',
  },
  {
    children: 'FAQ',
    to: '/faq',
  },
];

const FooterNav = () => (
  <Nav tag="nav" vertical className="io-footer-nav">
    {LINKS.map((linkProps) => (
      <FooterNavItem {...linkProps} />
    ))}
  </Nav>
);

export default FooterNav;
