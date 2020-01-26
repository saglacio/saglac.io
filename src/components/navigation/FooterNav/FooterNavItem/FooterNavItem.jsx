import React from 'react';
// import NavItem from 'reactstrap/lib/NavItem';
// import NavLink from 'reactstrap/lib/NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Link from '@/components/shared/Link';
import './FooterNavItem.scss';

const FooterNavItem = ({
  to,
  targetBlank,
  children,
  ...props
}) => {
  const Tag = to ? Link : 'a';
  return (
    <li className="io-footer-nav-item">
      <FontAwesomeIcon icon={faAngleRight} className="icon" />
      <Tag
        className="content"
        tag={to ? Link : 'a'}
        target={targetBlank ? '_blank' : undefined}
        {...props}
      >
        {children}
      </Tag>
    </li>
  );
};

export default FooterNavItem;
