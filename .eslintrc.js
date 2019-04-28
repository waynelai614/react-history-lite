module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "parser": "babel-eslint",
  "extends": ["airbnb", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "new-cap": 0,
    "import/no-unresolved": 0,
    "no-underscore-dangle": 0,
    "comma-dangle": 0,
    "semi": [2, "never"],
    "import/extensions": 0,
    "arrow-body-style": 0,
    "arrow-parens": 0,
    "import/prefer-default-export": 0,
    "import/no-named-as-default": 0,
    "import/no-extraneous-dependencies": 0,
    "no-param-reassign": ["error", {
      "props": false
    }],
    "react/forbid-prop-types": 0,
    "react/require-default-props": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }]
  },
  settings: {
    'import/resolver': 'webpack',
  }
};
