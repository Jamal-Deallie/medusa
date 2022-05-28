import { CardButton } from './styles';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';
import {
  selectProductById,
  useGetProductsQuery,
} from '../../features/product/productSlice';
import { useSelector } from 'react-redux';
export default function ATCButton({ productId }) {
  //   const { _id, price, image, name } = items;
  const dispatch = useDispatch();
  const items = useSelector(state => selectProductById(state, productId));



  const handleAddToCart = product => {
    console.log({ product });
    if (product) {
      dispatch(
        addItem({
          ...product,
        })
      );
    } else {
      console.log('An error has occurred');
    }
  };

  return (
    <>
      <CardButton
        sx={{ fontFamily: 'open-sans' }}
        onClick={() =>
          handleAddToCart({
            _id: items._id,
            price: items.price,
            name: items.name,
            image: items.image,
          })
        }>
        Add to Cart
      </CardButton>
    </>
  );
}
