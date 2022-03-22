module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": 0,
    quotes: ["error", "double", { avoidEscape: true }],
    "comma-dangle": 0,
    "react/state-in-constructor": 0,
    "spaced-comment": 0,
    "no-unused-vars": 0,
    "react/forbid-prop-types": 0,
  },
};
