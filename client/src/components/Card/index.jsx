import { ContentContainer, Image, HeadingContainer, CardWrap } from './styles';
import { Typography } from '@mui/material';
import { ATCButton } from '../../components';
import { ProductAnimation } from '../../animations';
import { Link } from 'react-router-dom';

export default function CustomCard({ product }) {
  return (
    <ProductAnimation>
      {product.map(item => {
        const { _id, name, price, image } = item;
        return (
          <ContentContainer key={_id} id='product-cards'>
            <HeadingContainer>
              <Typography variant='body2' sx={{ color: 'secondary.light' }}>
                ${price}
              </Typography>
              <Typography variant='body2' sx={{ color: 'secondary.light' }}>
                {name}
              </Typography>
            </HeadingContainer>
            <CardWrap>
              <Link to={`/shop/${_id}`}>
                <Image src={image} alt={name} />
              </Link>

              <ATCButton productId={_id} />
            </CardWrap>
          </ContentContainer>
        );
      })}
    </ProductAnimation>
  );
}
