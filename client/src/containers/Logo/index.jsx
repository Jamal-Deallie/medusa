import { GridItem, GridContainer, LogoWrap, Logo } from './styles';
import { Container } from '@mui/material';
import { useRef } from 'react';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import useArrayRef from '../../hooks/useArrayRef';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { featuredItems } from '../../shared/featuredItems';
gsap.registerPlugin(ScrollTrigger);

export default function LogoContainer() {
  const batchContainerRef = useRef();
  const [logos, setLogos] = useArrayRef();

  useEnhancedEffect(() => {
    gsap.set(logos.current, { opacity: 0, y: 100 });

    ScrollTrigger.batch(logos.current, {
      trigger: batchContainerRef.current,

      start: 'top center',
      end: 'bottom',
      //reset after the trigger
      toggleActions: 'play none none reset',
      invalidateOnRefresh: true,
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.1 }),
    });

    return () => {
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <GridContainer container ref={batchContainerRef}>
      {featuredItems.map(items => {
        const { id, name, src } = items;
        return (
          <GridItem item s={6} md={3} key={id}>
            <Container sx={{ overflow: 'hidden' }}>
              <LogoWrap ref={setLogos}>
                <Logo src={src} alt={name} />
              </LogoWrap>
            </Container>
          </GridItem>
        );
      })}
    </GridContainer>
  );
}
