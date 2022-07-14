import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const LandingSection = styled('section')(({ theme }) => ({
  width: '100%',
  position: 'relative',
  background: theme.palette.primary.main,
  [theme.breakpoints.down('sm')]: {
    height: 'calc(100vh - 10rem)',
    position: 'relative',
  },
}));

export const LandingInner = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
}));

export const LandingOuter = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  padding: 'calc(8px + 1.5625vw)',
  [theme.breakpoints.down('sm')]: {
    height: 'calc(100vh - 10rem)',
    position: 'relative',
    padding: 'calc(8px + 1.5625vw) 0',
  },
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: 'auto',
  marginBottom: '-17.5rem',
  [theme.breakpoints.down('sm')]: { marginBottom: 0 },
}));

export const HeadingLeft = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(8.53rem, calc(-1.77rem + 8.96vw), 15.87rem)',
  fontFamily: 'tenez, sans-serif',
  fontStyle: 'italic',
  color: theme.palette.secondary.main,
  lineHeight: 1.5,
  fontKerning: 'none',
  textRendering: 'optimizeSpeed',
  transform: 'translateZ(0)',
  zIndex: 1,
  textShadow: '-1px 1px 2px rgba(0,0,0,0.6)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '7.5rem',
    marginTop: 0,
  },
}));

export const HeadingRight = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(8.53rem, calc(-1.77rem + 8.96vw), 15.87rem)',
  fontFamily: 'tenez, sans-serif',
  fontStyle: 'italic',
  color: theme.palette.secondary.main,
  lineHeight: 1.5,
  fontKerning: 'none',
  textRendering: 'optimizeSpeed',
  transform: 'translateZ(0)',
  zIndex: 1,
  marginTop: 'calc(100vh - 90vh)',
  textShadow: '-1px 1px 2px rgba(0,0,0,0.6)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '7.5rem',
    marginTop: '3rem',
  },
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  marginBottom: '5.5rem',
  [theme.breakpoints.down('sm')]: {
    height: 'calc(100vh - 10rem)',
    position: 'absolute',
    top: 0,
    overflow: 'hidden',
  },
}));

export const ImageWrap = styled(Box)(({ theme }) => ({
  height: '50rem',
  width: '40rem',
  [theme.breakpoints.down('sm')]: {
    height: 'calc(100vh - 10rem)',
    width: '100%',
  },
}));

export const LandingImage = styled('img')(({ theme }) => ({
  height: '50rem',
  width: '40rem',
  objectFit: 'cover',
  filter: 'Brightness(95%)',
  [theme.breakpoints.down('sm')]: {
    height: 'calc(100vh - 10rem)',
    width: '100%',
  },
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  maxWidth: '40rem',
  width: '100%',
  padding: '0 calc(8px + 1.5625vw)',
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    bottom: 0,
    marginBottom: '2.5rem',
  },
}));
