import React from 'react';
import cn from 'classnames';
import Link from '@/components/shared/Link';
import './MainNavItem.scss';

const MainNavItem = ({ to, className, children, ...props }) => {
  const Tag = to ? Link : 'a';

  return (
    <Tag
      to={to}
      className={cn('io-main-nav-item', className)}
      {...(to
        ? {
            // Link component props
            activeClassName: 'active',
          }
        : {})}
      {...props}
    >
      {children}
    </Tag>
  );
};
export default MainNavItem;
