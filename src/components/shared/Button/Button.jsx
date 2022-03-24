import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import BootstrapButton from 'reactstrap/lib/Button';
import Link from '@/components/shared/Link';
import './Button.scss';

const Button = ({
  to,
  className,
  color = 'primary',
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
    outline={outline}
    color={color}
    {...props}
  >
    {icon && <div className="icon">{icon}</div>}
    {children}
  </BootstrapButton>
);

Button.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  outline: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'conference', 'dark', 'link']),
  to: PropTypes.string,
  icon: PropTypes.node,
  children: PropTypes.node,
};

export default Button;
