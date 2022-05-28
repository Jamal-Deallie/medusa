import {
  ProductWrapper,
  ContentContainer,
  Image,
  HeadingContainer,
  Text,
  CardWrap,
} from './styles';
import { useParams, useNavigate } from 'react-router-dom';
import {
  selectAllProducts,
  useGetProductsQuery,
} from '../../features/product/productSlice';
import { useSelector } from 'react-redux';
import { ATCButton } from '../../components';

export default function ProductsListContainer() {
  const { isLoading, isSuccess, isError, error } = useGetProductsQuery();
  const loadedProducts = useSelector(selectAllProducts);
  const navigate = useNavigate();

  let products;


  if (isLoading) {
    products = <div>...is Loading</div>;
  } else if (isSuccess) {
    products = loadedProducts.map(product => {
      return (
        <ContentContainer key={product._id}>
          <HeadingContainer>
            <Text>${product.price}</Text>
            <Text>{product.name}</Text>
          </HeadingContainer>
          <CardWrap>
            <Image
              src={product.image}
              alt='place-holder'
              onClick={() => navigate(`/shop/${product._id}`)}
            />

            <ATCButton productId={product._id} />
          </CardWrap>
        </ContentContainer>
      );
    });
  } else if (isError) {
    products = <div>{error}</div>;
  }

  return <ProductWrapper>{products}</ProductWrapper>;
}
