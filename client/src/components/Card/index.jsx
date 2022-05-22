import {
  ContentContainer,
  Image,
  HeadingContainer,
  Text,
  CardButton,
  CardWrap,
} from './styles';
import { useNavigate } from 'react-router';

export default function Card() {
  const navigate = useNavigate();
  return (
    <ContentContainer onClick={() => navigate(`/`)}>
      <HeadingContainer>
        <Text>$30.50</Text>
        <Text>Monstera</Text>
      </HeadingContainer>
      <CardWrap>
        <Image src='/images/plant_placeholder.png' alt='place-holder' />

        <CardButton sx={{ fontFamily: 'open-sans' }}>Add to Cart</CardButton>
      </CardWrap>
    </ContentContainer>
  );
}
