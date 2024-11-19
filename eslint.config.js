import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react,
      jsxA11y,
    },
    rules: {
      'react/no-unknown-property': 'warn', // Enforces camelCase for DOM properties
      'jsx-a11y/no-redundant-roles': 'warn', // Accessibility improvements
    },
  },
];
