import { useEffect, useRef } from 'react';
import {
  LandingSection,
  ContentContainer,
  LandingInner,
  LandingImage,
  Subheader,
  HeadingRight,
  CustomButton,
  ImageWrap,
  ImageContainer,
  SubheaderWrap,
  HeadingLeft,
  ButtonContainer,
} from './styles';
import { LandingAnimation } from '../../animations';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function LandingContainer() {
  return (
    <LandingAnimation>
      <LandingSection>
        <LandingInner>
          <ContentContainer>
            <HeadingLeft id='line-1'>medusa's</HeadingLeft>
            <HeadingRight id='line-2'>garden</HeadingRight>
          </ContentContainer>
  
            <ImageContainer>
              <ImageWrap id='mask'>
                <LandingImage
                  id='image'
                  src='https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1655867360/Medusa/pexels-alanna-6345208_dvqg9r.webp'
                  alt='Landing Image'
                />
              </ImageWrap>
            </ImageContainer>


          <ButtonContainer>
            <CustomButton id='landing-button'>Shop Now</CustomButton>
          </ButtonContainer>
        </LandingInner>
      </LandingSection>
    </LandingAnimation>
  );
}
