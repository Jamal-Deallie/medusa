import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const CheckoutButton = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  fontSize: '1.8rem',
  width: '100%',
  // minWidth: '30rem',
  borderRadius: '0',
  height: '6.5rem',
  transition: 'all transform 250ms',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.dark,
  },
}));
