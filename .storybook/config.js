import { configure, addParameters, addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';
import './globals';
import Decorator from './Decorator';

addDecorator(Decorator);

// Option defaults.
addParameters({
  options: {
    theme: themes.dark,
  },
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.jsx?$/);
// const reqComponentStories = require.context('../src/components', true, /\.stories\.jsx?$/);

function loadStories() {
  req.keys()
    .forEach((filename) => req(filename));

  // reqComponentStories.keys()
  //   .forEach((filename) => reqComponentStories(filename));
}

// configure(loadStories, module);
configure(require.context('../stories', true, /\.stories\.jsx?$/), module);
