import { styled } from '@mui/system';
import { Container, Grid, Typography, Button } from '@mui/material';

export const Subheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '10.5rem',
  fontWeight: 400,
  fontFamily: 'Mightype',
  textAlign: 'center',
}));

export const NewArrivalsSection = styled('section')(({ theme }) => ({
  background: theme.palette.secondary.light,
  padding: '12.5rem 1rem',
}));

export const GridItem = styled(Grid)(({ theme }) => ({
  minWidth: '35rem',
  width: '100%',
}));

export const Image = styled('img')({});

export const ImageWrap = styled('div')({
  height: '100%',
});

export const ContentWrap = styled('div')({
  display: 'flex',
  maxWidth: '135rem',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
});

export const GridContainer = styled(Grid)({
  maxWidth: '130rem',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
  minWidth: '35rem',
  '& .MuiGrid-root': {
    padding: '1rem'
  },
});
