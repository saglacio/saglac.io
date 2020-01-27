import React from 'react';
import cn from 'classnames';
import Container from 'reactstrap/lib/Container';
import MainNav from '@/components/navigation/MainNav';
import LogoLink from '@/components/shared/LogoLink';
import { useIsScrolled } from '@/hooks/scroll';
import './PageHeader.scss';

const PageHeader = () => {
  const scrolled = useIsScrolled({ wait: 100 });

  return (
    <header className={cn('io-header', { scrolled })}>
      <Container className="header-container">
        <LogoLink className="logo" />
        <MainNav />
      </Container>
    </header>
  );
};

export default PageHeader;
