import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const ContentOuter = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  paddingTop: '12.5rem',
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  width: '50%',
  padding: 'calc(8px + 1vw)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '50rem',
  },
}));

export const CustomLink = styled(Link)(({ theme }) => ({
  marginTop: '5.5rem',
  fontFamily: 'muli, sans-serif',
  alignItems: 'center',
  transition: 'color .3s ease',
  display: 'inline-flex',
  boxSizing: 'border-box',
  padding: '0 1.7rem',
  height: '4.8rem',
  backgroundColor: 'none',
  borderBottom: `1px solid ${theme.palette.secondary.light}`,
  fontSize: '1.6rem',
  fontWeight: '600',
  color: theme.palette.secondary.light,
  '&:hover': {
    color: theme.palette.secondary.main,
  },
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
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontFamily: ' tenez, sans-serif',
  display: 'inline-block',
  color: theme.palette.secondary.light,
  width: '100%',
  fontSize: '1.953rem',
}));

export const Image = styled('img', {
  shouldForwardProp: prop => prop !== '$br',
})(({ $br }) => ({
  borderRadius: $br ? $br : 'none',
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

export const ContentWrap = styled(Box, {
  shouldForwardProp: prop => prop !== '$fd',
})(({ theme, $fd }) => ({
  maxWidth: '125rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  gap: '2rem',
  flexDirection: $fd ? '$fd' : 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
  },
}));

export const ContentInner = styled(Box, {
  shouldForwardProp: prop => prop !== '$fd',
})(({ theme, $fd }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  flexDirection: 'column',
}));
