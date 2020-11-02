import { createMuiTheme } from '@material-ui/core';
import type { TypographyStyleOptions } from '@material-ui/core/styles/createTypography';
import type {} from '@material-ui/lab/themeAugmentation';

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
      default: '#fff',
      paper: '#fff',
    },
    primary: {
      light: '#f38a8c',
      main: '#EE585A',
      dark: '#a73e3f',
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
      contrastText: '#141414',
    },
    text: {
      primary: '#141414',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
  },
  spacing: (factor) => `${factor}rem`,
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
        borderRadius: '0.4rem',
      },
    },
    MuiTextField: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: '0.5rem',
        },
      },
    },
    MuiAlert: {
      filledError: {
        color: '#141414',
        fill: '#141414',
      },
    },

    MuiBackdrop: {
      root: {
        zIndex: 1,
      },
    },
  },

  props: {
    MuiTextField: {
      variant: 'outlined',
    },
    MuiLink: {},
  },
});
