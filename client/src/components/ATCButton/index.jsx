import { CardButton, Text } from './styles';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';
import {
  selectProductById,
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
    </>
  );
}
