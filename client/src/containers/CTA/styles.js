import { styled } from '@mui/system';
import { Container, Button, Typography, Box, Grid } from '@mui/material';

export const CategoryMenuSection = styled('section')(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '12.5rem 0 12.25rem 0',
}));

export const MenuWrap = styled(Grid)({
//   display: 'grid',
//   gridTemplateColumns: 'repeat(4,1fr)',
//   gridTemplateRows: 'auto',
//   gap: '4rem',
  padding: 'calc(8px + 1.5625vw)',
});
