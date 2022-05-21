import {
  ProcessSection,
  GridItem,
  HeadingContainer,
  Subheader,
  IconWrap,
  Icon,
} from './styles';
import { Grid, Typography } from '@mui/material';

export default function ProcessContainer() {
  return (
    <ProcessSection>
      <Subheader>Our Process</Subheader>
      <Grid container>
        <GridItem item md={3}>
          <IconWrap>
            <Icon src='images/icons/grow.svg' alt='Grow' />
          </IconWrap>
          <Typography>WE Grow</Typography>
        </GridItem>
        <GridItem item md={3}>
          <IconWrap>
            <Icon src='images/icons/buy.svg' alt='Buy' />
          </IconWrap>
          <Typography>YOU Buy</Typography>
        </GridItem>
        <GridItem item md={3}>
          <IconWrap>
            <Icon src='images/icons/ship.svg' alt='Ship' />
          </IconWrap>
          <Typography>WE Ship</Typography>
        </GridItem>
        <GridItem item md={3}>
          <IconWrap>
            <Icon src='images/icons/water.svg' alt='water' />
          </IconWrap>
          <Typography>YOU Buy</Typography>
        </GridItem>
      </Grid>
    </ProcessSection>
  );
}
