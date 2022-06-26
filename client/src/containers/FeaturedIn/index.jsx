import { useEffect, useRef } from 'react';
import {
  FeaturedInSection,
  GridItem,
  GridContainer,
  LogoWrap,
  Logo,
  Subheader,
  SubheaderContainer,
} from './styles';
import { Container, Typography } from '@mui/material';
import { featuredIn } from '../../shared/featuredIn';
import { Heading } from '../../components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import { textAnimation } from '../../animations/textAnimation';
import { batchAnimation } from '../../animations/batchAnimation';
import useArrayRef from '../../hooks/useArrayRef';

export default function FeaturedInContainer() {
  const textContainer = useRef();
  const batchContainer = useRef();
  const desc = useRef();
  const [logos, setLogos] = useArrayRef();
  console.log(logos);
  const tl = useRef();
  // useEffect(() => {
  // let targets = gsap.utils.toArray('#logo');
  //   gsap.set(targets, { opacity: 0, y: 100 });
  //   ScrollTrigger.batch(targets, {
  //     trigger: '#trigger',
  //     markers: true,
  //     start: 'top center',
  //     end: 'bottom',
  //     invalidateOnRefresh: true,
  //     onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.1 }),
  //   });
  //   return () => {
  //     ScrollTrigger.refresh();
  //   };
  // }, []);

  useEnhancedEffect(() => {
    textAnimation(tl.current, desc.current, textContainer.current);
  });
  useEffect(() => {
    batchAnimation(logos.current, batchContainer.current);
  });

  return (
    <FeaturedInSection ref={textContainer}>
      <SubheaderContainer>
        <Subheader ref={desc} sx={{ overflow: 'hidden' }}>
          Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus
          suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus
          nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
        </Subheader>
      </SubheaderContainer>

      <GridContainer container ref={batchContainer}>
        {/* {featuredIn.map(featured => {
          return (
            <GridItem item s={6} md={3} key={featured.id}>
              <Container sx={{ overflow: 'hidden' }}>
                <LogoWrap id='logo'>
                  <Logo src={featured.src} alt={featured.name} />
                </LogoWrap>
              </Container>
            </GridItem>
          );
        })} */}
        <GridItem item s={6} md={3} ref={setLogos}>
          <Container sx={{ overflow: 'hidden' }}>
            <LogoWrap id='logos'>
              <Logo src='images/logos/apartment-therapy.svg' alt='test' />
            </LogoWrap>
          </Container>
        </GridItem>
        <GridItem item s={6} md={3}>
          <Container sx={{ overflow: 'hidden' }}>
            <LogoWrap ref={setLogos} id='logos'>
              <Logo src='images/logos/bhag.svg' alt='test' />
            </LogoWrap>
          </Container>
        </GridItem>
        <GridItem item s={6} md={3}>
          <Container sx={{ overflow: 'hidden' }}>
            <LogoWrap ref={setLogos} id='logos'>
              <Logo src='images/logos/elle-decor.svg' alt='test' />
            </LogoWrap>
          </Container>
        </GridItem>
        <GridItem item s={6} md={3}>
          <Container sx={{ overflow: 'hidden' }}>
            <LogoWrap ref={setLogos} id='logos'>
              <Logo src='images/logos/esquire.svg' alt='test' />
            </LogoWrap>
          </Container>
        </GridItem>
      </GridContainer>
    </FeaturedInSection>
  );
}
