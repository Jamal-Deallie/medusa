import { styled } from '@mui/material/styles';
import { Box, Typography, Divider, Button, Drawer } from '@mui/material';

export const CartSection = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  background: theme.palette.secondary.light,
  height: '100vh',
  width: '50rem',
}));

export const CartFooter = styled('div')(({ theme }) => ({
  padding: '2rem',
  height: '25rem',
  borderTop: `1px solid ${theme.palette.primary.main}`,
}));

export const CustomDivider = styled(Divider)(({ theme }) => ({
  background: theme.palette.primary.main,
}));
export const ProductImage = styled('img')({
  width: '10rem',
});

export const ItemHeader = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '5rem',
});

export const DetailsSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  padding: ' 0 1rem',
});

export const Details = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '5rem',
});

export const SubheaderContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '5.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: ' 0 1.5rem',
  bottomBorder: `1px solid ${theme.palette.primary.main}`,
}));

export const SubtotalWrap = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '2.5rem',
});

export const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: 'muli, sans-serif',
  color: theme.palette.primary.main,
  fontSize: 'clamp(1.56rem, calc(1.22rem + 1.71vw), 1.8rem)',
  fontStyle: 'italic',
}));
export const Text = styled(Typography)(({ theme }) => ({
  fontFamily: 'muli, sans-serif',
  color: theme.palette.primary.main,
  fontSize: '1.6rem',
  fontStyle: 'italic',
}));

export const TextWrapper = styled(Box)({});

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

export const QuantitySection = styled(Box)({
  display: 'flex',
});

export const QuantityBtn = styled('button')(({ theme }) => ({
  width: '3.2rem',
  background: theme.palette.primary.main,
  cursor: 'pointer',
  borderRadius: '3px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const Quantity = styled(Box)({
  width: '3.2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const CustomButton = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  fontSize: 16,
  fontFamily: 'muli, sans-serif',
  fontWeight: 300,
  padding: '1rem 4rem',
  borderRadius: '3px',
  boxSizing: 'border-box',
  height: '5rem',
  width: '30rem',
  transition: 'border color background 0.2s ease-in-out',
  opacity: 0,
  '&:hover': {
    background: 'none',
    color: theme.palette.secondary.main,
    border: `2px solid ${theme.palette.secondary.main}`,
  },
}));

export const CustomDrawer = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    '& .MuiDrawer-paper': { width: "100vw", backgroundColor: 'green' },
  },
}));
