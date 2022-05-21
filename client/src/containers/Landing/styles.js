import { styled } from '@mui/system';
import { Container, Grid, Typography, Button } from '@mui/material';

export const LandingSection = styled('section')(({ theme }) => ({
  background: theme.palette.secondary.light,

  padding: '0 10rem',
}));

export const HeadingContainer = styled('div')({
  padding: '10rem 5rem 0 5rem',
});

export const LandingInner = styled(Grid)(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
}));

export const GridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2.5rem',
  background: theme.palette.primary.main,
  padding: '5rem',
}));

export const LandingImage = styled('img')({
  width: '55rem',
  display: 'block',
  margin: '0 auto',
  borderRadius: '25rem 25rem 0rem 0rem',
});

export const FeatureContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  background: theme.palette.secondary.light,
  height: '30rem',
}));





export const Subheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontSize: '2.4rem',
  fontWeight: 400,
  padding: '0 10rem',
}));

export const Bottom = styled('div')(({ theme }) => ({
  background: theme.palette.secondary.light,
  height: '30rem',
}));

export const Heading = styled(Typography)({
  fontSize: '17.5rem',
});

export const CustomButton = styled('button')(({ theme }) => ({
  background: theme.palette.secondary.main,
  display: 'inline-block',
  fontSize: '1.6rem',
  boxShadow: 'rgba(245, 244, 247, .25) 0 1px 1px inset',
  fontWeight: 600,
  height: '6rem',
  width: '19rem',
  textAlign: 'center',
  transition: 'all .3s ease-in)',
  fontFamily: 'open sans, sans-serif',
  textTransform: 'uppercase',
  borderRadius: '.5rem',
  '&:hover': {
    opacity: 0.7,
    color: theme.palette.secondary.light,
  },
}));
