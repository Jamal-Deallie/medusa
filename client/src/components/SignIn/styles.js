import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  OutlinedInput,
  Button,
  FormControl,
  InputBase,
} from '@mui/material';

export const LoginWrap = styled('div')({
  width: '45rem',
  margin: '0 auto',
});

export const MainButton = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.primary.main,
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
    color: theme.palette.secondary.light,
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
export const FormContainer = styled(FormControl)(({ theme }) => ({
  color: theme.palette.secondary.light,
  '& .Mui-focused': {
    color: theme.palette.secondary.light,
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
  '&& .MuiOutlinedInput-root.Mui-focused': {
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
  color: theme.palette.secondary.light,
  '& .MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme.palette.secondary.light}`,
    background: 'none',
  },

  '&& .MuiOutlinedInput-root:hover': {
    '& > fieldset': { border: `1px solid ${theme.palette.secondary.light}` },
  },
  '&& .MuiOutlinedInput-root:focus': {
    '& > fieldset': { border: `1px solid ${theme.palette.secondary.light}` },
  },
  '& label': {
    color: theme.palette.secondary.light,
    fontFamily: 'muli, sans-serif',
    fontSize: 16,
    margin: 'dense',
  },

  '& .MuiInputLabel-formControl.MuiFormLabel-root.Mui-focused': {
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

export const LinkContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '5px',
  marginTop: '2.5rem',
  textAlign: 'center',
  color: theme.palette.secondary.light,
}));
