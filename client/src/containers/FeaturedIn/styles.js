import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const SubheaderContainer = styled(Box)({
  paddingTop: '2.5rem',
  textAlign: 'center',
  maxWidth: '70rem',
  margin: '0 auto',
  padding: 'calc(8px + 1.5625vw)',
  overflow: 'hidden',
});

export const FeaturedInSection = styled('section')(({ theme }) => ({
  background: theme.palette.primary.main,
  paddingTop: '8.5rem',
}));
