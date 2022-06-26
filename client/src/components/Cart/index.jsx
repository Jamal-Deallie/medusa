import React, { useState } from 'react';
import {
  TextWrapper,
  ProductImage,
  Details,
  DetailsSection,
  SubheaderContainer,
  CartFooter,
  SubtotalWrap,
  CartSection,
  Header,
  CustomDivider,
  QuantitySection,
  Quantity,
  QuantityBtn,
  ItemHeader,
  Heading,
  Text,
} from './styles';
import {
  Drawer,
  Typography,
  Box,
  List,
  ListItem,
  ButtonGroup,
  Button,
  IconButton,
} from '@mui/material';
import { Add, Remove, Delete, Close } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartItems,
  selectCartSubtotal,
  selectCartQuantity,
  increaseQuantity,
  decrementQuantity,
  removeItem,
  // addItem,
} from '../../features/cart/cartSlice.js';

import { CheckoutBtn } from '..';

export default function Bag({ openCart, handleCart }) {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(open => !open);
  }

  const items = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartSubtotal);
  const quantity = useSelector(selectCartQuantity);
  console.log({ amount: quantity, subtotal });

  const dispatch = useDispatch();

  const handleAddToCart = product => {
    dispatch(increaseQuantity, product);
  };
  const handleDecreaseItem = product => {
    dispatch(decrementQuantity(product));
  };
  const handleIncreaseItem = product => {
    dispatch(increaseQuantity(product));
  };
  const handleRemoveFromCart = product => {
    dispatch(removeItem(product));
  };
  return (
    <Drawer anchor='right' open={openCart} onClose={handleCart}>
      <CartSection>
        <Box>
          <SubheaderContainer>
            <Heading>
              Cart<span>{quantity > 0 ? `: (${quantity})` : ''}</span>
            </Heading>
            <IconButton aria-label='close' size='large' onClick={handleCart}>
              <Close sx={{ fontSize: 30, color: 'secondary.main' }} />
            </IconButton>
          </SubheaderContainer>
          <CustomDivider />
        </Box>

        {items.length === 0 ? (
          <TextWrapper>
            <Text>Your cart is currently empty!</Text>
          </TextWrapper>
        ) : (
          <List
            sx={{
              overflow: 'auto',
              paddingTop: 0,
              height: '100%',
            }}>
            {items?.map(item => {
              return (
                <ListItem
                  key={item._id}
                  disablePadding
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    marginBottom: '1rem',
                    borderBottom: `1px solid`,
                  }}>
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
                </ListItem>
              );
            })}
          </List>
        )}

        <CartFooter>
          <SubtotalWrap>
            <Text>Subtotal</Text>
            <Text>${subtotal && subtotal}</Text>
          </SubtotalWrap>
          <CheckoutBtn />
        </CartFooter>
      </CartSection>
    </Drawer>
  );
}
