import { styled } from '@mui/system';
import { Typography, Divider } from '@mui/material';
export const SearchSection = styled('section')(({ theme }) => ({
  background: theme.palette.primary.main,
  minHeight: 'calc(100vh - 10rem)',
}));

export const ProductsWrap = styled('div')({
  maxWidth: '140rem',
  width: '100%',
  margin: '0 auto',
  padding: '12.5rem calc(8px + 1.5625vw)',
});

export const Subheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontStyle: 'italic',
  fontSize: 'clamp(2.70rem, calc(-0.44rem + 15.69vw), 10.74rem)',
  fontWeight: 400,
  fontFamily: ' tenez, sans-serif',
  textAlign: 'left',
}));

export const CustomDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  marginBottom: '7.5rem',
}));
