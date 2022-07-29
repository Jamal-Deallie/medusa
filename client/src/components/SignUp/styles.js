import { styled } from '@mui/material/styles';
import { Container, TextField, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const SignUpSection = styled(Box)(({ theme }) => ({
  background: theme.palette.secondary.light,
  minHeight: '60rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const CustomInput = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': {
    color: theme.palette.secondary.main,
  },
  '& label': {
    color: theme.palette.primary.main,
    fontFamily: 'muli, sans-serif',
    fontSize: '1.6rem',
    margin: 'dense',
  },
  '&& .MuiInput-underline:hover:before': {
    borderBottomColor: '#e9e7dc',
  },
  '& .MuiInput-underline': {
    marginTop: 25,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.palette.primary.main,
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: theme.palette.primary.main,
  },
  '& .MuiInput-underline:focused': {
    borderBottomColor: ' #e9e7dc',
  },
}));

export const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: 'pointer',
  fontSize: '1.6rem',
  transition: 'color 0.2s ease-in-out',
  fontWeight: 400,
  '&:hover': {
    color: theme.palette.secondary.main,
    fontWeight: 400,
  },
}));

export const FormWrap = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '55rem',
  height: '100%',
  padding: 'calc(.8rem + 1.5vw)',
  margin: '0 auto',
}));

export const FormContainer = styled(Container)({
  margin: '0 auto',
  position: 'relative',
  height: '80rem',
  width: '100%',
});
