import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import {
  HeroSection,
  Heading,
  HeroInnerContainer,
  CustomLink,
  Subheader,
  ContentContainer,
  Image,
} from './styles';
import { HeadingFade, FadeUp, LandingAnimation } from '../../animations';

export default function HeroContainer() {
  return (
    <HeroSection>
      <LandingAnimation id='hero'>
        <Image
          src='https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1660182569/Medusa/hero.webp'
          alt='hero image'
        />
        <HeroInnerContainer>
          <ContentContainer>
            <Heading id='hero-heading'>medusa</Heading>

            <Subheader variant='body3' paragraph='true' id='hero-subheader'>
              Curabitur arcu erat accumsan id mauris
            </Subheader>

            <CustomLink to='shop' id='hero-link'>
              Shop Now
            </CustomLink>
          </ContentContainer>
        </HeroInnerContainer>
      </LandingAnimation>
    </HeroSection>
  );
}
