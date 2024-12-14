export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: ['react', 'jsx-a11y'], // Plugins should be strings
    extends: ['plugin:react/recommended', 'plugin:jsx-a11y/recommended'], // Use recommended configurations
    rules: {
      'react/no-unknown-property': 'warn', // Enforces camelCase for DOM properties
      'jsx-a11y/no-redundant-roles': 'warn', // Accessibility improvements
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  },
];
