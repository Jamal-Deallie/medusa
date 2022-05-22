import { styled } from '@mui/system';
import { Container } from '@mui/material';

export const ProductWrapper = styled(Container)`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
