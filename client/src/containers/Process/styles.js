import { styled } from '@mui/system';
import { Container, Grid, Typography } from '@mui/material';

export const GridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.5rem',
}));

export const Subheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '10.5rem',
  fontWeight: 400,
  fontFamily: 'Mightype',
  textAlign: 'center',
}));
export const ProcnSection = styled('section')(({ theme }) => ({
  background: theme.palette.secondary.dark,
  paddingBottom: '12.5rem',
}));

export const HeadingContainer = styled('div')({
  padding: '10rem 5rem 0 5rem',
});

export const Icon = styled('img')({
  height: '10rem',
});

export const ProcessSection = styled('section')(({ theme }) => ({
  background: theme.palette.secondary.light,
  paddingBottom: '12.5rem',
}));

export const IconWrap = styled('div')(({ theme }) => ({


}));
