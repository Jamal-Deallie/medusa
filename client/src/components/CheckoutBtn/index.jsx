import { selectCartItems } from '../../features/cart/cartSlice.js';
import { useSelector } from 'react-redux';
import { useCheckoutItemsMutation } from '../../features/checkout/checkoutSlice.js';
import { Button } from '@mui/material';

export default function CheckoutBtn() {
  const [checkoutItems, { isLoading, isError, isSuccess, data }] =
    useCheckoutItemsMutation();

  const items = useSelector(selectCartItems);

  if (isSuccess) {
    window.location.href = data.url;
  } else if (isError) {
    console.error('An Error has occurred');
  }

  const line_items =
    items &&
    items.map(item => {
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            images: [item.image],
            description: item.description,
            metadata: {
              id: item._id,
            },
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      };
    });

  const handleCheckout = async () => {
    if (items) {
      try {
        await checkoutItems(line_items);
      } catch (err) {
        console.error('Failed to Checkout', err);
      }
    }
  };

  return (
    <Button variant='main' onClick={handleCheckout}>
      Checkout Button
    </Button>
  );
}
