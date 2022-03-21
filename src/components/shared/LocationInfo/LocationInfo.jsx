import React from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Typography from '@/components/shared/Typography';
import './LocationInfo.scss';
import { locationType } from '@/types';

const LocationInfo = ({ location: { name, map, description } }) => {
  const locationContent = (
    <>
      <Typography variant="h4">{name}</Typography>
      {description && (
        <Typography className="mb-0" light>
          {description}
        </Typography>
      )}
    </>
  );
  return (
    <Row className="io-location-info" noGutters>
      <Col className="location-map" lg={6}>
        <iframe
          title="Event Location Map"
          src={map}
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
        />
      </Col>
      <Col className="location-details" lg={6}>
        <Row className="justify-content-center">
          <Col lg={8}>{locationContent}</Col>
        </Row>
      </Col>
    </Row>
  );
};

LocationInfo.propTypes = {
  location: locationType.isRequired,
};

export default LocationInfo;
