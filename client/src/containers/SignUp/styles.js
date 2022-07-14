import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const SignUpSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: 'auto',
  background: theme.palette.secondary.light,
  padding: '7.5rem 0',
}));
