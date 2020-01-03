import React from 'react';
import { text } from '@storybook/addon-knobs';
import StoryWrapper from '~/stories/Wrapper';
import Typography from './Typography';

export default {
  title: 'Shared/Typography',
  decorators: [StoryWrapper()],
};

const TEXT = 'À propos du Saglac IO';

export const titles = () => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((variant) => (
  <Typography variant={variant}>{text('Text:', TEXT)}</Typography>
));

export const otherTexts = () => (
  <Typography>{text('Text:', TEXT)}</Typography>
);
