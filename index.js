module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  plugins: ['react', 'prettier'],
  settings: {
    react: {
      version: '16.3'
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      ecmaVersion: 6
    },
    sourceType: 'module'
  },
  globals: {}
}
