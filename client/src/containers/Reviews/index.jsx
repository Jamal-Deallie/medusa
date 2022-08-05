import {
  ReviewSection,
  Heading,
  FiveStars,
  GridItem,
  HeaderContainer,
  Cite,
} from './styles';
import { Typography, Grid, Container } from '@mui/material';
import { reviewItems } from '../../shared/reviewItems';
import { BatchAnimation, TextRotateAnimation } from '../../animations';

export default function ReviewsContainer() {
  return (
    <ReviewSection>
      <Container>
        <TextRotateAnimation id={'review'}>
          <HeaderContainer>
            <Heading id='review-heading'>Our Happy Customers</Heading>
          </HeaderContainer>
        </TextRotateAnimation>
        <BatchAnimation id={'batch'}>
          <Grid container spacing={3}>
            {reviewItems.map(items => {
              const { id, src, alt, name, review } = items;
              return (
                <GridItem item md={4} key={id} id='batch-item'>
                  <FiveStars src={src} alt={alt} />
                  <Typography variant='subheader3'>{review}</Typography>
                  <Cite variant='body2' sx={{ color: 'secondary.light' }}>
                    - {name}
                  </Cite>
                </GridItem>
              );
            })}
          </Grid>
        </BatchAnimation>
      </Container>
    </ReviewSection>
  );
}
