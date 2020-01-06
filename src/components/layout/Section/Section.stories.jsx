import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import Section from './Section';

export default {
  title: 'Layout/Section',
};

const SUBTITLE = `
Nous offrons des billets à prix unique. Par contre, sur une base de premier arrivé, premier servi, des billets achetés
plus tôt sont disponibles à prix plus bas. Des billets étudiants sont également disponibles, mais une preuve d'identité
sera requise à l'entrée. Aucune vente à la porte.
`;

export const DefautlSection = () => (
  <Section
    fluid={boolean('Full width?', false)}
    title={text('Title:', 'Welcome to this section')}
    subtitle={text('Subtitle:', SUBTITLE)}
  />
);
