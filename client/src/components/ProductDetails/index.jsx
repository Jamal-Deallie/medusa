import { useCallback } from 'react';
import { Grid } from '@mui/material';
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
  Subheader,
  Text,
  Caption,
  CustomDivider,
} from './styles';
import { useParams } from 'react-router-dom';
import {
  selectProductById,
  useGetProductsByIdQuery,
} from '../../features/product/productSlice';
import { useSelector} from 'react-redux';
import { ATCButton } from '../../components';

export default function ProductDetails() {
  const { id } = useParams();
  const loadedProducts = useSelector(state => selectProductById(state, id));

  const { isLoading, isSuccess, isError, error } = useGetProductsByIdQuery(id);

  const renderProduct = useCallback(() => {
    if (isLoading) {
      <div>...is Loading</div>;
    } else if (isSuccess) {
      const { _id, image, description, name, price } = loadedProducts || {};
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
                      <Subheader>{name}</Subheader>
                      <Subheader>${price}</Subheader>
                    </HeaderWrap>
                    <CustomDivider />
                  </div>
                  <Text>{description}</Text>

                  <ATCButton productId={_id} main={true} />
                  <CustomDivider />
                  <IconContainer container spacing={2}>
                    <IconWrap item lg={4} md={4}>
                      <Icon
                        src='/images/icons/shipping.svg'
                        alt='30 Day Returns Guaranteed'
                      />
                      <Caption>Carbon Neutral Shippings</Caption>
                    </IconWrap>
                    <IconWrap item lg={4} md={4}>
                      <Icon
                        src='/images/icons/guarantee.svg'
                        alt='free shipping'
                      />
                      <Caption>30-Day Guarantee</Caption>
                    </IconWrap>
                    <IconWrap item lg={4} md={4}>
                      <Icon src='/images/icons/shop.svg' alt='free shipping' />
                      <Caption>Available Online & In Store</Caption>
                    </IconWrap>
                  </IconContainer>
                </ContentContainer>
              </Grid>
            </Grid>
          </DetailsContainer>
        </DetailsSection>
      );
    } else if (isError) {
      <div>{error}</div>;
    }
  }, [isLoading, isSuccess, isError, error, loadedProducts]);

  return <> {renderProduct()}</>;
}
