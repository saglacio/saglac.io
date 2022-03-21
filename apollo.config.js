/**
 * Apollo GraphQL extension configuration.
 *
 * Used for auto-completion and query validation.
 *
 * @see https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo
 */
module.exports = {
  client: {
    tagName: 'graphql',
    addTypename: false,
    excludes: [],
    includes: [
      './src/**/*.jsx',
      './src/**/*.js',
      // './node_modules/gatsby-source-contentful/src/*.js',
      './node_modules/gatsby-transformer-sharp/src/*.js',
      './node_modules/gatsby-image/src/*.js',
    ],
    service: {
      name: 'saglacio',
      localSchemaFile: './schema.graphql',
    },
  },
};
