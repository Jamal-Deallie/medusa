import { styled } from '@mui/system';

export const Text = styled('text')(({ theme }) => ({
  height: '100vh',
  padding: '0 1rem',
  fontFamily: 'tenez, sans-serif',
  fontStyle: 'italic',
  fill: theme.palette.secondary.light,
  lineHeight: 1.2,
}));
