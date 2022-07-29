import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../../features/product/productSlice';
import { CustomCard } from '../../components';
import { Box, Typography, CircularProgress } from '@mui/material';
import { ProductWrapper} from './styles'
export default function CategoryListContainer() {
  const params = useParams();
  const { category } = params;

  const { currentData, isLoading, isSuccess, isError } =
    useGetProductsByCategoryQuery(category);

  const renderedProducts = useCallback(() => {
    if (isLoading) {
      return (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      );
    } else if (isSuccess) {
      const { data } = currentData.data || {};
      return <CustomCard product={data} />;
    } else if (isError) {
      return (
        <Typography variant='header1' sx={{ color: 'secondary.light' }}>
          An Error has occurred
        </Typography>
      );
    }
  }, [isLoading, isSuccess, isError, currentData]);

  return <ProductWrapper>{renderedProducts()}</ProductWrapper>;
}
