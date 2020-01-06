import React from 'react';
import cn from 'classnames';
import BootstrapButton from 'reactstrap/lib/Button';
import './Button.scss';

const Button = ({ className, color, ...props }) => (
  <BootstrapButton
    className={cn('io-button', className)}
    pill
    outline={color === 'primary'}
    color={color}
    {...props}
  />
);

export default Button;
