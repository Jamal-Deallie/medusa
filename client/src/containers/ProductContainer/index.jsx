import { useMemo } from 'react';
import {
  ProductsListContainer,
  SearchListContainer,
  CategoryListContainer,
  NotFoundContainer,
} from '../../containers';
import { useLocation } from 'react-router-dom';
import {
  ProductSection,
  ProductsWrap,
  Subheader,
  CustomDivider,
  ItemContainer,
  HeaderContainer,
} from './styles';
import { Container } from '@mui/material';

export default function ProductContainer() {
  const location = useLocation();

  const subheader = useMemo(
    () => location.pathname.split('/').at(-1).replace('-', ' '),
    [location]
  );

  const Products = () => {
    switch (subheader) {
      case 'search':
        return <SearchListContainer />;

      case 'shop':
        return <ProductsListContainer />;

      case 'easy care':
        return <CategoryListContainer />;

      case 'pet friendly':
        return <CategoryListContainer />;

      case 'large plants':
        return <CategoryListContainer />;

      default:
        <NotFoundContainer />;
    }
  };

  return (
    <ProductSection>
      <HeaderContainer>
        <Subheader>{subheader}</Subheader>
        <CustomDivider />
      </HeaderContainer>

      <ItemContainer sx={{ margin: '0 auto' }}>{Products()}</ItemContainer>
    </ProductSection>
  );
}
