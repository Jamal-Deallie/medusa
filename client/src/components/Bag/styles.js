import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const ProductImage = styled('img')({
  width: '14rem',
});

export const NameWrap = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

export const DetailsWrap = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: ' 0 1.5rem',
});

export const SubheaderContainer = styled('div')(({ theme }) => ({
  background: theme.palette.primary.main,
  width: '100%',
  height: '10rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: ' 0 1.5rem',
}));

export const CartFooter = styled('div')(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '2rem',
  height: '20rem',
}));

export const SubtotalWrap = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const TextWrapper = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
});

export const NavOption = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '1.6rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontFamily: 'open Sans, sans-serif',
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
