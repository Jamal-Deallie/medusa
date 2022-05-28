import { useMemo } from 'react';
import { CategoryListContainer } from '../../containers';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { CategorySection, ProductsWrap, Subheader } from './styles';
import { Divider, Container } from '@mui/material';

export default function CategoriesContainer() {
  const location = useLocation();



  const subheader = useMemo(
    () => location.pathname.split('/').at(-1).replace('-', ' '),
    [location]
  );



  console.log({ subheader });
  return (
    <CategorySection>
      <ProductsWrap>
        <Subheader sx={{ textTransform: 'capitalize' }}>{subheader}</Subheader>
        <Divider />
        <Container>
          <CategoryListContainer />
        </Container>
      </ProductsWrap>
    </CategorySection>
  );
}
