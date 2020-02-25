/**
 * Apollo GraphQL extension configuration.
 *
 * Used for auto-completion and query validation.
 *
 * @see https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo
 */
module.exports = {
  client: {
    service: {
      name: 'saglacio',
      url: 'http://localhost:8000/__graphql',
    },
  },
};
