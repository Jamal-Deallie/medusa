import { styled } from '@mui/system';

export const StyledLayout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  position: 'relative',
});

export const NavContainer = styled('div')({
  flexGrow: 1,
  height: '10rem',
  width: '100%',
  zIndex: 4,
  top: 0,
  left: 0,
  right: 0,
});

export const ContentContainer = styled('main')(({ theme }) => ({
  flexGrow: 2,
  minHeight: '60rem',
  position: 'relative',
  width: '100%',
  background: theme.palette.primary.main,
}));

export const FooterContainer = styled('div')({
  flexGrow: 1,
  position: 'relative',
  height: '40rem',
  width: '100%',
});
