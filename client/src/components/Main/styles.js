import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const StyledLayout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  position: 'relative',
});

export const NavContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  height: '10rem',
  width: '100%',
  zIndex: 2,
  position: 'fixed',
  backgroundColor: theme.palette.primary.main,
}));

export const ContentContainer = styled('main')(({ theme }) => ({
  flexGrow: 2,
  minHeight: '60rem',
  width: '100%',
  background: theme.palette.secondary.light,
}));

export const FooterContainer = styled('div')({
  flexGrow: 1,
  position: 'relative',
  height: '40rem',
  width: '100%',
});
