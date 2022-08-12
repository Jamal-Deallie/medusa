import { styled } from '@mui/system';
import { Box, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export const HeroSection = styled(Box)({
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  position: 'relative',
  backgroundImage:
    'linear-gradient(rgba(20, 20, 20, .5),rgba(20, 20, 20, .5)), url("https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1660182569/Medusa/hero.webp")',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});

export const HeroInnerContainer = styled(Box)({
  width: '100%',
  height: 'calc(100vh - 10rem)',
  zIndex: 1,
  display: 'flex',
  textAlign: 'center',
});

export const Heading = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(6.99rem, calc(-0.03rem + 30.07vw), 55.511rem)',
  fontFamily: 'tenez, sans-serif',
  fontStyle: 'italic',
  color: theme.palette.secondary.light,
  lineHeight: 1,
  fontKerning: 'none',
  textRendering: 'optimizeSpeed',
  transform: 'translateZ(0)',
  zIndex: 1,
  textAlign: 'center',
  textShadow: '-1px 1px 2px rgba(0,0,0,0.2)',
  WebkitTextStroke: `0.5px ${theme.palette.secondary.light}`,
  //   overflow: 'hidden'
}));

export const CustomLink = styled(Link)(({ theme }) => ({
  fontFamily: 'muli, sans-serif',
  transition: 'color borderBottom 0.3s ease',
  fontSize: 'clamp(1.41rem, calc(1.10rem + 1.52vw), 2.98rem)',
  fontWeight: 600,
  color: theme.palette.secondary.light,
  cursor: 'pointer',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '1.2px',
    left: 0,
    bottom: '-5px',
    background: theme.palette.secondary.light,
    transform: 'scale(1)',
    transformOrigin: 'left center',
    transition: 'transform .2s ease-in-out',
  },
  '&:hover': {
    color: theme.palette.primary.main,
    '&::before': {
      background: theme.palette.primary.main,
    },
  },
  [theme.breakpoints.down('md')]: {
    marginTop: 0,
  },
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  zIndex: 1,
  margin: '0 auto',
  padding: 'calc(.8rem + 1.5vw)',
  height: '100%',
  [theme.breakpoints.down('md')]: {
    marginTop: '15vh',
  },
}));

export const Subheader = styled(Typography)(({ theme }) => ({
  textShadow: '-1px 1px 2px rgba(0,0,0,0.2)',
  fontWeight: 800,
  color: theme.palette.secondary.light,
  marginBottom: '5.5rem',
  [theme.breakpoints.down('md')]: {
    margin: '2.5vh 0',
  },
}));
