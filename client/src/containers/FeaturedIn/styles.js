import { styled } from '@mui/system';
import { Container, Grid, Typography, Button } from '@mui/material';
export const FeatureInner = styled('div')({});

export const Logo = styled('img')({
  height: '5rem',
});



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
  padding: '5rem',
}));




export const Subheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 'clamp(2.70rem, calc(-0.44rem + 15.69vw), 10.74rem)',
  fontWeight: 400,
  fontFamily: 'Mightype',
  textAlign: 'center',
}));
export const FeaturedInSection = styled('section')(({ theme }) => ({
  background: theme.palette.secondary.light,
  padding: '12.5rem',
}));
