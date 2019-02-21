const alias = require('./config/webpack/alias')

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['import', 'prettier', 'standard'],
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true,
    jest: true,
  },
  rules: {
    indent: ['error', 2],
    'space-before-function-paren': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'linebreak-style': 'off',
    'global-require': 'off',
    semi: 'off',
    'arrow-body-style': 'off',
    'no-multiple-empty-lines': ['warn', { max: 1 }],
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    'import/prefer-default-export': 'off',
  },

  // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: alias,
          },
        },
      },
    },
  },
}
