import { useEffect, useRef } from 'react';
import { FeaturedInSection, SubheaderContainer } from './styles';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { LogoContainer } from '../../containers';
import { Typography } from '@mui/material';
import { TextFadeAnimation } from '../../animations';

export default function FeaturedInContainer() {
  return (
    <FeaturedInSection>
      <SubheaderContainer>
        <TextFadeAnimation id='feature'>
          <Typography variant='subheader1' id='feature-text'>
            Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor
            lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh
            pulvinar a.
          </Typography>
        </TextFadeAnimation>
      </SubheaderContainer>
      <LogoContainer />
    </FeaturedInSection>
  );
}
