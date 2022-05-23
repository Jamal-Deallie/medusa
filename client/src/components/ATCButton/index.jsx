import { CardButton } from './styles';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';

export default function ATCButton({ items }) {
//   const { _id, price, image, name } = items;
  const dispatch = useDispatch();

//   const handleAddToCart = product => {
//     console.log({ product });
//     if (product) {
//       dispatch(
//         addItem({
//           ...product,
//         })
//       );
//     } else {
//       console.log('An error has occurred');
//     }
//   };

  return (
    <CardButton
    sx={{ fontFamily: 'open-sans' }}

    //   onClick={() =>
    //     handleAddToCart({
    //       _id: _id,
    //       price: price,
    //       name: name,
    //       image: image,
    //     })
    //   }
      
      
      >
      Add to Cart
    </CardButton>
  );
}
