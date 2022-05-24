import { Card } from '../../components';
import { ProductWrapper } from './styles';
import { useParams } from 'react-router-dom';
import {
  selectAllProducts,
  useGetProductsQuery,
} from '../../features/product/productSlice';
import { useSelector } from 'react-redux';
export default function ProductsListContainer() {
  const { isLoading, isSuccess, isError, error } = useGetProductsQuery();

  const loadedProducts = useSelector(selectAllProducts);
  const params = useParams();
  let products;

  if (isLoading) {
    products = <div>...is Loading</div>;
  } else if (isSuccess) {
    products = loadedProducts.map(products => (
      <Card key={products._id} products={products} />
    ));
  } else if (isError) {
    products = <div>{error}</div>;
  }
  console.log(params);

  return <ProductWrapper>{products}</ProductWrapper>;
}
