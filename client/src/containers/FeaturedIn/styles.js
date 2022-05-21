import { styled } from '@mui/system';
import { Container, Grid, Typography, Button } from '@mui/material';
export const FeatureInner = styled('div')({});

export const Logos = styled('img')({});

export const LogoWrap = styled('div')({});

export const FeatureOuter = styled('div')({
  height: '30rem',
});

export const HeadingContainer = styled('div')({
  padding: '10rem 5rem 0 5rem',
});

export const GridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2.5rem',
  background: theme.palette.primary.main,
  padding: '5rem',
}));

export const Subheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '10.5rem',
  fontWeight: 400,
  fontFamily: 'Mightype',
  textAlign: 'center',
}));

export const FeaturedInSection = styled('section')(({ theme }) => ({
  background: theme.palette.secondary.light,
  padding: '12.5rem',
}));
