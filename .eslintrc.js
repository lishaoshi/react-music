module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['react-app', 'react-app/jest', 'prettier'],
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint/eslint-plugin',
    'prettier'
  ],
  settings: {
    react: {
      'version': 'detect'
    }
  },
  rules: {

  }
};
