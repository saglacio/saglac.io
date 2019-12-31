const resolver = require('./resolver.config');

module.exports = {
  presets: ['babel-preset-gatsby'],
  plugins: [
    ['module-resolver', resolver],
  ],
};
