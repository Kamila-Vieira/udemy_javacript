module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks', 'import', 'jsx-a11y'],
  rules: {
    'prettier/prettier': 'warn',
    'react/jsx-no-undef': 'warn',
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': 0,
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'spaced-comment': 0,
    'react/jsx-props-no-spreading': 0,
    'no-console': 0,
    'no-unused-vars': 'warn',
    'no-empty-function': 'warn',
    'func-names': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'no-useless-return': 'warn',
    'react/prop-types': 'warn',
  },
};
