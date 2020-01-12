import React from 'react';
import cn from 'classnames';
import Link from '@/components/shared/Link';
import LogoImg from '~/static/logos/SaglacIO_Logo_Meetups_Inverted.png';

const LogoLink = ({ className }) => (
  <div className={cn('io-logo', className)}>
    <Link to="/">
      <img src={LogoImg} alt="" title="" />
    </Link>
  </div>
);

export default LogoLink;
