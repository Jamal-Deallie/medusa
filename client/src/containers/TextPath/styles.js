import { styled } from '@mui/system';

export const Text = styled('text')(({ theme }) => ({
  padding: '0 1rem',
  fontFamily: 'tenez, sans-serif',
  fontStyle: 'italic',
  fill: theme.palette.primary.main,
  lineHeight: 1.2,
}));

export const ContentSection = styled('section')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
