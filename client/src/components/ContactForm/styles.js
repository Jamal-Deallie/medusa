import { styled } from '@mui/system';
import { Button, Box, TextField, Typography, Grid } from '@mui/material';



export const CustomInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& > fieldset': {
      border: `1px solid ${theme.palette.primary.main}`,
      background: 'none',
    },
  },
  '&& .MuiOutlinedInput-root:hover': {
    '& > fieldset': { border: `1px solid ${theme.palette.primary.main}` },
  },
  '& label': {
    color: theme.palette.primary.main,
    fontFamily: 'muli, sans-serif',
    fontSize: '1.6rem',
    margin: 'dense',
  },

  '& .MuiTypography-root': {
    color: theme.palette.primary.main,
  },

  '& .MuiInputBase-root': {
    color: theme.palette.primary.main,
  },

  '& ::-webkit-calendar-picker-indicator': {
    filter: 'invert(100%)',
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: 'pointer',
}));

export const ContactFormWrap = styled(Grid)(({ theme }) => ({
  background: theme.palette.secondary.light,
  padding: '7.5rem 1rem',
}));

export const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: 'tenez, sans-serif',
  textTransform: 'capitalize',
  fontStyle: 'italic',
  paddingBottom: '5.5rem',
  fontSize: '4.8rem',
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: '2.5rem',
  background: theme.palette.primary.main,
  color: theme.palette.secondary.light,
  fontSize: 16,
  fontFamily: 'muli, sans-serif',
  fontWeight: 300,
  padding: '1.75rem 4rem',
  borderRadius: '3px',
  boxSizing: 'border-box',
  width: '100%',
  transition: 'color background 0.2s ease-in-out',
  '&:hover': {
    background: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
}));
