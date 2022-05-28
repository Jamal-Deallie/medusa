import { styled } from '@mui/system';
import { Typography } from '@mui/material';
export const CategorySection = styled('section')(({ theme }) => ({
  background: theme.palette.secondary.light,
}));

export const ProductsWrap = styled('div')({
  maxWidth: '140rem',
  width: '100%',
  margin: '0 auto',
  padding: '12.5rem 0',
});

export const Subheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 'clamp(2.70rem, calc(-0.44rem + 15.69vw), 10.74rem)',
  fontWeight: 400,
  fontFamily: 'Mightype',
  textAlign: 'left',
}));
