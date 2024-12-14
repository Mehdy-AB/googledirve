import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      jsxA11y,
    },
    rules: {
      'react/no-unknown-property': 'warn',
      'jsx-a11y/no-redundant-roles': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
