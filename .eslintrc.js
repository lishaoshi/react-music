module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:prettier/recommended',
  ],
  "env": {
    "browser": true,
    "node": true
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'prettier/prettier': 2,
    "@typescript-eslint/no-var-requires": 0,
  },
};

