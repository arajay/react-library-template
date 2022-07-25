import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { customTheme } from '../src/theme/customTheme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

/**
***  add theme controls to storybook
**/
// define empty theme object for MUI default theme
const defaultTheme = createTheme({});

const themes = {
  default: defaultTheme,
  custom: customTheme
  // add more themes here
}

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

const withThemeProvider = (Story, context) => {
  const theme = themes[context.globals.theme];
  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider];