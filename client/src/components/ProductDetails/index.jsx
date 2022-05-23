import { Grid, Typography, Divider } from '@mui/material';
import {
  Image,
  Icon,
  IconWrap,
  ContentContainer,
  HeaderWrap,
  IconContainer,
  DetailsSection,
  DetailsContainer,
  ImageWrap,
} from './styles';
import { ATCButton } from '../../components';
export default function ProductDetails() {
  return (
    <DetailsSection>
      <DetailsContainer sx={{ margin: '0 auto', maxWidth: '140rem' }}>
        <Grid container component='main'>
          <Grid item md={5}>
            <ImageWrap>
              <Image src='/images/plant_placeholder.png' alt='place-holder' />
            </ImageWrap>
          </Grid>
          <Grid item md={7}>
            <ContentContainer>
              <div>
                <HeaderWrap>
                  <Typography variant='h1'>Name</Typography>
                  <Typography sx={{ fontSize: '4rem' }}>$29</Typography>
                </HeaderWrap>
                <Divider />
              </div>
              <Typography>
                The Ric Rac Cactus will win over any plant parent: Not only is
                it pet-friendly and easy to care for, but it offers ric rac- or
                fishbone-shaped trailing stems and the occasional night-blooming
                flower. It is considered non-toxic, safe to keep around curious
                cats and dogs.
              </Typography>
              <ATCButton />
              <Divider />
              <IconContainer>
                <IconWrap>
                  <Icon
                    src='/images/icons/badge.svg'
                    alt='30 Day Returns Guaranteed'
                  />
                  <Typography>
                    We guarantee that every plant
                    <br /> will arrive in good health
                  </Typography>
                </IconWrap>
                <IconWrap>
                  <Icon src='/images/icons/truck.svg' alt='free shipping' />
                  <Typography>Free Express shipping</Typography>
                </IconWrap>
              </IconContainer>
            </ContentContainer>
          </Grid>
        </Grid>
      </DetailsContainer>
    </DetailsSection>
  );
}
