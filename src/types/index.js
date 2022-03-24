import PropTypes from 'prop-types';

export const authorType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  website: PropTypes.string,
  twitter: PropTypes.string,
  github: PropTypes.string,
});

export const talkType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  authors: PropTypes.arrayOf(authorType).isRequired,
});

export const locationType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  url: PropTypes.string,
  facebook: PropTypes.string,
  description: PropTypes.string,
  map: PropTypes.string,
});

export const eventType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  formattedDate: PropTypes.string.isRequired,
  event_url: PropTypes.string,
  location: locationType.isRequired,
  talks: PropTypes.arrayOf(talkType).isRequired,
});
