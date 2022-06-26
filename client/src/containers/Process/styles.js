import { styled } from '@mui/system';
import { Container, Box, Grid, Typography } from '@mui/material';

export const GridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.5rem',
}));

export const Subheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '10.5rem',
  fontWeight: 400,
  fontFamily: ' tenez, sans-serif',
  textAlign: 'center',
  paddingBottom: '5rem',
}));

export const HeadingContainer = styled('div')({
  padding: '10rem 5rem 0 5rem',
});

export const Icon = styled('img')({
  height: '9rem',
});

export const ProcessSection = styled('section')(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '6.25rem 0',
}));

export const IconWrap = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '16rem',
  height: '9rem',
  overflow: 'hidden',
});

export const GridContainer = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '140rem',
});
