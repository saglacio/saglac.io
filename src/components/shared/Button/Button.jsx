import React from 'react';
import cn from 'classnames';
import BootstrapButton from 'reactstrap/lib/Button';
import Link from '@/components/shared/Link';
import './Button.scss';

const Button = ({
  to,
  className,
  color,
  ...props
}) => (
  <BootstrapButton
    tag={to ? Link : undefined}
    to={to}
    className={cn('io-button', className)}
    outline={color === 'primary'}
    color={color}
    {...props}
  />
);

export default Button;
