import React from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@/components/shared/Typography';
import { locationType } from '@/types';
import './LocationInfo.scss';

const LocationInfo = ({ className, location: { name, map, description } }) => {
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
    <Row className={classNames('io-location-info', className)} noGutters>
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
          <Col xs={10} lg={9}>
            {locationContent}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

LocationInfo.propTypes = {
  className: PropTypes.string,
  location: locationType.isRequired,
};

export default LocationInfo;
