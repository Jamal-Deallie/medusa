import { styled } from '@mui/system';
import { Box, Button, Typography, Container } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';

export const Nav = styled('nav')(({ theme }) => ({
  height: '10rem',
  width: '100%',
  position: 'fixed',
  zIndex: 1,
  overflow: 'hidden',
  background: theme.palette.primary.main,
}));

export const OptionWrapper = styled('div')({
  height: '3rem',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  cursor: 'pointer',
});

export const NavWrap = styled('div')(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.secondary.light,
  width: '100%',
  height: '10rem',
  padding: 'calc(1rem + 1.5625vw)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  opacity: 1,
}));

export const Logo = styled('img')({
  width: '5rem',
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  opacity: 0,
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

export const LinkContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '5rem',
}));

// export const NavLinks = styled(NavLink)(({ theme }) => ({
//   color: theme.palette.secondary.light,
//   fontSize: '1.6rem',
//   fontWeight: 'bold',
//   cursor: 'pointer',
//   fontFamily: 'muli, sans-serif',
//   textTransform: 'uppercase',
//   transition: 'all color .2s ease',
//   position: 'relative',
//   display: 'inline-block',
//   padding: '3px 0',
//   transform: 'translate(0, 150px)',
//   overflow: 'hidden',
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: 'calc(100% + 5px)',
//     width: 0,
//     right: 0,
//     height: '3px',
//     transition: 'width .4s cubic-bezier(0.51, 0.18, 0, 0.88) .1s',
//     background: theme.palette.primary.dark,
//   },
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     top: 'calc(100% + 5px)',
//     width: 0,
//     right: 0,
//     height: '3px',
//     transition: 'width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83)',
//     background: theme.palette.secondary.main,
//   },
//   '&:hover': {
//     '&::after': { width: '100%', left: 0 },
//     '&::before': { width: '100%', left: 0 },
//   },
//   '&.active': {
//     color: theme.palette.secondary.main,
//     // borderBottom: `1px solid ${theme.palette.secondary.main}`
//   },
// }));

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
  transition: 'all color .2s ease',
  position: 'relative',
  display: 'inline-block',
  padding: '3px 0',
  // '&&::WebkitTextRendering': 'optimizeSpeed',
  // '&&::WebkitTransformStyle': 'preserve-3d',
  willChange: 'transform, opacity',
  transform: 'translate(0, 150px)',
  opacity: 0,
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

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '1.6rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  textTransform: 'uppercase',
  fontFamily: 'muli, sans-serif',
}));

export const Links = styled(Link)`
  font-family: 'muli, sans-serif';
  text-transform: capitalize;
  letter-spacing: 0.5px;
  font-weight: 600;
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
  color: #e9e7dc;
  opacity: 1;
  @media screen and (max-width: 1024px) {
    font-size: 2.4rem;
  }
`;

export const OptionsContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '5rem',
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

// export const NavOption = styled(Typography)(({ theme }) => ({
//   color: theme.palette.secondary.light,
//   fontSize: '1.6rem',
//   fontWeight: 'bold',
//   cursor: 'pointer',
//   fontFamily: 'muli, sans-serif',
//   textTransform: 'uppercase',
//   transition: 'all color .2s ease',
//   position: 'relative',
//   display: 'inline-block',
//   padding: '3px 0',
//   // transform: 'translate(0, 150px)',
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: 'calc(100% + 5px)',
//     width: 0,
//     right: 0,
//     height: '3px',
//     transition: 'width .4s cubic-bezier(0.51, 0.18, 0, 0.88) .1s',
//     background: theme.palette.primary.dark,
//   },
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     top: 'calc(100% + 5px)',
//     width: 0,
//     right: 0,
//     height: '3px',
//     transition: 'width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83)',
//     background: theme.palette.secondary.main,
//   },
//   '&:hover': {
//     '&::after': { width: '100%', left: 0 },
//     '&::before': { width: '100%', left: 0 },
//   },
//   '&.active': {
//     color: theme.palette.primary.dark,
//   },
// }));
export const NavOption = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontSize: '1.6rem',
  fontWeight: 400,
  fontStyle: 'italic',
  cursor: 'pointer',
  fontFamily: 'muli, sans-serif',
  textTransform: 'uppercase',
  transition: 'all color .2s ease',
  position: 'relative',
  display: 'inline-block',
  padding: '3px 0',
  '&&::WebkitTextRendering': 'optimizeSpeed',
  '&&::WebkitTransformStyle': 'preserve-3d',
  willChange: 'transform, opacity',
  transform: 'translate(0, 150px)',
  opacity: 0,
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
}));
