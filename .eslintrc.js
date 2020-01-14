module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    'import/no-named-as-default': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/no-v-html': 0,
    'vue/no-template-shadow': 0,
    'vue/script-indent': ['error', 2, {'baseIndent': 1}],
    'vue/name-property-casing': ['error', 'PascalCase'],
    'array-bracket-newline': ['error', 'consistent'],
    'vue/html-indent': ['error', 2],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'always',
        'component': 'always',
      },
      'svg': 'always',
      'math': 'always',
    }],
    'semi': [2, 'never'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-trailing-spaces': ['error', {
      'skipBlankLines': true,
      'ignoreComments': true,
    }],
    'indent': 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'object-curly-spacing': ['error', 'never'],
    'template-curly-spacing': ['error', 'always'],
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    'keyword-spacing': ['error', {
      'overrides': {
        'if': {'after': false},
        'for': {'after': false},
        'while': {'after': false},
        'catch': {'after': false},
      },
    }],
    '@typescript-eslint/no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'after-used',
      'ignoreRestSiblings': false,
    }],
    'no-return-assign': 0,
    '@typescript-eslint/member-ordering': ['error', {
      'default': ['field', 'constructor', 'method'],
    }],
    'vue/no-multi-spaces': ['error', {
      'ignoreProperties': false,
    }],
    '@typescript-eslint/typedef': [
      'error',
      {
        'arrowParameter': false,
        'variableDeclaration': false,
        'parameter': false,
        'propertyDeclaration': false,
        'objectDestructuring': false,
        'memberVariableDeclaration': false,
      },
    ],
    'vue/attribute-hyphenation': ['error', 'always'],
    'camelcase': ['error', {'ignoreImports': true}],
  },
  'overrides': [
    {
      'files': ['*.ts', '*.tsx', '*.vue'],
      'rules': {
        '@typescript-eslint/explicit-function-return-type': ['error'],
      },
    },
  ]
}
