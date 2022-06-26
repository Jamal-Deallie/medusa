import { useCallback, useState, useEffect } from 'react';
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
import { Box, Typography, CircularProgress } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function ProductsListContainer() {
  const { isLoading, isSuccess, isError } = useGetProductsQuery();
  const loadedProducts = useSelector(selectAllProducts);
  const navigate = useNavigate();

  useEffect(() => {
    let targets = gsap.utils.toArray('#product-cards');
    gsap.set(targets, { opacity: 0 });
    ScrollTrigger.batch(targets, {
      trigger: '#card-container',
      markers: true,
      start: 'top center',
      end: 'bottom',
      //reset after the trigger
      toggleActions: 'play none none reset',
      invalidateOnRefresh: true,
      onEnter: batch =>
        gsap.fromTo(
          batch,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, stagger: 0.1 }
        ),
    });
    return () => {
      ScrollTrigger.refresh();
    };
  }, []);

  const renderedProducts = useCallback(() => {
    if (isLoading) {
      return (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      );
    } else if (isSuccess) {
      return loadedProducts.map(product => {
        return (
          <ContentContainer key={product._id} id='product-cards'>
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
      return <Typography>An Error has occurred</Typography>;
    }
  }, [isLoading, isSuccess, isError, loadedProducts, navigate]);

  return (
    <ProductWrapper id='card-container'>{renderedProducts()}</ProductWrapper>
  );
}
