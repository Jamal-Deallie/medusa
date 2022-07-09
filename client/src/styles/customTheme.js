import { createTheme } from '@mui/material/styles';

const primaryDark = '#131919';
const primaryColor = '#253232';

const secondaryColor = '#A68764';
const secondaryLight = '#E6E1DD';
const secondaryDark = '#cfcac7';
const warningColor = '#d14334';

export const customTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      dark: primaryDark,
    },
    secondary: {
      dark: secondaryDark,
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
    navOption: {
      color: secondaryLight,
      fontSize: '1.6rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontFamily: 'muli, sans-serif',
      textTransform: 'uppercase',
      transition: 'all color .2s ease',
      position: 'relative',
      display: 'inline-block',
      padding: '3px 0',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 'calc(100% + 5px)',
        width: 0,
        right: 0,
        height: '3px',
        transition: 'width .4s cubic-bezier(0.51, 0.18, 0, 0.88) .1s',
        background: primaryDark,
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 'calc(100% + 5px)',
        width: 0,
        right: 0,
        height: '3px',
        transition: 'width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83)',
        background: secondaryColor,
      },
      '&:hover': {
        '&::after': { width: '100%', left: 0 },
        '&::before': { width: '100%', left: 0 },
      },
      '&.active': {
        color: primaryDark,
      },
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'main' },
          style: {
            color: primaryColor,
            background: secondaryColor,
            border: '1px solid transparent',
            letterSpacing: '0.025rem',
            fontSize: '1.8rem',
            fontWeight: 300,
            padding: '1rem 4rem',
            borderRadius: '3px',
            boxSizing: 'border-box',
            height: '5rem',
            width: '100%',
            maxWidth: '65rem',
            transition: 'border color background 0.2s ease-in-out',
            '&:hover': {
              background: 'none',
              color: secondaryColor,
              border: `2px solid ${secondaryColor}`,
            },
          },
        },
      ],
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: true,
      },
    },
  },
});
