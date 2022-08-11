import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';

export const ContentSection = styled('section')(({ theme }) => ({
  background: theme.palette.secondary.light,
  paddingTop: '8.5rem',
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  marginTop: '5%',
  width: '50%',
  padding: 'calc(8px + 1vw)',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '50rem',
    marginTop: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: 'tenez, sans-serif',
  fontSize: '4.8rem',
  fontStyle: 'italic',
  color: theme.palette.primary.main,
  lineHeight: 1.2,
  width: '100%',
  overflow: 'hidden',
  marginBottom: '3.5rem',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontFamily: 'tenez, sans-serif',
  color: theme.palette.primary.main,
  width: '100%',
  fontSize: '2.4rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.8rem',
  },
}));

export const Image = styled('img', {
  shouldForwardProp: prop => prop !== '$br',
})(({ $br }) => ({
  width: '100%',
  maxWidth: '53.5rem',
  height: 'auto',
  aspectRatio: '3/4',
  objectFit: 'cover',
}));

export const ImageContainer = styled(Box, {
  shouldForwardProp: prop => prop !== '$br' && 'theme',
})(({ $order, theme }) => ({
  padding: 'calc(4px + 1vw)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50%',
  order: $order ? 1 : 'none',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    order: 'none',
  },
}));

export const ContentInner = styled(Box, {
  shouldForwardProp: prop => prop !== '$fd',
})(({ theme, $fd }) => ({
  maxWidth: '125rem',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
  gap: '2rem',
  flexDirection: $fd ? 'row-reverse' : 'row',
  paddingTop: '5%',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
  },
}));
