import React from 'react';
import classNames from 'classnames';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Typography from '@/components/shared/Typography';
import './PageIntro.scss';

const PageIntro = ({ id, fullHeight = false, title, children }) => (
  <section
    id={id}
    className={classNames('io-page-intro', { 'full-height': fullHeight })}
  >
    <div className="intro-wrapper">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={{ size: 8 }} className="">
            {title && (
              <Typography
                variant="h1"
                className="display-3 mb-5"
                uppercase
                light
              >
                {title}
              </Typography>
            )}
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  </section>
);

export default PageIntro;
