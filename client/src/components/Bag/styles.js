import { styled } from '@mui/material/styles';

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
