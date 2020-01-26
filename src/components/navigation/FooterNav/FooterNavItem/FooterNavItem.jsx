import React from 'react';
import NavItem from 'reactstrap/lib/NavItem';
import NavLink from 'reactstrap/lib/NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Link from '@/components/shared/Link';

const FooterNavItem = ({
  to, targetBlank, children, ...props
}) => (
  <NavItem>
    <FontAwesomeIcon icon={faAngleRight} />
    <NavLink
      tag={to ? Link : 'a'}
      target={targetBlank ? '_blank' : undefined}
      {...props}
    >
      {children}
    </NavLink>
  </NavItem>
);

export default FooterNavItem;
