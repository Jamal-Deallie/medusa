import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';

export const MissionSection = styled('section')(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '10% 0 4%',
  whiteSpace: 'normal',
  width: '100%',
  overflow: 'hidden',
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: 'tenez, sans-serif',
  fontSize: '4.8rem',
  color: theme.palette.secondary.light,
  lineHeight: 1.2,
  width: '100%',
  marginBottom: '3.5rem',
  whiteSpace: 'normal',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

export const MissionInner = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  width: '100%',
  textAlign: 'center',
}));

export const Quote = styled(Typography)(({ theme }) => ({
  fontFamily: 'tenez, sans-serif',
  fontSize: '3.5vw',
  color: theme.palette.secondary.light,
  lineHeight: 1.2,
  fontStyle: 'normal',
  width: '100%',
  marginBottom: '3.5rem',
  whiteSpace: 'normal',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

export const Cite = styled('cite')(({ theme }) => ({
  color: theme.palette.secondary.light,
  lineHeight: 1.2,
  width: '100%',
  fontStyle: 'italic',
  fontSize: '4.2rem',
  fontWeight: 400,
  fontFamily: 'tenez, sans-serif',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));
