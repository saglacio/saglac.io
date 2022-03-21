import React from 'react';
import LocationInfo from '@/components/shared/LocationInfo';

const LocationPreview = ({ entry }) => {
  console.log('DEBUG', entry);
  // const data = entry.getIn(['data']);
  const data = entry.get('data').toObject();
  console.log('DEBUG', data);
  return <LocationInfo location={data} />;
};

export default LocationPreview;
