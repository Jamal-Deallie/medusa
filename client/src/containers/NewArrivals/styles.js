import { styled } from '@mui/system';
import { Container, Grid, Typography, Box } from '@mui/material';

export const Subheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '6.5rem',
  fontWeight: 400,
  fontFamily: 'Mightype',
  textAlign: 'center',
  paddingBottom: '5.5rem',
}));

export const NewArrivalsSection = styled('section')(({ theme }) => ({
  background: theme.palette.secondary.light,
  padding: '12.5rem 1rem',
}));

export const GridItem = styled(Grid)(({ theme }) => ({
  minWidth: '35rem',
  width: '100%',
}));

export const ContentContainer = styled(Box)({
  padding: '5.5rem',

});

export const Image = styled('img')({ width: '100%' });

export const ImageWrap = styled(Container)({
  width: '100%',
});

export const ContentWrap = styled('div')({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
});

export const GridContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
  minWidth: '35rem',
  '& .MuiGrid-root': {
    padding: '1rem',
  },
});
