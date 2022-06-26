import { styled } from '@mui/system';
import { Container, Grid, Typography, Button } from '@mui/material';

export const LandingSection = styled('section')(({ theme }) => ({
  background: theme.palette.primary.main,
  height: '100vh',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    padding: '1rem',
  },
}));
