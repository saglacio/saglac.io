const ERROR = 2;
// const WARN = 1;
const OFF = 0;

module.exports = {
  "extends": ["airbnb"],
  "plugins": ["react", "jsx-a11y", "import"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  "rules": {
    // "react/prefer-stateless-function": "off",
    // "react/prop-types": "off",
    // "react/no-danger": "off",
    // "jsx-a11y/anchor-is-valid": [ "error", {
    //   "components": [ "Link" ],
    //   "specialLink": [ "hrefLeft", "hrefRight", "to" ],
    //   "aspects": [ "noHref", "invalidHref", "preferButton" ]
    // }],
        /**
     * default eslint rules override
     */
    'class-methods-use-this': OFF,
    'comma-dangle': [ERROR, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'consistent-return': OFF,
    'func-names': [ERROR, 'as-needed'],
    indent: [ERROR,
      2, {
        // One indent of 2 spaces
        SwitchCase: 1,
      }],
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
    'import/no-extraneous-dependencies': [ERROR, {
      devDependencies: true,
    }],
    'import/no-named-as-default': OFF,
    'import/prefer-default-export': OFF,
    'import/order': ERROR,

    /**
     * jsx-a11y plugin rules
     */
    'jsx-a11y/anchor-is-valid': [ERROR, {
      components: ['Link'],
      specialLink: ['hrefLeft', 'hrefRight', 'route'],
      aspects: ['invalidHref', 'preferButton'],
    }],
    'jsx-a11y/label-has-associated-control': [ERROR, {
      labelComponents: ['CustomInputLabel'],
      labelAttributes: ['label'],
      controlComponents: ['CustomInput'],
      depth: 3,
    }],
    'jsx-a11y/label-has-for': OFF,

    /**
     * react plugin rules
     */
    'react/forbid-prop-types': OFF,
    'react/jsx-one-expression-per-line': [ERROR, { allow: 'single-child' }],
    'react/no-danger': ERROR,
    'react/sort-comp': [ERROR, {
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
    }],
  },
  "settings": {
    "import/core-modules": []
  },
  "env": {
    "browser": true,
    node: true,
    es6: true,
    jest: true,
  }
};
