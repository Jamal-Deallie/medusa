import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const ContentSection = styled('section', {
  shouldForwardProp: prop => prop !== '$pb',
})(({ theme, $pb }) => ({
  background: theme.palette.primary.main,
  padding: '5% 0',
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  marginTop: '15%',
  width: '50%',
  padding: 'calc(8px + 1vw)',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '50rem',
    marginTop: 0,
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
  fontFamily: 'tenez, sans-serif',
  color: theme.palette.secondary.light,
  width: '100%',
  fontSize: '2.4rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.8rem',
  },
}));

export const Image = styled('img', {
  shouldForwardProp: prop => prop !== '$br',
})(({ $br }) => ({
  borderRadius: $br ? $br : '55rem 55rem 0 0',
  width: '100%',
  maxWidth: '53.5rem',
  height: 'auto',
  aspectRatio: '59/77',
  objectFit: 'cover',
}));

export const ImageContainer = styled(Box, {
  shouldForwardProp: prop => prop !== '$br' && 'theme',
})(({ $order, theme }) => ({
  padding: 'calc(4px + 1vw)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  order: $order ? 1 : 'none',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    order: 'none',
  },
}));

export const ContentInner = styled(Box, {
  shouldForwardProp: prop => prop !== '$fd' && '$pb',
})(({ theme, $fd, $pb }) => ({
  maxWidth: '125rem',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
  gap: '2rem',
  flexDirection: $fd ? 'row-reverse' : 'row',
  paddingBottom: $pb ? '8.5rem' : 'none',
  // paddingTop: $pb ? '8.5rem' : 'none',
  paddingTop: '8.5rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
  },
}));
