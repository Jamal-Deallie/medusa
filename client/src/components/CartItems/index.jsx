import { useCallback } from 'react';
import {
  CartFooter,
  CartSection,
  CustomDivider,
  Details,
  DetailsSection,
  Heading,
  ItemHeader,
  ProductImage,
  SubheaderContainer,
  SubtotalWrap,
  QuantitySection,
  Quantity,
  QuantityBtn,
  TextWrapper,
  CustomListItem,
  CustomList,
} from './styles';
import { Typography, Box, IconButton } from '@mui/material';
import { Add, Remove, Delete, Close } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartItems,
  selectCartSubtotal,
  increaseQuantity,
  decrementQuantity,
  removeItem,
} from '../../features/cart/cartSlice.js';
import { CheckoutBtn } from '../../components';

export default function CartItems({ cart, quantity }) {
  const items = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartSubtotal);
  const dispatch = useDispatch();

  const handleDecreaseItem = useCallback(
    product => {
      dispatch(decrementQuantity(product));
    },
    [dispatch]
  );

  const handleIncreaseItem = useCallback(
    product => {
      dispatch(increaseQuantity(product));
    },
    [dispatch]
  );

  const handleRemoveFromCart = useCallback(
    product => {
      dispatch(removeItem(product));
    },
    [dispatch]
  );

  return (
    <CartSection>
      <Box>
        <SubheaderContainer>
          <Heading>
            Cart<span>{quantity > 0 ? `: (${quantity})` : ''}</span>
          </Heading>
          <IconButton aria-label='close' size='large' onClick={cart}>
            <Close variant='h1' sx={{ color: 'secondary.main' }} />
          </IconButton>
        </SubheaderContainer>
        <CustomDivider />
      </Box>

      {items.length === 0 ? (
        <TextWrapper>
          <Typography variant='body2'>Your cart is currently empty!</Typography>
        </TextWrapper>
      ) : (
        <CustomList>
          {items?.map(item => {
            return (
              <CustomListItem key={item._id} disablePadding sx={{}}>
                <ProductImage src={item.image} alt={item.name} />
                <DetailsSection>
                  <ItemHeader>
                    <Typography>{item.name}</Typography>
                    <IconButton
                      aria-label='delete'
                      size='medium'
                      onClick={() => handleRemoveFromCart(item)}>
                      <Delete sx={{ fontSize: 25, color: 'primary.main' }} />
                    </IconButton>
                  </ItemHeader>
                  <CustomDivider />
                  <Details>
                    <QuantitySection>
                      <QuantityBtn onClick={() => handleIncreaseItem(item)}>
                        <Add sx={{ color: 'secondary.main' }} />
                      </QuantityBtn>
                      <Quantity>{item.quantity}</Quantity>
                      <QuantityBtn onClick={() => handleDecreaseItem(item)}>
                        <Remove sx={{ color: 'secondary.main' }} />
                      </QuantityBtn>
                    </QuantitySection>

                    <Typography>${item.price}</Typography>
                  </Details>
                </DetailsSection>
              </CustomListItem>
            );
          })}
        </CustomList>
      )}

      <CartFooter>
        <SubtotalWrap>
          <Typography>Subtotal</Typography>
          <Typography>${subtotal && subtotal}</Typography>
        </SubtotalWrap>
        <CheckoutBtn />
      </CartFooter>
    </CartSection>
  );
}
