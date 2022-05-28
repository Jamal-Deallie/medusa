import { useMemo } from 'react';
import {
  ProductWrapper,
  ContentContainer,
  Image,
  HeadingContainer,
  Text,
  CardWrap,
} from './styles';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../../features/product/productSlice';
import { ATCButton } from '../../components';

export default function CategoryListContainer() {
  const params = useParams();
  const navigate = useNavigate();
  const { category } = params;
  const { currentData, isLoading, isSuccess, isError, error } =
    useGetProductsByCategoryQuery(category);

  let products;

  if (isLoading) {
    products = <div>...is Loading</div>;
  } else if (isSuccess) {
    const { data } = currentData.data;
    products = data.map(product => {
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
