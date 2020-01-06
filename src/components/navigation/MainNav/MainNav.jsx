import React from 'react';
import Nav from 'reactstrap/lib/Nav';
import { Link } from 'gatsby';
// import Nav from 'reactstrap/lib/Nav';
import './MainNav.scss';

const MainNav = () => (
  <Nav className="io-main-nav">
    <Link to="/">Test</Link>
  </Nav>
);

export default MainNav;
