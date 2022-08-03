import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';

export const MissionSection = styled('section')(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '8.5rem 0',
  whiteSpace: 'normal',
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
  whiteSpace: 'normal',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

export const MissionInner = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  maxWidth: '70rem',
  overflow: 'hidden',
  textAlign: 'center',
}));
