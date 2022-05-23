import React from 'react';
import {
  LandingSection,
  ContentContainer,
  LandingInner,
  GridItem,
  LandingImage,
  FeatureContainer,
  FeatureOuter,
  FeatureInner,
  Logos,
  LogoWrap,
  Subheader,
  ImageWrapper,
  Heading,
  CustomButton,
  ImageWrap,
  ImageMobile,
} from './styles';
import { Typography, Container } from '@mui/material';

export default function LandingContainer() {
  return (
    <LandingSection>
      <LandingInner container>
        <GridItem item md={12} lg={6} sx={{ alignItems: 'center' }}>
          <ContentContainer>
            <Heading variant='h1' color='secondary.main'>
              Medusa
            </Heading>
            <Heading variant='h1' sx={{ ml: 10 }} color='secondary.main'>
              Gardens
            </Heading>
            <ImageMobile>
              <LandingImage
                src='/images/landing-placeholder.png'
                alt='Landing Image'
              />
            </ImageMobile>
            <Subheader>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </Subheader>
            <CustomButton>Shop Now</CustomButton>
          </ContentContainer>
        </GridItem>
        <GridItem item md={12} lg={6} sx={{ alignItems: 'center' }}>
          <ImageWrap>
            <LandingImage
              src='/images/landing-placeholder.png'
              alt='Landing Image'
            />
          </ImageWrap>
        </GridItem>
      </LandingInner>
    </LandingSection>
  );
}
