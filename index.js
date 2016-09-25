module.exports = {
  "parser": "babel-eslint",
  "extends": ["plugin:react/recommended"],
  "plugins": ["react"],
  "rules": {
    "comma-dangle": [2, "never"],
    "semi": [2, "never"],
    "react/prefer-stateless-function": 1,
    "react/no-did-update-set-state": 2,
    "react/no-danger": 1,
    "react/jsx-space-before-closing": 2,
    "react/prefer-es6-class": 1
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "modules": true,
      "jsx": true
    }
  },
  "globals": {
  }
}
