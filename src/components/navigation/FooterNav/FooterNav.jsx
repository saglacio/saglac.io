import React from 'react';
import Nav from 'reactstrap/lib/Nav';
import FooterNavItem from './FooterNavItem';

const LINKS = [
  {
    children: 'Saglac IO Conference',
    href: 'https://conference.saglac.io/',
    targetBlank: true,
  },
];

const FooterNav = () => (
  <Nav vertical className="io-footer-nav">
    {LINKS.map((linkProps) => <FooterNavItem {...linkProps} />)}
  </Nav>
);

export default FooterNav;
