import React from 'react';
import cn from 'classnames';
import Typography from '@/components/shared/Typography';
import './SectionHeader.scss';

const SectionHeader = ({ children, className, title, ...props }) => (
  <header className={cn('io-section-header', className)} {...props}>
    <Typography className="mb-1" variant="h2" uppercase>
      {title}
    </Typography>
    <Typography lead>{children}</Typography>
  </header>
);

export default SectionHeader;
