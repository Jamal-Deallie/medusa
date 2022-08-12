import {
  HeroSection,
  Heading,
  HeroInnerContainer,
  CustomLink,
  Subheader,
  ContentContainer,
} from './styles';
import { LandingAnimation } from '../../animations';

export default function HeroContainer() {
  return (
    <HeroSection>
      <LandingAnimation id='hero'>
        <HeroInnerContainer>
          <ContentContainer>
            <Heading id='hero-heading'>medusa</Heading>

            <Subheader variant='body3' paragraph={true} id='hero-subheader'>
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
