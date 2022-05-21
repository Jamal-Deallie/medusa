import {
  FeaturedInSection,
  GridItem,
  HeadingContainer,
  FeatureOuter,
  Subheader,
  LogoWrap,
  Logo,
} from './styles';
import { Typography, Grid, Container } from '@mui/material';

export default function FeaturedInContainer() {
  return (
    <FeaturedInSection>
      <Subheader>Featured In</Subheader>
      <Grid container>
        <GridItem item md={3}>
          <Container>
            <Logo src='/images/logos/bhag.svg' alt='better homes and gardens' />
          </Container>
        </GridItem>
        <GridItem item md={3}>
          <Container>
            <Logo src='/images/logos/bhag.svg' alt='better homes and gardens' />
          </Container>
        </GridItem>
        <GridItem item md={3}>
          <Container>
            <Logo src='/images/logos/bhag.svg' alt='better homes and gardens' />
          </Container>
        </GridItem>
        <GridItem item md={3}>
          <Container>
            <Logo src='/images/logos/bhag.svg' alt='better homes and gardens' />
          </Container>
        </GridItem>
        <GridItem item md={3}>
          <Container>
            <Logo src='/images/logos/bhag.svg' alt='better homes and gardens' />
          </Container>
        </GridItem>
        <GridItem item md={3}>
          <Container>
            <Logo src='/images/logos/bhag.svg' alt='better homes and gardens' />
          </Container>
        </GridItem>
        <GridItem item md={3}>
          <Container>
            <Logo src='/images/logos/bhag.svg' alt='better homes and gardens' />
          </Container>
        </GridItem>
        <GridItem item md={3}>
          <Container>
            <Logo src='/images/logos/bhag.svg' alt='better homes and gardens' />
          </Container>
        </GridItem>
      </Grid>
    </FeaturedInSection>
  );
}
