import { useMemo } from 'react';
import { ProductsListContainer } from '../../containers';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ProductsSection, ProductsWrap, Subheader } from './styles';
import { Divider, Container } from '@mui/material';

export default function ProductsContainer() {

  return (
    <ProductsSection>
      <ProductsWrap>
        <Subheader sx={{ textTransform: 'capitalize' }}>Shop All</Subheader>
        <Divider />
        <Container>
          <ProductsListContainer />
        </Container>
      </ProductsWrap>
    </ProductsSection>
  );
}
