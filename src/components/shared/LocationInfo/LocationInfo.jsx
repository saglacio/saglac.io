import React from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Typography from '@/components/shared/Typography';
import './LocationInfo.scss';

const LocationInfo = ({ name, description, mapSrc }) => (
  <Row className="io-location-info" noGutters>
    <Col className="location-map" lg={6}>
      <iframe
        title="Event Location Map"
        src={mapSrc}
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
      />
    </Col>
    <Col className="location-details" lg={6}>
      <Row className="justify-content-center">
        <Col lg={8}>
          <Typography variant="h4">
            {name}
          </Typography>
          <Typography className="mb-0" light>
            {description}
          </Typography>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default LocationInfo;
