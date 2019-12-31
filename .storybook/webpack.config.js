module.exports = ({ config }) => {
  const rule = config.module.rules[0];
  const ruleUse = rule.use[0];
  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  rule.exclude = [/node_modules\/(?!(gatsby)\/)/];

  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  ruleUse.loader = require.resolve('babel-loader');

  // use @babel/preset-react for JSX and env (instead of staged presets)
  ruleUse.options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
  ];

  ruleUse.options.plugins = [
    // use @babel/plugin-proposal-class-properties for class arrow functions
    require.resolve('@babel/plugin-proposal-class-properties'),
    // use babel-plugin-remove-graphql-queries to remove static queries from
    // components when rendering in storybook
    require.resolve('babel-plugin-remove-graphql-queries'),
  ];

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  // eslint-disable-next-line no-param-reassign
  config.resolve.mainFields = ['browser', 'module', 'main'];

  return config;
};
