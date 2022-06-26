import { createTheme } from '@mui/material/styles';

const primaryDark = '#131919';
const primaryColor = '#253232';

const secondaryColor = '#A68764';
const secondaryLight = '#E6E1DD';

const warningColor = '#d14334';

export const customTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      dark: primaryDark,
    },
    secondary: {
      light: secondaryLight,
      main: secondaryColor,
    },
    warning: {
      main: warningColor,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 850,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ['"tenez, sans-serif"', 'muli, sans-serif'].join(','),
    h1: {
      fontFamily: 'tenez, sans-serif',
    },
    header1: {
      fontFamily: 'tenez, sans-serif',
      fontWeight: 400,
      fontStyle: 'italic',
    },
    body1: {
      fontSize: '1.6rem',
      fontFamily: 'muli, sans-serif',
    },
    body2: {
      fontSize: '1.8rem',
      fontFamily: 'muli, sans-serif',
      fontWeight: 400,
      fontStyle: 'italic',
    },
  },
  components: {
    MuiButton: {
      fontSize: '1.6rem',
      fontFamily: 'muli, sans-serif',
    },
  },
});
