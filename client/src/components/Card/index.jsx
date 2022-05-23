import {
  ContentContainer,
  Image,
  HeadingContainer,
  Text,
  CardWrap,
} from './styles';
import { ATCButton } from '../../components';
import { useNavigate } from 'react-router';

export default function Card() {
  const navigate = useNavigate();

  let items
  return (
    <ContentContainer onClick={() => navigate(`/`)}>
      <HeadingContainer>
        <Text>$30.50</Text>
        <Text>Monstera</Text>
      </HeadingContainer>
      <CardWrap>
        <Image src='/images/plant_placeholder.png' alt='place-holder' />

        <ATCButton items={items}/>
      </CardWrap>
    </ContentContainer>
  );
}
