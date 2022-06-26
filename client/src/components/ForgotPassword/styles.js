import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  OutlinedInput,
  Button,
} from '@mui/material';

export const LoginWrap = styled('div')({
  width: '45rem',
  margin: '0 auto',
});

export const MainButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  fontSize: 16,
  fontFamily: 'muli, sans-serif',
  fontWeight: 400,
  padding: '1.5rem 4rem',
  borderRadius: '8px',
  boxSizing: 'border-box',
  width: '100%',
  marginTop: '5rem',
  transition: 'background border color 0.5s ease-in-out',
  '&:hover': {
    background: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
}));

export const Links = styled(Link)(({ theme }) => ({
  cursor: 'pointer',
  fontSize: '1.2rem',
  transition: 'color 0.5s ease-in-out',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export const FormWrap = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: '30px',
  padding: '7rem 3rem',
  height: '100%',
  gap: '5rem',
}));

export const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: 'pointer',
  fontSize: '1.6rem',
  transition: 'color 0.5s ease-in-out',
  '&:hover': {
    color: theme.palette.secondary.dark,
  },
}));

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
    fontSize: 16,
    margin: 'dense',
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

export const OutlineInput = styled(OutlinedInput)(({ theme }) => ({
  color: theme.palette.primary.main,
  '& .MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme.palette.primary.main}`,
    background: 'none',
  },

  '&& .MuiOutlinedInput-root:hover': {
    '& > fieldset': { border: `1px solid ${theme.palette.primary.main}` },
  },
  '& label': {
    color: theme.palette.primary.main,
    fontFamily: 'muli, sans-serif',
    fontSize: 16,
    margin: 'dense',
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

export const Text = styled(Typography)(({ theme }) => ({
  marginTop: '5.5rem',
  color: theme.palette.primary.main,
  fontFamily: 'muli, sans-serif',
  fontSize: '1.6rem',
}));
