import { ProductsListContainer } from '../../containers';
import { Outlet } from 'react-router-dom';
import { ProductsSection, ProductsWrap, Subheader } from './styles';
import { Divider, Container } from '@mui/material';

export default function ProductsContainer() {
  return (
    <ProductsSection>
      <ProductsWrap>
        <Subheader>Products Container</Subheader>
        <Divider />
        <Container>
          <Outlet />
        </Container>
      </ProductsWrap>
    </ProductsSection>
  );
}
