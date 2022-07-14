import { CardButton, Text } from './styles';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';
import { selectProductById } from '../../features/product/productSlice';
import { useSelector } from 'react-redux';
export default function ATCButton({ productId, main }) {
  const dispatch = useDispatch();
  const items = useSelector(state => selectProductById(state, productId));

  const handleAddToCart = product => {
    if (product) {
      dispatch(
        addItem({
          ...product,
        })
      );
    } else {
      alert('An error has occurred');
    }
  };

  return (
    <CardButton
      $main={main}
      onClick={() =>
        handleAddToCart({
          _id: items._id,
          price: items.price,
          name: items.name,
          image: items.image,
        })
      }>
      <Text>Add to Cart</Text>
    </CardButton>
  );
}
