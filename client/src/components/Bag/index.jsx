import React, { useState } from 'react';
import {
  CartWrapper,
  CartIcon,
  ProductImage,
  NameWrap,
  DetailsWrap,
  SubheaderContainer,
  CartFooter,
  SubtotalWrap,
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
  // decrementQuantity,
  // removeFromCart,
  // addItem,
} from '../../features/cart/cartSlice.js';

// import { CartItems } from '../../components';

export default function Bag() {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(open => !open);
  }

  const items = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartSubtotal);
  const quantity = useSelector(selectCartQuantity);
  console.log({ amount: quantity, subtotal });

  console.log(items);
  const dispatch = useDispatch();

  return (
    <>
      <div onClick={handleClick}>
        <Typography
          color='primary.main'
          sx={{
            fontSize: '1.6rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            textTransform: 'uppercase',
            fontFamily: 'open Sans, sans-serif',
          }}>
          Bag ({quantity})
        </Typography>
      </div>
      <Drawer anchor='right' open={open} onClose={handleClick}>
        <Box
          sx={{
            width: '60rem',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <SubheaderContainer>
            <Typography variant='h1' color='secondary.main'>
              Cart: <span>{quantity && quantity}</span>
            </Typography>
            <IconButton aria-label='close' size='large' onClick={handleClick}>
              <Close sx={{ fontSize: 30, color: 'secondary.main' }} />
            </IconButton>
          </SubheaderContainer>
          {items.length === 0 ? (
            <h1> This Cart is Empty</h1>
          ) : (
            <List
              sx={{
                overflow: 'auto',
                maxHeight: 'calc(100vh - 30rem)',
                paddingTop: 0,
                height: '100%',
              }}>
              {items &&
                items.map(item => {
                  return (
                    <ListItem
                      disablePadding
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        marginBottom: '1rem',
                        borderBottom: `1px solid`,
                      }}>
                      <ProductImage src={item.image} alt={item.name} />
                      <DetailsWrap>
                        <NameWrap>
                          <Typography>{item.name}</Typography>
                          <IconButton aria-label='delete' size='large'>
                            <Delete
                              sx={{ fontSize: 30, color: 'primary.main' }}
                            />
                          </IconButton>
                        </NameWrap>

                        <ButtonGroup disableElevation variant='contained'>
                          <Button>
                            <Add />
                          </Button>
                          <Button
                        
                            sx={{
                              background: 'none',
                              color: 'primary.main',
                              fontSize: 16,
                              fontFamily: 'open-sans'
                            }}>
                            {item.quantity}
                          </Button>
                          <Button>
                            <Remove />
                          </Button>
                        </ButtonGroup>

                        <Typography>$ Price</Typography>
                      </DetailsWrap>
                    </ListItem>
                  );
                })}
            </List>
          )}

          <CartFooter>
            <SubtotalWrap>
              <Typography sx={{ color: 'secondary.main' }}>Subtotal</Typography>
              <Typography sx={{ color: 'secondary.main' }}>
                ${subtotal && subtotal}
              </Typography>
            </SubtotalWrap>

            <button>Proceed To Checkout</button>
          </CartFooter>
        </Box>
      </Drawer>
    </>
  );
}
