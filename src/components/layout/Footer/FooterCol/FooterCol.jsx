import React from 'react';
import cn from 'classnames';
import Col from 'reactstrap/lib/Col';
import Typography from '@/components/shared/Typography';
import './FooterCol.scss';

const FooterCol = ({
  title,
  className,
  children,
  ...props
}) => (
  <Col className={cn('io-footer-col', className)} {...props}>
    {title && (
      <Typography uppercase variant="h4" className="h6">
        {title}
      </Typography>
    )}
    {children}
  </Col>
);

export default FooterCol;
