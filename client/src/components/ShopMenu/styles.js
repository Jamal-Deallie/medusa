import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

export const MenuSection = styled(Box)({
  height: '100vh',
  width: '100%',
  display: 'none',
  opacity: 0,
  top: 0,
  zIndex: 10,
  position: 'fixed',
  left: 0,
  right: 0,
});

export const MenuContainer = styled('div')(({ theme }) => ({
  height: '100%',
  width: '100%',
  opacity: 1,
  top: 0,
  zIndex: 10,
  position: 'absolute',
  left: 0,
  right: 0,
  backgroundColor: theme.palette.secondary.light,
  padding: 'calc(8px + 1.5625vw)',
}));

export const Links = styled(Link, {
  shouldForwardProp: prop => prop !== '$dn',
})(({ theme, $dn }) => ({
  color: theme.palette.primary.main,
  fontSize: 'clamp(3.13rem, calc(1.52rem + 8.00vw), 7rem)',
  fontWeight: 400,
  textTransform: 'capitalize',
  cursor: 'pointer',
  transition: 'color 0.2s ease',
  position: 'relative',
  fontFamily: 'tenez, sans-serif',
  fontStyle: 'italic',
  overflow: 'hidden',
  lineHeight: 1.5,
  padding: 'calc(8px + 1.5625vw)',
  display: $dn ? 'none' : 'block',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
    fontSize: '4.8rem',
  },
}));

export const Button = styled(Box)({
  position: 'relative',
  cursor: 'pointer',
});

export const Close = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '2.4rem',
  fontWeight: '600',
  position: 'relative',
  transition: 'color .2 ease-in-out',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));

export const LinkContainer = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '5rem',
  maxWidth: '140rem',
  height: 'auto',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    gap: '1rem',
    flexDirection: 'column',
  },
}));

export const LinkWrap = styled(Box)({
  overflow: 'hidden',
});

export const MenuWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100vh',
  gap: '2.5rem',
  [theme.breakpoints.down('md')]: {
    marginTop: '5.5rem',
    justifyContent: 'flex-start',
  },
}));
