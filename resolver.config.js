// const path = require('path');

/**
 * Import aliases hash definition for the babel-module resolver plugin.
 *
 * Avoid repeating this configuration everywhere (except in the `jsconfig.json`)
 */
module.exports = {
  extensions: ['.js', '.jsx', '.json'],
  // root: ['.'],
  alias: {
    '@': './src/',
    '~': './',
  },
  logLevel: 'verbose',
};
