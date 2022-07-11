import { styled } from '@mui/system';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
export const FeatureInner = styled('div')({});

export const SubheaderContainer = styled(Box)({
  paddingTop: '2.5rem',
  textAlign: 'center',
  maxWidth: '70rem',
  margin: '0 auto',
});

export const Subheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontSize: '32px',
  fontWeight: 400,
  fontFamily: ' tenez, sans-serif',
  textAlign: 'center',
}));
export const FeaturedInSection = styled('section')(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '12.5rem 0 6.25rem',
}));
