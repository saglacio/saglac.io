// Since this is used by both the gatsby webpack config and the storybook.
module.exports = {
  data: `@import "${__dirname}/src/scss/modules";`,
  precision: 6, // recommended for Bootstrap 4
};
