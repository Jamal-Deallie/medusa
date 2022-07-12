import { styled } from '@mui/system';
import { Button, Typography } from '@mui/material';

export const CardButton = styled(Button, {
  shouldForwardProp: prop => prop !== '$main',
})(({ theme, $main }) => ({
  background: $main ? theme.palette.secondary.main : 'none',
  borderColor: theme.palette.secondary.light,
  borderStyle: 'solid',
  borderWidth: $main ? 'none' : '0 1px 1px 1px',
  color: theme.palette.secondary.main,
  width: '100%',
  borderRadius: '0',
  height: '6.5rem',
  transition: 'background transform 250ms',
  fontWeight: 600,
  '&:hover': {
    background: theme.palette.primary.light,
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontFamily: 'muli, sans-serif',
  color: theme.palette.secondary.light,
  fontSize: 'clamp(1.56rem, calc(1.22rem + 1.71vw), 1.8rem)',
  fontStyle: 'italic',
  textTransform: 'capitalize',
}));
