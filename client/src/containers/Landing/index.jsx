import {
  ContentContainer,
  LandingOuter,
  LandingImage,
  HeadingRight,
  ImageWrap,
  ImageContainer,
  HeadingLeft,
  ButtonContainer,
  LandingSection,
} from './styles';
import { Button } from '@mui/material';
import { LandingAnimation } from '../../animations';

export default function LandingContainer() {
  return (
    <LandingAnimation id='landing'>
      <LandingSection>
        <LandingOuter>
          <ContentContainer>
            <HeadingLeft id='landing-heading'>medusa's</HeadingLeft>
            <HeadingRight id='landing-heading'>garden</HeadingRight>
          </ContentContainer>

          <ImageContainer>
            <ImageWrap id='landing-image'>
              <LandingImage
                id='image'
                src='https://res.cloudinary.com/dtwk4dm3g/image/upload/q_100/v1655867360/Medusa/pexels-alanna-6345208_dvqg9r.webp'
                alt='Landing Image'
              />
            </ImageWrap>
          </ImageContainer>
          <ButtonContainer>
            <Button variant='main' id='landing-button'>
              Shop Now
            </Button>
          </ButtonContainer>
        </LandingOuter>
      </LandingSection>
    </LandingAnimation>
  );
}
