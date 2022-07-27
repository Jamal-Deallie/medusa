import { styled } from '@mui/system';
import { Container, Button, Typography } from '@mui/material';

export const ProductWrapper = styled(Container)({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridGap: '5rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
});
