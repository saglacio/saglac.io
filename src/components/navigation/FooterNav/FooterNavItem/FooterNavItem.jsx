import React from 'react';
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
    <div className="io-footer-nav-item">
      <FontAwesomeIcon icon={faAngleRight} className="icon" />
      <Tag
        className="content"
        tag={to ? Link : 'a'}
        target={targetBlank ? '_blank' : undefined}
        to={to}
        {...(to ? {
          // Link component props
          activeClassName: 'active',
        } : {})}
        {...props}
      >
        {children}
      </Tag>
    </div>
  );
};

export default FooterNavItem;
