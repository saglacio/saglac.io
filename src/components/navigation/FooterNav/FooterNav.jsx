import React from 'react';
import Nav from 'reactstrap/lib/Nav';
import NavItem from 'reactstrap/lib/NavItem';
import NavLink from 'reactstrap/lib/NavLink';

const FooterNav = () => (
  <Nav className="io-footer-nav">
    <NavItem>
      <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">Another Link</NavLink>
    </NavItem>
    <NavItem>
      <NavLink disabled href="#">Disabled Link</NavLink>
    </NavItem>
  </Nav>
);

export default FooterNav;
