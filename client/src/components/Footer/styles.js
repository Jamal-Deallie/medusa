import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
import { Grid, Box, Typography, Divider } from '@mui/material';

export const CustomFooter = styled('footer')(({ theme }) => ({
  background: theme.palette.primary.main,
  height: 'auto',
  borderTop: `1px solid ${theme.palette.secondary.light}`,
  padding: '5rem',
}));

export const Icons = styled('img')({
  height: '3rem',
});

export const Header = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontFamily: 'tenez, sans-serif',
  textTransform: 'capitalize',
  fontWeight: 'bold',
}));

export const Links = styled(NavLink)(({ theme }) => ({
  fontFamily: '"open-sans", sans-serif"',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));

export const GridLinks = styled(Grid)(({ theme }) => ({
  marginTop: '5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  color: theme.palette.primary.main,
  padding: 'none',
  gap: 10,
}));

export const CopyrightWrap = styled(Box)({
  display: 'inline-flex',
  gap: 10,
});

export const NavLinks = styled(NavLink)(({ theme }) => ({
  color: theme.palette.secondary.light,
  transition: 'color .04 ease-in-out',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));
export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
}));

export const Logo = styled('img')({
  width: '5rem',
});

export const CustomDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  margin: '5rem 0',
}));

export const BottomRow = styled(Box)({
  display: 'flex',
  gap: '2.5rem',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '0 1rem',
});
export const SocialMediaSection = styled(Box)({
  display: 'inline-flex',
  gap: '2rem',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});
