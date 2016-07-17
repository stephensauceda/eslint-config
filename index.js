module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": ["react"],
  "rules": {
    "comma-dangle": [2, "never"],
    "semi": [2, "never"],
    "react/prefer-stateless-function": 1
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "ecmaFeatures": {
    "modules": true
  },
  "globals": {
  }
}
