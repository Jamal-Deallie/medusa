import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

import { Box, Typography, Divider, Grid } from '@mui/material';

export const MenuSection = styled('div')(({ theme }) => ({
  height: '100vh',
  width: '100%',
  display: 'none',
  opacity: 0,
  top: 0,
  zIndex: 10,
  position: 'fixed',
  left: 0,
  right: 0,
}));

export const MenuContainer = styled('div')(({ theme }) => ({
  height: '100%',
  width: '100%',
  padding: 'calc(8px + 1.5625vw)',
  opacity: 1,
  top: 0,
  zIndex: 10,
  position: 'absolute',
  left: 0,
  right: 0,
  backgroundColor: theme.palette.secondary.light,
  borderRight: `1px solid ${theme.palette.secondary.dark}`,
}));

export const MenuOptions = styled('div', {
  shouldForwardProp: prop => prop !== '$open',
})(({ theme, $open }) => ({
  height: '100vh',
  width: '55%',
  padding: '2.5rem',
  backgroundColor: '#4d5b5b',
  display: 'flex',
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
  position: 'fixed',
  zIndex: 10,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '2.5rem',
});

export const LinkWrap = styled(Box)({
  overflow: 'hidden',
  transform: 'translate(0, 500px)',
});

export const Links = styled(Link)(({ theme }) => ({
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
  transform: 'translate(0, 150px)',
  lineHeight: 1.5,
  opacity: 0,

}));

export const Logo = styled('img')({
  marginTop: '2.5rem',
  width: '3rem',
});

export const ButtonWrap = styled(Box)({
  top: 10,
  left: 25,
  height: '3rem',
  marginBottom: '2rem',
});

export const Button = styled(Box)(({ theme }) => ({
  position: 'relative',

  cursor: 'pointer',
}));

export const Close = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '1.4rem',
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
  gap: '5rem',
  maxWidth: '140rem',
  height: 'auto',
  overflow: 'hidden',
  background: 'orange',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
}));

export const LinkWrapper = styled(Box)({});

export const AboutContainer = styled(Box)({
  maxWidth: '50rem',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
});

export const AddressContainer = styled(Box)({
  maxWidth: '50rem',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
});

export const Subheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: 'muli, sans-serif',
  fontSize: '2.2rem',
  fontWeight: 600,
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

export const MenuWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100vh',
  gap: '2.5rem',
  background: 'orange',
});

export const CustomDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  margin: '2.5rem 0',
}));

export const Icons = styled('img')({
  height: '6rem',
});

export const SocialMediaSection = styled(Box)({
  marginTop: '2.5rem',
  display: 'inline-flex',
  gap: '5%',
  justifyContent: 'center',
  alignItems: 'flex-end',
  width: '100%',
});

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const Header = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: 'tenez, sans-serif',
  textTransform: 'capitalize',
  fontWeight: 'bold',
}));

export const OptionWrapper = styled('div')({
  height: '3rem',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  zIndex: 6,
  cursor: 'pointer',
});

export const NavOption = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontSize: '1.6rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontFamily: 'muli, sans-serif',
  textTransform: 'uppercase',
  transition: 'all color .2s ease',
  position: 'relative',
  display: 'inline-block',
  padding: '3px 0',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 'calc(100% + 5px)',
    width: 0,
    right: 0,
    height: '3px',
    transition: 'width .4s cubic-bezier(0.51, 0.18, 0, 0.88) .1s',
    background: theme.palette.primary.dark,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 'calc(100% + 5px)',
    width: 0,
    right: 0,
    height: '3px',
    transition: 'width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83)',
    background: theme.palette.secondary.main,
  },
  '&:hover': {
    '&::after': { width: '100%', left: 0 },
    '&::before': { width: '100%', left: 0 },
  },
  '&.active': {
    color: theme.palette.primary.dark,
  },
}));
