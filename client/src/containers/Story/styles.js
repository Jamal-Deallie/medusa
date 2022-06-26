import { styled } from '@mui/system';
import { Container, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const PlantImage = styled('img')({
  height: '25rem',
  width: '25rem',
  transform: 'rotate(0.10turn)',
});

export const Subheader = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontSize: '32px',
  fontFamily: ' tenez, sans-serif',
  lineHeight: 'calc(1.5 * 32px)',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

export const StorySection = styled('section')(({ theme }) => ({
  background: theme.palette.primary.main,
  paddingTop: '12.5rem',
}));

export const ContentWrap = styled('div')({
  backgroundColor: 'orange',
  maxWidth: '75rem',
  padding: 'calc(8px + 1.5625vw)',
});

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

export const Svg = styled('svg')({
  width: '80rem',
  height: '25rem',
});

export const Path = styled('path')({
  marginTop: '2rem',
});

// export const Header = styled(Typography)(({ theme }) => ({
//   fontFamily: ' tenez, sans-serif',
//   fontSize: '48px',
//   display: 'inline-block',
//   lineHeight: 'calc(1.5 * 48px)',
//   width: '100%',
//   overflow: 'hidden',
//   color: theme.palette.secondary.light,
//   [theme.breakpoints.down('md')]: {
//     textAlign: 'center',
//   },
// }));

export const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: 'tenez, sans-serif',
  fontSize: '4.8rem',
  fontStyle: 'italic',
  color: theme.palette.secondary.light,
  lineHeight: 'calc(1.5 * 48px)',
  width: '100%',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontFamily: ' tenez, sans-serif',
  display: 'inline-block',
  color: theme.palette.secondary.light,
  width: '100%',
  fontSize: 'clamp(1.56rem, calc(1.22rem + 1.71vw), 2.44rem)',
}));

export const HeadingWrap = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  textAlign: 'center',
  backgroundColor: 'white',
});

export const HeadingContainer = styled('div')({});

// export const Image = styled('img', {
//   shouldForwardProp: prop=> prop !== '$br',
// })({ theme, $color }) => ({
//   borderRadius: '55rem 55rem 0 0',
//   width: '100%',
//   maxWidth: '53.5rem',
//   height: 'auto',
// }));

export const Image = styled('img', {
  shouldForwardProp: prop => prop !== '$br',
})(({ $br }) => ({
  borderRadius: $br ? $br : 'none',
  width: '100%',
  maxWidth: '53.5rem',
  height: 'auto',
}));

export const ImageWrap = styled(Box)({});
export const ImageContainer = styled(Box)({
  backgroundColor: 'pink',
  padding: 'calc(15px + 1.5625vw)',
});

export const StoryWrap = styled(Box, {
  shouldForwardProp: prop => prop !== '$fd',
})(({ theme, $fd }) => ({
  maxWidth: '160rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  background: 'red',
  gap: '5.5rem',
  flexDirection: $fd ? '$fd' : 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
  },
}));

// max-width: 100%;
// height: auto;
