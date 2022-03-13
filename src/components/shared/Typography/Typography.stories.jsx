import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import Typography from './Typography';

export default {
  title: 'Shared/Typography',
};

const TEXT = 'À propos du Saglac IO';

export const titles = () =>
  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((variant) => (
    <>
      <span>{variant}</span>
      <Typography
        variant={variant}
        uppercase={boolean('Uppercase?', false)}
        light={boolean('light?', false)}
      >
        {text('Text:', TEXT)}
      </Typography>
    </>
  ));

export const otherTexts = () => {
  const content = text('Text:', TEXT);
  const props = {
    uppercase: boolean('Uppercase?', false),
    light: boolean('light?', false),
  };
  return (
    <>
      <span>Paragraph</span>
      <Typography {...props}>{content}</Typography>
      <span>Span</span>
      <br />
      <Typography tag="span" {...props}>
        {content}
      </Typography>
      <br />
      <span>Lead</span>
      <br />
      <Typography lead {...props}>
        {content}
      </Typography>
    </>
  );
};
