import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const SubheaderContainer = styled(Box)(({ theme }) => ({
  paddingTop: '2.5rem',
  textAlign: 'center',
  maxWidth: '70rem',
  margin: '0 auto',
  // padding: 'calc(8px + 1.5625vw)',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    padding: 'calc(8px + 1.5vw)',
  },
}));

export const FeaturedInSection = styled('section')(({ theme }) => ({
  paddingTop: '8.5rem',
}));
