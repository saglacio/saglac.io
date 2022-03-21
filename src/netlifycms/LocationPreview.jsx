import React from 'react';
import LocationInfo from '@/components/shared/LocationInfo';

const LocationPreview = ({ entry }) => {
  const data = entry.get('data').toObject();
  return <LocationInfo location={data} />;
};

export default LocationPreview;
