import {
  NewArrivalsSection,
  GridItem,
  Image,
  Subheader,
  ContentWrap,
  ImageWrap,
  GridContainer,
  ContentContainer,
} from './styles';

import { Typography} from '@mui/material';

export default function NewArrivalsContainer() {
  return (
    <NewArrivalsSection>
      {/* <Subheader>Visit Us In A Store Near You </Subheader> */}
      {/* <Subheader>Life gathers around plants</Subheader> */}
      <ContentWrap>
        <GridContainer container>
          <GridItem item md={7}>
            <ImageWrap>
              <Image src='/images/visit.jpg' alt='Medusa Gardens' />
            </ImageWrap>
          </GridItem>
          <GridItem item md={5}>
            <ContentContainer>
              <Subheader>Come Visit Us</Subheader>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Typography>
              <br />
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Typography>
            </ContentContainer>
          </GridItem>
        </GridContainer>
      </ContentWrap>
    </NewArrivalsSection>
  );
}
