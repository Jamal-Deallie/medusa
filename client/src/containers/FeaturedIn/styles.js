import { styled } from '@mui/system';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
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

export const Subheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: ' clamp(2.59rem, calc(0.51rem + 10.42vw), 7.93rem)',
  fontWeight: 400,
  fontFamily: 'Mightype',
  textAlign: 'center',
  paddingBottom: '5rem',
}));
export const FeaturedInSection = styled('section')(({ theme }) => ({
  background: theme.palette.secondary.light,
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
  maxWidth: '140rem',
});
