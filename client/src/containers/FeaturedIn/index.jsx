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
import { featuredIn } from '../../shared/featuredItems';
import { Heading } from '../../components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import { textAnimation } from '../../animations/textAnimation';
import { batchAnimation } from '../../animations/batchAnimation';
import useArrayRef from '../../hooks/useArrayRef';
import { LogoContainer } from '../../containers';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function FeaturedInContainer() {
  const containerRef = useRef();
  const batchContainer = useRef();
  const descRef = useRef();
  const [logos, setLogos] = useArrayRef();

  const tl = useRef();

  //register ScrollTrigger & SplitText
  useEffect(() => {
    let lineSplit = new SplitText(descRef.current, {
      type: 'lines',
    });
    tl.current = gsap.timeline({
      onComplete() {
        lineSplit.revert();
      },
    });
    const lineAnimation = tl.current.fromTo(
      lineSplit.lines,
      { y: 40, opacity: 0 },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: 'power4.out',
        overflow: 'hidden',
      }
    );
    let st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top center',
      end: 'bottom',
      animation: lineAnimation,
    });
    return () => {
      lineAnimation.progress(1); // reverts the SplitText in the onComplete
      st.kill();
    };
  }, []);

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

  // useEnhancedEffect(() => {
  //   textAnimation(tl.current, desc.current, textContainer.current);
  // });

  // useEnhancedEffect(() => {
  //   batchAnimation(logos.current, batchContainer.current);
  // }, [batchContainer]);

  return (
    <FeaturedInSection>
      <SubheaderContainer ref={containerRef}>
        <Subheader ref={descRef} sx={{ overflow: 'hidden' }}>
          Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus
          suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus
          nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
        </Subheader>
      </SubheaderContainer>

      <LogoContainer />
    </FeaturedInSection>
  );
}
