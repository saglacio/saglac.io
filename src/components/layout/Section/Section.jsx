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
  dark,
  secondary,
  ...props
}) => (
  <section
    className={cn('io-section', className, {
      dark,
      secondary,
    })}
    {...props}
  >
    <Container fluid={fluid}>
      <SectionHeader title={title}>
        {subtitle}
      </SectionHeader>
      {children}
    </Container>
  </section>
);

export default Section;
