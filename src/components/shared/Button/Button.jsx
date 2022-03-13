import React from 'react';
import cn from 'classnames';
import BootstrapButton from 'reactstrap/lib/Button';
import Link from '@/components/shared/Link';
import './Button.scss';

const Button = ({
  to,
  className,
  color,
  outline,
  icon,
  children,
  ...props
}) => (
  <BootstrapButton
    tag={to ? Link : undefined}
    to={to}
    className={cn('io-button', className, {
      'icon-only': !children,
    })}
    outline={outline === Boolean(outline) ? outline : color === 'primary'}
    color={color}
    {...props}
  >
    {icon && <div className="icon">{icon}</div>}
    {children}
  </BootstrapButton>
);

export default Button;
