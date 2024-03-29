module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    quotes: "off",
    "no-console": "off",
    "class-methods-use-this": "off",
    "comma-dangle": "off",
    "no-param-reassign": "off",
    "implicit-arrow-linebreak": "off",
    camelcase: "off",
  },
};
