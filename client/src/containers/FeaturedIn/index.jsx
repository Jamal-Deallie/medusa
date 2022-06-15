import { useEffect, useRef } from 'react';
import {
  FeaturedInSection,
  GridItem,
  GridContainer,
  LogoWrap,
  Logo,
} from './styles';
import { Container } from '@mui/material';
import { featuredIn } from '../../shared/featuredIn';
import { Heading } from '../../components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FeaturedInContainer() {
  useEffect(() => {
    let targets = gsap.utils.toArray('#logo');
    gsap.set(targets, { opacity: 0, y: 100 });
    ScrollTrigger.batch(targets, {
      trigger: '#trigger',
      markers: true,
      start: 'top center',
      end: 'bottom',
      invalidateOnRefresh: true,
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.1 }),
    });
    return () => {
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <FeaturedInSection>
      <Heading heading={'Featured In'} color={'primary.main'}/>
      <GridContainer container id='trigger'>
        {featuredIn.map(featured => {
          return (
            <GridItem item s={6} md={3} key={featured.id}>
              <Container sx={{ overflow: 'hidden' }}>
                <LogoWrap id='logo'>
                  <Logo src={featured.src} alt={featured.name} />
                </LogoWrap>
              </Container>
            </GridItem>
          );
        })}
      </GridContainer>
    </FeaturedInSection>
  );
}
