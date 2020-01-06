import React from 'react';
import cn from 'classnames';
import { Link } from 'gatsby';
import BootstrapButton from 'reactstrap/lib/Button';
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
    pill
    outline={color === 'primary'}
    color={color}
    {...props}
  />
);

export default Button;
