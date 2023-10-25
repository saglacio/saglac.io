import React from 'react';
import { text } from '@storybook/addon-knobs';
import EventDetails from './EventDetails';

export default {
  title: 'Shared/EventDetails',
};

const MAP =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.3839459486885!2d-71.0561580843414!3d48.410772779246145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb89228a5876e8b%3A0x93cac562dd8cb02b!2sH%C3%B4tel+le+Montagnais!5e0!3m2!1sen!2sca!4v1560892250568!5m2!1sen!2sca';

export const DefaultLocationInfo = () => (
  <EventDetails
    mapSrc={MAP}
    location={{
      name: text('Name?', 'Hotel le montagnais'),
      map: text('Map?', MAP),
      description: text('Description?'),
      facebook: text('Facebook?'),
      url: text('URL?'),
    }}
    name={text('Name?', 'Hotel le montagnais')}
    description={text(
      'Description?',
      'L’Hôtel Le Montagnais est l’un des plus grands hôtels au Québec avec un centre de congrès intégré. Le service attentionné à tous les instants et la qualité de la nourriture est leur priorité et leur renommé.',
    )}
    eventUrl={text('https://example.com/')}
    title={text("Titre de l'évènement!")}
  />
);
