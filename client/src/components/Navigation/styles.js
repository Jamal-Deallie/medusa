import { styled } from '@mui/system';
import { Box, Button, Typography, Container } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';

export const Nav = styled('nav')(({ theme }) => ({
  height: '10rem',
  position: 'relative',
  width: '100%',
  zIndex: 2,
}));

export const NavWrap = styled('div')(({ theme }) => ({
  background: theme.palette.secondary.light,
  color: theme.palette.secondary.main,
  width: '100%',
  height: '10rem',
  padding: '2rem 10rem',
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

export const LinkContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '5rem',
}));

export const NavLinks = styled(NavLink)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '1.6rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontFamily: 'open Sans, sans-serif',
  textTransform: 'uppercase',
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '1.6rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  textTransform: 'uppercase',
  fontFamily: 'open Sans, sans-serif',
}));

//   font-family: 'open Sans', sans-serif;
//   text-transform: uppercase;
//   letter-spacing: 0.5px;
//   font-weight: 600;
//   font-size: 1.6rem;
//   letter-spacing: 0.1rem;
//   color: #e9e7dc;
//   opacity: 1;
//   @media screen and (max-width: 1024px) {
//     font-size: 2.4rem;
//   }
// `;

export const Links = styled(Link)`
  font-family: 'open Sans', sans-serif;
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
  font-family: 'open Sans', sans-serif;
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

export const NavOption = styled(Typography)(({ theme }) => {
  //   fontFamily: 'open Sans, sans-serif',
  //   textTransform: 'uppercase',
  //   letterSpacing: '0.5px',
  //   fontWeight: 600,
  //   fontSize: '1.6rem',
  //   letterSpacing: '0.1rem',
  //   color: '#e9e7dc',
  //   opacity: 1,
});
