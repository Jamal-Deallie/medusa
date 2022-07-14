import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Box, OutlinedInput } from '@mui/material';

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
