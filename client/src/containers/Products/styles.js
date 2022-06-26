import { styled } from '@mui/system';
import { Typography, Box, Divider } from '@mui/material';

export const CustomDivider = styled(Divider)(({ theme }) => ({
  background: theme.palette.primary.main,
  paddingLeft: 'calc(8px + 1.5625vw)',
}));

export const ProductsSection = styled('section')(({ theme }) => ({
  background: theme.palette.secondary.light,
}));

export const ProductsWrap = styled('div')({
  maxWidth: '140rem',
  width: '100%',
  margin: '0 auto',
  padding: '12.5rem calc(8px + 1.5625vw)',
  background: 'red',
});

export const Subheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 'clamp(2.70rem, calc(-0.44rem + 15.69vw), 10.74rem)',
  fontWeight: 400,
  fontFamily: ' tenez, sans-serif',
  textAlign: 'left',
}));

export const Container = styled(Box)({
  paddingTop: '7.5rem',
});
