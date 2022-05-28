import { useCallback } from 'react';
import { Grid, Typography, Divider } from '@mui/material';
import {
  Image,
  Icon,
  IconWrap,
  ContentContainer,
  HeaderWrap,
  IconContainer,
  DetailsSection,
  DetailsContainer,
  ImageWrap,
} from './styles';
import { ATCButton } from '../../components';
import { useParams } from 'react-router-dom';
import {
  selectProductById,
  useGetProductsByIdQuery,
} from '../../features/product/productSlice';
import { useSelector } from 'react-redux';

export default function ProductDetails() {
  const { id } = useParams();
  const loadedProducts = useSelector(state => selectProductById(state, id));

  const { isLoading, isSuccess, isError, error } = useGetProductsByIdQuery(id);

  let products;

  const renderProduct = useCallback(() => {
    if (isLoading) {
      products = <div>...is Loading</div>;
    } else if (isSuccess) {
      const { _id, image, description, name, price, category } = loadedProducts;
      return (
        <DetailsSection>
          <DetailsContainer>
            <Grid container component='main'>
              <Grid item md={5}>
                <ImageWrap>
                  <Image src={image} alt={name} />
                </ImageWrap>
              </Grid>
              <Grid item md={7}>
                <ContentContainer>
                  <div>
                    <HeaderWrap>
                      <Typography variant='h1'>{name}</Typography>
                      <Typography sx={{ fontSize: '4rem' }}>
                        ${price}
                      </Typography>
                    </HeaderWrap>
                    <Divider />
                  </div>
                  <Typography>{description}</Typography>
                  <ATCButton />
                  <Divider />
                  <IconContainer>
                    <IconWrap>
                      <Icon
                        src='/images/icons/badge.svg'
                        alt='30 Day Returns Guaranteed'
                      />
                      <Typography>
                        We guarantee that every plant
                        <br /> will arrive in good health
                      </Typography>
                    </IconWrap>
                    <IconWrap>
                      <Icon src='/images/icons/truck.svg' alt='free shipping' />
                      <Typography>Free Express shipping</Typography>
                    </IconWrap>
                  </IconContainer>
                </ContentContainer>
              </Grid>
            </Grid>
          </DetailsContainer>
        </DetailsSection>
      );
    } else if (isError) {
      products = <div>{error}</div>;
    }
  }, [isLoading, isSuccess, isError, error, products, loadedProducts]);

  return <> {renderProduct()}</>;
}
