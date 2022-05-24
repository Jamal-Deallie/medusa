import {
  ContentContainer,
  Image,
  HeadingContainer,
  Text,
  CardWrap,
} from './styles';
import {
  selectProductById,
  useGetProductsQuery,
} from '../../features/product/productSlice';
import { useSelector } from 'react-redux';
import { ATCButton } from '../../components';
import { useNavigate } from 'react-router';

export default function Card({ products }) {
  console.log(products);
  const navigate = useNavigate();

  const items = useSelector(state => selectProductById(state, products._id));

  return (
    <ContentContainer>
      <HeadingContainer>
        <Text>${items.price}</Text>
        <Text>{items.name}</Text>
      </HeadingContainer>
      <CardWrap>
        <Image
          src={items.image}
          alt='place-holder'
          onClick={() => navigate(`/shop/${products._id}`)}
        />

        <ATCButton productId={products._id} />
      </CardWrap>
    </ContentContainer>
  );
}
