import { styled } from '@mui/system';
import { Button, Typography } from '@mui/material';

export const CardButton = styled(Button)(({ theme }) => ({
  background: 'none',
  borderLeft: `1px solid ${theme.palette.secondary.light}`,
  borderRight: `1px solid ${theme.palette.secondary.light}`,
  borderBottom: `1px solid ${theme.palette.secondary.light}`,
  color: theme.palette.secondary.main,

  width: '100%',
  // minWidth: '30rem',
  borderRadius: '0',
  height: '6.5rem',
  transition: 'all transform 250ms',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.dark,
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontFamily: 'muli, sans-serif',
  color: theme.palette.secondary.light,
  fontSize: 'clamp(1.56rem, calc(1.22rem + 1.71vw), 1.8rem)',
  fontStyle: 'italic',
  textTransform: 'capitalize',
}));
