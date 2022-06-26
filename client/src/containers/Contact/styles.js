import { styled } from '@mui/system';
import { Button, Box, TextField, Typography, Grid } from '@mui/material';

export const ContactSection = styled(Grid)(({ theme }) => ({
  background: theme.palette.secondary.light,
  height: 'calc(100vh - 10rem)',
}));

export const GridItem = styled(Grid)({
  width: '100%',
});
