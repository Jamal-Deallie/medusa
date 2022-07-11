import { styled } from '@mui/system';
import { Grid, Typography, Box } from '@mui/material';
export const FeatureInner = styled('div')({});

export const Logo = styled('img')({
  width: '15rem',
});

export const FeatureOuter = styled('div')({
  height: '30rem',
});

export const HeadingContainer = styled('div')({
  padding: '10rem 5rem 0 5rem',
});

export const GridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.5rem',
  padding: '5rem',
}));
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

export const LogoWrap = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '16rem',
  height: '8rem',
  overflow: 'hidden',
});

export const GridContainer = styled(Grid)({
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '120rem',
});
