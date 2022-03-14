import React from 'react';
import cn from 'classnames';
import Link from '@/components/shared/Link';
import LogoImg from '~/static/images/logos/SaglacIO_Logo_Meetups_Inverted.png';
import './LogoLink.scss';

const LogoLink = ({ className }) => (
  <Link to="/" className={cn('io-logo', className)}>
    <img src={LogoImg} alt="Saglac IO logo" title="" />
  </Link>
);

export default LogoLink;
