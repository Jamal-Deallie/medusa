import { styled } from '@mui/system';
import { Typography, Divider, Container, Box } from '@mui/material';
export const ProductSection = styled('section')(({ theme }) => ({
  background: theme.palette.primary.main,
  minHeight: 'calc(100vh - 10rem)',
  padding: '10.5rem 0',
  [theme.breakpoints.down('md')]: {
    padding: '6.5rem 0',
  },
}));

export const ProductsWrap = styled(Box)({
  width: '100%',
  margin: '0 auto',
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

export const ItemContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}));

export const HeaderContainer = styled(Container)({
  textTransform: 'capitalize',
  padding: 'calc(.8rem + 1.5625vw)',
});
