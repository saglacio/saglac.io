import React from 'react';
import cn from 'classnames';
import Container from 'reactstrap/lib/Container';
import SectionHeader from './SectionHeader';
import './Section.scss';

const Section = ({
  children,
  className,
  fluid,
  title,
  subtitle,
  ...props
}) => (
  <section className={cn('io-section', className)} {...props}>
    <Container fluid={fluid}>
      <SectionHeader title={title}>
        {subtitle}
      </SectionHeader>
      {children}
    </Container>
  </section>
);

export default Section;
