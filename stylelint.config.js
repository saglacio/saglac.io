module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
  ],
  plugins: [
    'stylelint-order',
  ],
  rules: {
    indentation: [2, {
      indentInsideParens: 'once-at-root-twice-in-block',
    }],
    'at-rule-empty-line-before': ['always', {
      except: [
        'blockless-after-same-name-blockless',
      ],
      ignore: ['after-comment', 'first-nested'],
      ignoreAtRules: ['else'],
    }],
    'block-closing-brace-newline-after': ['always', {
      ignoreAtRules: ['if', 'else'],
    }],
    'declaration-empty-line-before': 'never',
    'declaration-colon-newline-after': null,
    'order/properties-order': [
      // Special
      'content',

      // Layout
      'display',
      'float',
      'clear',
      'position',
      'top',
      'right',
      'bottom',
      'left',

      // Display & Box model
      'box-sizing',
      'width',
      'height',
      'min-width',
      'min-height',
      'max-width',
      'max-height',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',

      // Colors
      'color',
      'border',
      'border-color',
      'border-radius',
      'border-width',
      'border-style',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'background',
      'background-color',
      'background-image',
      'background-size',
      'background-position',
      'background-repeat',

      'box-shadow',

      // Text
      'font-family',
      'font-weight',
      'font-size',
      'line-height',
      'text-align',
      'text-transform',

      // other
      'opacity',
      'overflow',
      'overflow-x',
      'overflow-y',
      'cursor',
      'z-index',
      'transition',
      'transform',
      'animation',
      'vertical-align',
    ],

    // override rules here
    'number-leading-zero': 'never',
    'string-quotes': 'single',
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: ['export'],
    }],
  },
};
