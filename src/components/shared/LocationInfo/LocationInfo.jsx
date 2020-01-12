import React from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Typography from '@/components/shared/Typography';
// import './LocationInfo.scss';

const LocationInfo = ({ name, description, mapSrc }) => (
  <div className="io-speaker-card">
    <Row noGutters>
      <Col>
        <iframe
          title="Event Location Map"
          src={mapSrc}
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
        />
      </Col>
      <Col className="io-brand-background">
        <Typography variant="h4">
          {name}
        </Typography>
        <Typography light>
          {description}
        </Typography>
      </Col>
    </Row>
  </div>
);

export default LocationInfo;
