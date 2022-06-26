import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const CheckoutButton = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  fontSize: 16,
  fontFamily: 'muli, sans-serif',
  fontWeight: 600,
  padding: '1rem 4rem',
  borderRadius: '3px',
  boxSizing: 'border-box',
  height: '5rem',
  width: '100%',
  letterSpacing: '.5px',
  transition: 'border color background 0.2s ease-in-out',
  '&:hover': {
    background: 'none',
    color: theme.palette.secondary.main,
    border: `2px solid ${theme.palette.secondary.main}`,
  },
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  fontSize: 16,
  fontFamily: 'muli, sans-serif',
  fontWeight: 300,
  fontStyle: 'italic',
  padding: '1rem 4rem',
  borderRadius: '3px',
  boxSizing: 'border-box',
  height: '5rem',
  width: '100%',
  transition: 'border color background 0.2s ease-in-out',
  '&:hover': {
    background: 'none',
    color: theme.palette.secondary.main,
    border: `2px solid ${theme.palette.secondary.main}`,
  },
}));
