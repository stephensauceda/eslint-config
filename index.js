module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react'],
  settings: {
    react: {
      version: '16.3'
    }
  },
  rules: {
    'comma-dangle': [2, 'never'],
    semi: [2, 'never'],
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'react/prefer-stateless-function': 1,
    'react/no-did-update-set-state': 2,
    'react/no-danger': 1,
    'react/jsx-tag-spacing': 2,
    'react/prefer-es6-class': 1
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaFeatures: {
      modules: true,
      jsx: true
    }
  },
  globals: {
  }
}
