import React from 'react';
import {
  LandingSection,
  HeadingContainer,
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
} from './styles';
import { Typography, Container } from '@mui/material';

export default function LandingContainer() {
  return (
    <LandingSection>
      <LandingInner container>
        <GridItem item md={6}>
          <HeadingContainer>
            <Heading variant='h1'>Medusa </Heading>
            <Heading variant='h1' sx={{ ml: 10 }}>
              Gardens
            </Heading>
          </HeadingContainer>
          <Subheader>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </Subheader>
          <CustomButton sx={{ ml: 12 }}>Shop Now</CustomButton>
        </GridItem>
        <GridItem item md={6}>
          <LandingImage src='/images/landing-img.png' alt='Landing Image' />
        </GridItem>
      </LandingInner>
    </LandingSection>
  );
}
