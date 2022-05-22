import { Grid, Typography, Container } from '@mui/material';
import { Image } from './styles';

export default function ProductDetails() {
  return (
    <div>
      <Grid container component='main'>
        <Grid item md={4}>
          <Image src='/images/plant_placeholder.png' alt='place-holder' />
        </Grid>
        <Grid item md={8}>
          <h1>Name</h1>
          <Typography>
            The Ric Rac Cactus will win over any plant parent: Not only is it
            pet-friendly and easy to care for, but it offers ric rac- or
            fishbone-shaped trailing stems and the occasional night-blooming
            flower. It is considered non-toxic, safe to keep around curious cats
            and dogs.
          </Typography>
          <button>ADD TO CART</button>
        </Grid>
      </Grid>
    </div>
  );
}
