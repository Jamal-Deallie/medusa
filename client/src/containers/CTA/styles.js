import { styled } from '@mui/system';
import { Grid } from '@mui/material';

export const CategoryMenuSection = styled('section')(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '5.5rem 0 12.25rem 0',
}));

export const MenuWrap = styled(Grid)({
  padding: 'calc(8px + 1.5625vw)',
});
