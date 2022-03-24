import React from 'react';
import EventDetails from '@/components/shared/EventDetails';

const DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

const LocationPreview = ({ entry }) => {
  const data = entry.get('data').toObject();
  return (
    <EventDetails
      location={data}
      title="Dummy event title"
      eventUrl="https://www.google.com"
      description={DESCRIPTION}
    />
  );
};

export default LocationPreview;
