import { styled } from '@mui/system';
import { Container } from '@mui/material';

export const ProductWrapper = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
}));
