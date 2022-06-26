import { ProductsListContainer } from '../../containers';
import {
  ProductsSection,
  ProductsWrap,
  Subheader,
  Container,
  CustomDivider,
} from './styles';


export default function ProductsContainer() {
  return (
    <ProductsSection>
      <ProductsWrap>
        <Subheader id="products-header">Shop All</Subheader>
        <CustomDivider />
        <Container>
          <ProductsListContainer />
        </Container>
      </ProductsWrap>
    </ProductsSection>
  );
}
