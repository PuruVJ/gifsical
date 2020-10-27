import { createMuiTheme } from '@material-ui/core';
import type { TypographyStyleOptions } from '@material-ui/core/styles/createTypography';

const headingsStyles: TypographyStyleOptions = {
  fontFamily: 'Comfortaa, sans-serif',
  fontWeight: 500,
};

export const theme = createMuiTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    background: {
      paper: '#fff',
      default: '#fafafa',
    },
    primary: {
      light: 'rgba(239, 120, 120, 1)',
      main: 'rgba(235, 86, 86, 1)',
      dark: 'rgba(188, 69, 69, 1)',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#ccc',
      contrastText: '#333',
    },
    error: {
      light: 'rgba(120, 239, 239, 1)',
      main: 'rgba(86, 235, 235, 1)',
      dark: 'rgba(69, 188, 188, 1)',
      contrastText: '#fff',
    },
    text: {
      primary: '#141414',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },
  spacing: (factor) => `${factor * 1}rem`,
  typography: {
    h1: headingsStyles,
    h2: headingsStyles,
    h3: headingsStyles,
    h4: headingsStyles,
    h5: headingsStyles,
    h6: headingsStyles,
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '0.5rem',
      },
    },
    MuiTextField: {
      root: {
        borderRadius: '0.5rem',
      },
    },
  },
});
