import React from 'react';
import Nav from 'reactstrap/lib/Nav';
import FooterNavItem from './FooterNavItem';
import './FooterNav.scss';

const LINKS = [
  {
    children: 'Saglac IO Conference',
    href: 'https://conference.saglac.io/',
    targetBlank: true,
  },
  {
    children: 'About',
    to: '/about',
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
