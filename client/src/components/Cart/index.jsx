import { useState, useCallback } from 'react';
import { Drawer, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { CartItems } from '../../components/';
import { selectCartQuantity } from '../../features/cart/cartSlice.js';
import { CustomDrawer } from './styles';
export default function Bag() {
  const [openCart, setOpenCart] = useState(false);

  const cart = useCallback(
    () => setOpenCart(openCart => !openCart),

    [setOpenCart]
  );
  const quantity = useSelector(selectCartQuantity);

  return (
    <>
      <Typography variant='navOption' onClick={cart}>
        Cart<span>{quantity > 0 ? ` (${quantity})` : ''}</span>
      </Typography>
      <CustomDrawer  anchor='right' open={openCart} onClose={cart}>
        <CartItems cart={cart} quantity={quantity} />
      </CustomDrawer>
    </>
  );
}
