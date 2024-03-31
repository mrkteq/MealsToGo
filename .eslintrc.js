module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
    'plugin:prettier/recommended', // Make sure this is always the last configuration in the extends array.
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'react-native'],
  rules: {
    // You can add custom rules here
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off', // For React versions using the new JSX transform
    'react-native/no-unused-styles': 'warn',
    'react-native/split-platform-components': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Detects the React version
    },
  },
};
