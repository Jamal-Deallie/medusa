import {
  NewArrivalsSection,
  GridItem,
  Image,
  Subheader,
  ContentWrap,
  ImageWrap,
  GridContainer,
} from './styles';
import { Card } from '../../components';
import { Typography, Grid, Button } from '@mui/material';

export default function NewArrivalsContainer() {
  return (
    <NewArrivalsSection>
      <Subheader>New Arrivals</Subheader>
      <ContentWrap>
        <GridContainer container spacing='20'>
          <GridItem item md={4}>
            <Card />
          </GridItem>
          <GridItem item md={4}>
            <Card />
          </GridItem>
          <GridItem item md={4}>
            <Card />
          </GridItem>
        </GridContainer>
      </ContentWrap>
    </NewArrivalsSection>
  );
}
