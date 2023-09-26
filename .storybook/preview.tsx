/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import React from 'react'
import type { Preview } from '@storybook/react'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { customTheme } from '../src/theme/customTheme'

/**
***  add theme controls to storybook
**/
// define empty theme object for MUI default theme
const defaultTheme = createTheme({})

// define object for storybook theme select options
export const themes = {
  default: defaultTheme,
  custom: customTheme,
  // foo: barTheme
}

// define a global storybook UI element for theme selection
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Theme to use for the story',
    defaultValue: 'default',
    toolbar: {
      icon: 'circlehollow',
      items: ['default', 'custom'], // add more themes here
      showName: true
    }
  }
}

const preview: Preview = {
  decorators: [
    (Story, context) => (
      <ThemeProvider theme={themes[context.globals.theme]}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    )
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'padded',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}
export default preview