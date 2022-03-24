import React from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { locationType } from '@/types';
import Typography from '@/components/shared/Typography';
import Button from '@/components/shared/Button';
import SocialLinks from '@/components/SocialLinks';
import './EventDetails.scss';

const EventDetails = ({
  className,
  location: { name, map, description, facebook, url },
  title,
  description: eventDescription,
  eventUrl,
}) => {
  // const socialLinks = Boolean(facebook || url) && (
  //   <div className="text-right mt-auto align-self-end">
  //     {name}
  //     <SocialLinks
  //       size="sm"
  //       color="link"
  //       btnClassName="text-light"
  //       className="d-inline-block"
  //       facebook={facebook}
  //       other={url}
  //     />
  //   </div>
  // );
  // const locationContent = (
  //   <>
  //     <Typography variant="h4">{title}</Typography>
  //     {eventDescription && <Typography light>{eventDescription}</Typography>}
  //     <Button size="lg" tag="a" href={eventUrl} target="_blank">
  //       Je participe
  //     </Button>
  //   </>
  // );
  return (
    <Row className={classNames('io-event-details', className)} noGutters>
      <Col className="location-map" lg={6}>
        <iframe
          title="Event Location Map"
          src={map}
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
        />
      </Col>
      <Col className="event-details" lg={6}>
        <Row className="justify-content-center h-100">
          <Col xs={10} lg={9}>
            {/* <div className="d-flex align-items-start flex-column h-100"> */}
            <Typography variant="h4">{title}</Typography>
            {eventDescription && (
              <Typography light>{eventDescription}</Typography>
            )}
            <Button
              size="lg"
              tag="a"
              href={eventUrl}
              target="_blank"
              // className="mb-3"
            >
              Je participe
            </Button>
            {/* </div> */}
          </Col>
        </Row>
        <div className="text-right">
          {name}
          <SocialLinks
            size="sm"
            color="link"
            btnClassName="text-light"
            className="d-inline-block"
            facebook={facebook}
            other={url}
          />
        </div>
      </Col>
    </Row>
  );
};

EventDetails.propTypes = {
  className: PropTypes.string,
  location: locationType.isRequired,
  title: PropTypes.string.isRequired,
  eventUrl: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default EventDetails;
