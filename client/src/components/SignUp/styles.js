import { styled } from '@mui/system';
import {
  Button,
  Box,
  TextField,
  OutlinedInput,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

export const MainButton = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.secondary.light,
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
    color: theme.palette.secondary.light,
  },
}));

export const Container = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}));

export const CustomInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& > fieldset': {
      border: `1px solid ${theme.palette.secondary.light}`,
      background: 'none',
    },
  },
  '&& .MuiOutlinedInput-root:hover': {
    '& > fieldset': { border: `1px solid ${theme.palette.secondary.light}` },
  },
  '&& .MuiOutlinedInput-root:active': {
    '& > fieldset': { border: `1px solid ${theme.palette.secondary.light}` },
  },
  '& label': {
    color: theme.palette.secondary.light,
    fontFamily: 'muli, sans-serif',
    fontSize: 16,
    margin: 'dense',
  },

  '& .MuiInputLabel-root.Mui-focused': {
    marginLeft: 0,
    color: theme.palette.secondary.light,
  },

  '& .MuiTypography-root': {
    color: theme.palette.secondary.light,
  },

  '& .MuiInputBase-root': {
    color: theme.palette.secondary.light,
  },

  ' & ::-webkit-calendar-picker-indicator': {
    filter: 'invert(100%)',
  },
}));

export const OutlineInput = styled(OutlinedInput)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme.palette.secondary.light}`,
    background: 'none',
  },

  '&& .MuiOutlinedInput-root:hover': {
    '& > fieldset': { border: `1px solid ${theme.palette.secondary.light}` },
  },
  '& label': {
    color: theme.palette.secondary.light,
    fontFamily: 'muli, sans-serif',
    fontSize: 16,
    margin: 'dense',
  },

  '& .MuiTypography-root': {
    color: theme.palette.secondary.light,
  },

  '& .MuiInputBase-root': {
    color: theme.palette.secondary.light,
  },

  ' & ::-webkit-calendar-picker-indicator': {
    filter: 'invert(100%)',
  },
}));

export const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.light,
  cursor: 'pointer',
  fontSize: '1.6rem',
  transition: 'color 0.5s ease-in-out',
  '&:hover': {
    color: theme.palette.secondary.dark,
  },
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: 'tenez, sans-serif',
  fontSize: '4.8rem',
  fontStyle: 'italic',
  color: theme.palette.secondary.light,
  lineHeight: 'calc(1.5 * 48px)',
  width: '100%',
  overflow: 'hidden',
  paddingBottom: '2.5rem',
  textAlign: 'center',
}));
