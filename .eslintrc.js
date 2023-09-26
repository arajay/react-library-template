module.exports = {
  parser: '@typescript-eslint/parser',
  // Specifies the ESLint parser
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  ignorePatterns: ['!.storybook'],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    },

    jest: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of Jest to use
    }
  }
};