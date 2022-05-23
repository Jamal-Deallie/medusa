import { styled } from '@mui/system';
import { Container, Grid, Typography, Button } from '@mui/material';

export const LandingSection = styled('section')(({ theme }) => ({
  background: theme.palette.secondary.light,
  position: 'relative',
  padding: '0 10rem',
  [theme.breakpoints.down('md')]: {
    padding: '1rem',
  },
}));

export const ContentContainer = styled('div')(({ theme }) => ({
  padding: '5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  [theme.breakpoints.down('lg')]: {
    alignItems: 'center',
    textAlign: 'center',
  },
}));

export const LandingInner = styled(Grid)(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
}));

export const GridItem = styled(Grid)(({ theme }) => ({
  background: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5',
  position: 'relative',
}));

export const LandingImage = styled('img')({
  width: '100%',
  borderRadius: '50rem 55rem 0rem 0rem',
});

export const FeatureContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  background: theme.palette.secondary.light,
  height: '30rem',
}));

export const ImageWrap = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'calc(100% - 20rem)',
  height: '100%',
  padding: '2rem 0',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

export const Subheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontSize: '1.8rem',
  padding: '5rem 0',
  maxWidth: '50rem',
}));

export const Bottom = styled('div')(({ theme }) => ({
  background: theme.palette.secondary.light,
  height: '30rem',
}));

export const Heading = styled('h1')(({ theme }) => ({
  fontSize: 'clamp(9.03rem, calc(-1.77rem + 9.96vw), 15.87rem)',
  color: theme.palette.secondary.main,
  fontFamily: 'Mightype',
  lineHeight: '1.167',
  fontWeight: 300,
  [theme.breakpoints.down('lg')]: {
    textAlign: 'center',
  },
}));

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

export const ImageMobile = styled('div')(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.down('lg')]: {
    display: 'block',
    paddingTop: '4rem'
  },
}));
