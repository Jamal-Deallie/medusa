import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

export const MenuOptions = styled('div', {
  shouldForwardProp: prop => prop !== '$open',
})(({ theme, $open }) => ({
  top: 0,
  left: 0,
  height: '100vh',
  width: '55%',
  padding: '2.5rem',
  backgroundColor: '#4d5b5b',
  display: 'flex',
  position: 'fixed',
  zIndex: 10,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '2.5rem',
}));

export const SocialSection = styled('div')({
  top: 0,
  right: 0,
  height: '100vh',
  width: '45%',
  padding: '2.5rem',
  backgroundColor: '#d8b792',
  display: 'flex',
  position: 'absolute',
  zIndex: 10,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '2.5rem',
});

export const LinkWrap = styled(Box)({
  overflow: 'hidden',
});
export const Links = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '9rem',
  cursor: 'pointer',
  transition: 'color .2s ease',
  position: 'relative',
  padding: '2rem 0',
  fontFamily: 'Mightype, open-sans, sans-serif',
  width: 'auto',
  display: 'block',
  '&:hover': {
    color: theme.palette.secondary.light,
  },
}));

export const Logo = styled('img')({
  margin: '5rem 0 1rem 0',
  width: '5rem',
});

export const MenuSection = styled(Box)({
  display: 'flex',
});

export const ButtonWrap = styled(Box)({
  position: 'absolute',
  top: 10,
  left: 25,
  height: '3rem',
  marginBottom: '2rem',
});

export const Button = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '3rem',
  marginBottom: '2rem',
  cursor: 'pointer',
}));

export const Close = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '3.2rem',
  fontWeight: '600',
  position: 'relative',
  height: '3rem',
  marginBottom: '2rem',
  transition: 'color .2 ease',
  '&:hover': {
    color: theme.palette.secondary.light,
  },
}));

export const LinkContainer = styled(Box)({});

export const AddressContainer = styled(Box)({
  paddingTop: '5.5rem',
  overflow: 'hidden',
});

export const AboutContainer = styled(Box)({
  maxWidth: '50rem',
  overflow: 'hidden',
});

export const Subheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: 'Mightype, open-sans, sans-serif',
  fontSize: '4.2rem',
}));

export const SocialContainer = styled(Box)(({ theme }) => ({
  paddingTop: '5.5rem',
  color: theme.palette.primary.main,
  fontSize: '3.2rem',
  fontWeight: '600',
  overflow: 'hidden',
}));

export const RightContainer = styled(Box)({
  width: '100%',
  padding: '5.5rem 2rem 0 0',
});

export const LeftContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
});
