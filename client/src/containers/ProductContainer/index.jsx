import { useMemo } from 'react';
import {
  ProductsListContainer,
  SearchListContainer,
  CategoryListContainer,
} from '..';
import { useLocation } from 'react-router-dom';
import {
  SearchSection,
  ProductsWrap,
  Subheader,
  CustomDivider,
} from './styles';
import { Container } from '@mui/material';

export default function ProductContainer() {
  const location = useLocation();

  const subheader = useMemo(
    () => location.pathname.split('/').at(-1).replace('-', ' '),
    [location]
  );

  console.log(subheader);
  const Products = () => {
    switch (subheader) {
      case 'search':
        return <SearchListContainer />;

      case 'shop':
        return <ProductsListContainer />;

      case 'easy-care' || 'pet-friendly' || 'large-plants' || 'small-plant':
        <CategoryListContainer />;
        break;

      default:
        <div>Default</div>;
    }
  };

  return (
    <SearchSection>
      <ProductsWrap>
        <Subheader sx={{ textTransform: 'capitalize' }}>{subheader}</Subheader>
        <CustomDivider />
        <Container>{Products()}</Container>
      </ProductsWrap>
    </SearchSection>
  );
}
