import { configure, addParameters, addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';
import './globals';
import Decorator from './Decorator';
import README from './README.md';

addDecorator(Decorator);

// Option defaults.
addParameters({
  options: {
    theme: themes.dark,
  },
  notes: { Introduction: README, 'How to?': 'test' },
  viewports: { defaultViewport: 'Notes' },
});

// automatically import all files ending in *.stories.js
configure([
  require.context('../stories', true, /\.stories\.jsx?$/),
  require.context('../src/components', true, /\.stories\.jsx?$/),
], module);
