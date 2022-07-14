import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

export const Nav = styled('nav')(({ theme }) => ({
  height: '10rem',
  width: '100%',
  background: theme.palette.primary.main,
  position: 'relative',
}));

export const NavWrap = styled('div')(({ theme }) => ({
  margin: '0 auto',
  background: theme.palette.primary.main,
  color: theme.palette.secondary.light,
  maxWidth: '150rem',
  height: '10rem',
  paddingTop: 'calc(1rem + 1.5625vw)',
  paddingBottom: 'calc(1rem + 1.5625vw)',
  paddingRight: 'calc(1rem + 2.5vw)',
  paddingLeft: 'calc(1rem + 2.5vw)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  zIndex: 4,
}));

export const Logo = styled('img')({
  width: '5rem',
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
});

export const LinkContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '5rem',
}));

export const NavLinks = styled(NavLink, {
  shouldForwardProp: prop => prop !== '$dn',
})(({ theme, $dn }) => ({
  color: theme.palette.secondary.light,
  fontSize: '1.6rem',
  fontWeight: 400,
  fontStyle: 'italic',
  cursor: 'pointer',
  fontFamily: 'muli, sans-serif',
  textTransform: 'uppercase',
  transition: 'all opacity color .2s ease',
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
    background: theme.palette.secondary.light,
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
    color: theme.palette.secondary.dark,
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const OptionsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '5rem',
  cursor: 'pointer',
  [theme.breakpoints.down('md')]: {
    gap: '3rem',
  },
}));
