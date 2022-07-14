import { styled } from '@mui/system';
import { Box, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '60rem',
  margin: '0 auto',
});

export const CustomInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& > fieldset': {
      border: `1px solid ${theme.palette.primary.main}`,
      background: 'none',
      color: theme.palette.primary.main,
    },
  },
  '&& .MuiOutlinedInput-root:hover': {
    '& > fieldset': { border: `1px solid ${theme.palette.primary.main}` },
  },
  '&& .MuiOutlinedInput-root:active': {
    '& > fieldset': { border: `1px solid ${theme.palette.primary.main}` },
  },
  '& label': {
    fontFamily: 'muli, sans-serif',
    fontSize: 16,
    margin: 'dense',
  },

  '& .MuiInputLabel-root.Mui-focused': {
    marginLeft: 0,
    color: theme.palette.primary.main,
  },

  '& .MuiTypography-root': {
    color: theme.palette.primary.main,
  },

  '& .MuiInputBase-root': {
    color: theme.palette.primary.main,
  },

  ' & ::-webkit-calendar-picker-indicator': {
    filter: 'invert(100%)',
  },
}));

export const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: 'pointer',
  fontSize: '1.6rem',
  transition: 'color 0.5s ease-in-out',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: 'tenez, sans-serif',
  fontSize: '4.8rem',
  fontStyle: 'italic',
  color: theme.palette.primary.main,
  lineHeight: 'calc(1.5 * 48px)',
  width: '100%',
  overflow: 'hidden',
  paddingBottom: '2.5rem',
  textAlign: 'center',
}));
