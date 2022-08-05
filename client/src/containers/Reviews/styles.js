import { styled } from '@mui/system';
import { Typography, Grid, Box } from '@mui/material';

export const ReviewSection = styled('section')(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '4% 0 10%',
  width: '100%',
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: 'tenez, sans-serif',
  fontSize: '4.8rem',
  fontStyle: 'italic',
  color: theme.palette.secondary.light,
  lineHeight: 1.2,
  width: '100%',
  overflow: 'hidden',
  marginBottom: '3.5rem',
  textAlign: 'center',
}));

export const FiveStars = styled('img')({
  width: '12.5rem',
  marginBottom: '2.5rem',
});

export const GridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',
  margin: ' 0 auto',
  marginBottom: '5.5rem',
}));

export const HeaderContainer = styled(Box)({
  overflow: 'hidden',
  paddingBottom: '4.5rem',
});

export const Cite = styled('cite')(({ theme }) => ({
  marginTop: '2.5rem',
  color: theme.palette.secondary.light,
  lineHeight: 1.2,
  fontSize: '1.6rem',
  fontFamily: 'muli, sans-serif',
  fontWeight: 400,
  fontStyle: 'normal',
  textAlign: 'center',
}));
