import { useCallback } from 'react';
import {
  selectAllProducts,
  useGetProductsQuery,
} from '../../features/product/productSlice';
import { useSelector } from 'react-redux';
import { CustomCard } from '../../components';
import { Box, Typography, CircularProgress } from '@mui/material';

export default function ProductsListContainer() {
  const { isLoading, isSuccess, isError } = useGetProductsQuery();
  const loadedProducts = useSelector(selectAllProducts);

  const renderedProducts = useCallback(() => {
    if (isLoading) {
      return (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      );
    } else if (isSuccess) {
      return <CustomCard product={loadedProducts} />;
    } else if (isError) {
      return (
        <Typography variant='header1' sx={{ color: 'secondary.light' }}>
          An Error has occurred
        </Typography>
      );
    }
  }, [isLoading, isSuccess, isError, loadedProducts]);

  return (
    <Box>
      {renderedProducts()}
    </Box>
  );
}
