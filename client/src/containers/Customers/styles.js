import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';

export const CustomerSection = styled('section', {
  shouldForwardProp: prop => prop !== '$pb',
})(({ theme, $pb }) => ({
  background: theme.palette.primary.main,
  padding: '5% 0',
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  marginTop: '2.5%',
  width: '40vw',
  padding: 'calc(8px + 1vw)',

  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '50rem',
    marginTop: 0,
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

export const Video = styled('video')({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  aspectRatio: '766/400',
});

export const VideoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '60vw',
  padding: 'calc(.8rem + 1.5vw)',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const ContentInner = styled(Box, {
  shouldForwardProp: prop => prop !== '$fd' && '$pb',
})(({ theme, $fd, $pb }) => ({
  maxWidth: '150rem',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
  gap: '2rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
  },
}));
