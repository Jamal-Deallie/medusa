import { styled } from '@mui/system';
import { Box, Button, Typography, Container } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';

export const Nav = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('lg')]: {
    display: 'block',
    height: '8rem',
    position: 'relative',
    width: '100%',
    zIndex: 2,
    overflow: 'hidden',
  },
}));

export const NavWrap = styled('div')(({ theme }) => ({
  background: theme.palette.secondary.light,
  color: theme.palette.secondary.main,
  width: '100%',
  height: '10rem',
  padding: '0 1rem',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const Logo = styled('img')({
  width: '5rem',
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
});

export const NavItems = styled('div')`
  display: flex;
  gap: 5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  flex: 2;
`;

export const NavOptions = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
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

export const NavLinks = styled(NavLink)(({ theme }) => ({
  color: theme.palette.primary.main,
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

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '1.6rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  textTransform: 'uppercase',
  fontFamily: 'muli, sans-serif',
}));

export const OptionsContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '2.5rem',
  cursor: 'pointer',
});

export const NavButton = styled(Button)`
  font-family: 'muli, sans-serif';
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #e9e7dc;
  cursor: pointer;
  border: 3px solid;
  padding: 1.5rem 2.5rem;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }
`;

export const NavOption = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '1.6rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontFamily: 'muli, sans-serif',
  textTransform: 'uppercase',
  transition: 'all color .2s ease',
  position: 'relative',
  display: 'inline-block',
  padding: '3px 0',
  zIndex: 100,
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

export const ToggleBtn = styled(Box)({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  width: '30px',
  cursor: 'pointer',
  gap: '5px',
  zIndex: 10,
  marginLeft: '2.5rem',
});

export const MenuOptions = styled('div')({
  height: '70vh',
  width: '100%',
  padding: '2.5rem',
  backgroundColor: '#4d5b5b',
  display: 'flex',
  zIndex: 10,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '2.5rem',
  top: 0,
  position: 'fixed',
});

export const SocialSection = styled('div')({
  height: '30vh',
  width: '100%',
  padding: '2.5rem',
  backgroundColor: '#d8b792',
  display: 'flex',
  zIndex: 10,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '2.5rem',
  top: '70vh',
  position: 'fixed',
});

export const LinkWrap = styled(Box)({
  overflow: 'hidden',
});
export const Links = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '4.5rem',
  cursor: 'pointer',
  transition: 'color .2s ease',
  position: 'relative',
  padding: '1rem 0',
  fontFamily: ' tenez, sans-serif',
  width: 'auto',
  display: 'block',
  '&:hover': {
    color: theme.palette.secondary.light,
  },
}));

export const MobileMenu = styled(Box)({
  background: 'red',

  height: '100vh',
  zIndex: 5,
});

export const ButtonWrap = styled(Box)({
  position: 'absolute',
  height: '3rem',
  marginBottom: '2rem',
  pointer: 'cursor',
  top: 5,
});

export const ButtonContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 100,
}));

export const Close = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '1.8rem',
  fontWeight: '600',
  position: 'relative',
  height: '3rem',
  marginBottom: '2rem',
  transition: 'color .2 ease',
  '&:hover': {
    color: theme.palette.secondary.light,
  },
}));

export const AddressContainer = styled(Box)({
  overflow: 'hidden',
});

export const AboutContainer = styled(Box)({
  maxWidth: '50rem',
  overflow: 'hidden',
});

export const Subheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: ' tenez, sans-serif',
  fontSize: '3.4rem',
}));

export const SocialContainer = styled(Box)(({ theme }) => ({
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
  width: '100%',
});

export const Icons = styled('img')({
  height: '3rem',
});
