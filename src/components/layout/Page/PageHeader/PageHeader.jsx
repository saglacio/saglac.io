import React, { useState } from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Container from 'reactstrap/lib/Container';
import Collapse from 'reactstrap/lib/Collapse';
// import NavbarToggler from 'reactstrap/lib/NavbarToggler';
import MainNav from '@/components/navigation/MainNav';
import LogoLink from '@/components/shared/LogoLink';
import Button from '@/components/shared/Button';
import { useIsScrolled } from '@/hooks/scroll';
import './PageHeader.scss';

const PageHeader = () => {
  const scrolled = useIsScrolled({ offset: 50 });
  const [collapsed, setCollapsed] = useState(true);

  return (
    <header className={cn('io-header', { scrolled })}>
      <Container className="header-container">
        <div className="clearfix">
          <LogoLink className="logo" />
          <MainNav className="d-none d-md-inline-block" />
          <Button
            color="link"
            size="lg"
            className="float-right d-md-none"
            onClick={() => setCollapsed(!collapsed)}
            icon={<FontAwesomeIcon icon={faBars} />}
          />
        </div>
        <Collapse isOpen={!collapsed} className="d-md-none">
          <MainNav className="mobile-navbar align-items-end" vertical />
        </Collapse>
      </Container>
    </header>
  );
};

export default PageHeader;
