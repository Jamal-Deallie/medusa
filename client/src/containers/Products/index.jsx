import { useMemo } from 'react';
import { ProductsListContainer } from '../../containers';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ProductsSection, ProductsWrap, Subheader } from './styles';
import { Divider, Container } from '@mui/material';

export default function ProductsContainer() {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);
  console.log(navigate);
  console.log(useParams());

  const subheader = useMemo(
    () => location.pathname.split('/').at(-1),
    [location]
  );

  let products;

  console.log(subheader);
  return (
    <ProductsSection>
      <ProductsWrap>
        <Subheader sx={{ textTransform: 'capitalize' }}>{subheader}</Subheader>
        <Divider />
        <Container>
          <ProductsListContainer />
        </Container>
      </ProductsWrap>
    </ProductsSection>
  );
}
