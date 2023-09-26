module.exports = {
  parser: '@typescript-eslint/parser',
  // Specifies the ESLint parser
  extends: [
    'plugin:storybook/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  ignorePatterns: ['!.storybook'], // do NOT ignore .storybook config files
  // some personal preferences
  rules: {
    'comma-spacing': 'error',
    'eqeqeq': ['error', 'always'],
    'indent': ['error', 2],
    'linebreak-style': 'error',
    'no-tabs': 'error',
    'object-curly-spacing': ['error', 'always'],
    'one-var': ['error', 'never'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
  },
  settings: {
    react: {
      version: 'detect'
    },

    jest: {
      version: 'detect'
    }
  }
}