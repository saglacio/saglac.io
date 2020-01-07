// Since this is used by both the gatsby webpack config and the storybook.
module.exports = {
  // Looks like it's relative to the CWD of the process rather than the file
  // it's imported into.
  data: '@import "./src/scss/modules";',
  precision: 6, // recommended for Bootstrap 4
};
