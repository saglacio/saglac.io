const resolverConfig = require('./resolver.config');

const ERROR = 2;
// const WARN = 1;
const OFF = 0;

module.exports = {
  extends: [
    'react-app',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:storybook/recommended',
  ],
  plugins: ['import', 'jsx-a11y', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    // schema: './schema.graphql',
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': ERROR,
    /**
     * default eslint rules override
     */
    'class-methods-use-this': OFF,
    // 'comma-dangle': [
    //   ERROR,
    //   {
    //     arrays: 'always-multiline',
    //     objects: 'always-multiline',
    //     imports: 'always-multiline',
    //     exports: 'always-multiline',
    //     functions: 'never',
    //   },
    // ],
    'consistent-return': OFF,
    'func-names': [ERROR, 'as-needed'],
    // indent: [
    //   ERROR,
    //   2,
    //   {
    //     // One indent of 2 spaces
    //     SwitchCase: 1,
    //   },
    // ],
    'linebreak-style': [ERROR, 'unix'],
    'no-else-return': [ERROR, { allowElseIf: true }],
    'no-multi-assign': OFF,
    'no-multiple-empty-lines': [ERROR, { max: 1, maxEOF: 0, maxBOF: 0 }],
    // risk only exist with semi-colon auto insertion. Not our case.
    'no-plusplus': OFF,
    'no-underscore-dangle': OFF,
    'prefer-promise-reject-errors': [ERROR, { allowEmptyReject: false }],

    /**
     * Import plugin rules
     */
    'import/no-cycle': OFF,
    'import/extensions': ERROR,
    'import/no-extraneous-dependencies': [
      ERROR,
      {
        devDependencies: true,
      },
    ],
    'import/no-named-as-default': OFF,
    'import/prefer-default-export': OFF,
    'import/order': [
      ERROR,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
      },
    ],

    /**
     * jsx-a11y plugin rules
     */
    'jsx-a11y/anchor-is-valid': [
      ERROR,
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight', 'to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      ERROR,
      {
        labelComponents: ['CustomInputLabel'],
        labelAttributes: ['label'],
        controlComponents: ['CustomInput'],
        depth: 3,
      },
    ],
    'jsx-a11y/label-has-for': OFF,

    /**
     * react plugin rules
     */
    // 'react/jsx-child-element-spacing': ERROR,
    'react/forbid-prop-types': OFF,
    // 'react/jsx-one-expression-per-line': [ERROR, { allow: 'single-child' }],
    'react/jsx-props-no-spreading': OFF,
    'react/no-danger': ERROR,
    'react/no-unescaped-entities': [ERROR, { forbid: ['>', '}'] }],
    'react/prop-types': [
      ERROR,
      {
        // FIXME: remove when the website is ready to be developed
        skipUndeclared: true,
      },
    ],
    'react/sort-comp': [
      ERROR,
      {
        order: [
          //   'type-annotations',
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          //   'instance-methods',
          'everything-else',
          'render',
        ],
      },
    ],
    'react/state-in-constructor': [ERROR, 'never'],
    'react/jsx-curly-brace-presence': ERROR,
  },
  overrides: [
    {
      files: ['*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': OFF,
      },
    },
    // {
    //   files: ["*.js"],
    //   processor: "@graphql-eslint/graphql"
    // },
    // {
    //   files: ["*.graphql"],
    //   parser: "@graphql-eslint/eslint-plugin",
    //   plugins: ["@graphql-eslint"],
    //   rules: {
    //     "@graphql-eslint/known-type-names": "error"
    //   }
    // }
  ],
  settings: {
    // 'import/core-modules': [],
    'import/resolver': {
      'babel-module': resolverConfig,
    },
  },
};
