import { useCallback, useMemo, useEffect, useRef } from 'react';
import {
  ProductWrapper,
  ContentContainer,
  Image,
  HeadingContainer,
  Text,
  CardWrap,
} from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetProductsBySearchQuery } from '../../features/product/productSlice';
import { ATCButton } from '../../components';
import { batchAnimation } from '../../animations/batchAnimation';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import { Box, Typography, CircularProgress } from '@mui/material';
import { gsap } from 'gsap';
import useArrayRef from '../../hooks/useArrayRef';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function SearchListContainer() {
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = location;
  const batchContainer = useRef();
  const [cards, setCards] = useArrayRef();
  const term = useMemo(() => search.split('=').at(-1), [search]);
  const { isLoading, isSuccess, isError, data, results } =
    useGetProductsBySearchQuery(term);
  console.log(useGetProductsBySearchQuery(term));
  // useEnhancedEffect(() => {
  //   batchAnimation(cards.current, batchContainer.current);
  // });

  const renderedProducts = useCallback(() => {
    if (isLoading) {
      return (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      );
    } else if (isSuccess) {
      if (data.results === 0) {
        return (
          <Box>
            <Text>No Matches Found</Text>
          </Box>
        );
      }
      return data.data.doc.map(product => {
        return (
          <ContentContainer ref={setCards} key={product._id}>
            <HeadingContainer>
              <Text>${product.price}</Text>
              <Text>{product.name}</Text>
            </HeadingContainer>
            <CardWrap>
              <Image
                src={product.image}
                alt='place-holder'
                onClick={() => navigate(`shop/${product._id}`)}
              />
              <ATCButton productId={product._id} />
            </CardWrap>
          </ContentContainer>
        );
      });
    } else if (isError) {
      return <Typography>An Error has occurred</Typography>;
    }
  }, [isLoading, isSuccess, isError, data, navigate, setCards]);

  return (
    <ProductWrapper ref={batchContainer}>{renderedProducts()}</ProductWrapper>
  );
}
