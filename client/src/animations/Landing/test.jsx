import { useEffect, useRef } from 'react';
import {
  LandingSection,
  ContentContainer,
  LandingInner,
  GridItem,
  LandingImage,
  Subheader,
  Heading,
  CustomButton,
  ImageWrap,
  ImageMobile,
} from './styles';
import { Box } from '@mui/material';
import TestAnimation from './index';

export default function Landing() {
  return (
    <TestAnimation>
      <LandingInner container>
        <GridItem item md={12} lg={6} sx={{ alignItems: 'center' }}>
          <ContentContainer>
            <Box sx={{ overflow: 'hidden' }}>
              <Heading variant='h1' color='secondary.main' id='line-1'>
                Medusa
              </Heading>
            </Box>
            <Box sx={{ overflow: 'hidden' }}>
              <Heading
                variant='h1'
                sx={{ ml: 10 }}
                color='secondary.main'
                id='line-2'>
                Gardens
              </Heading>
            </Box>
            <ImageMobile>
              <LandingImage
                id='image'
                src='/images/landing-placeholder.png'
                alt='Landing Image'
              />
            </ImageMobile>
            <Subheader id='text' sx={{ overflow: 'hidden' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </Subheader>
            <CustomButton>Shop Now</CustomButton>
          </ContentContainer>
        </GridItem>
        <GridItem item md={12} lg={6} $of={true} sx={{ alignItems: 'center' }}>
          <ImageWrap id='mask'>
            <LandingImage
              id='image'
              src='/images/landing-placeholder.png'
              alt='Landing Image'
            />
          </ImageWrap>
        </GridItem>
      </LandingInner>
    </TestAnimation>
  );
}
