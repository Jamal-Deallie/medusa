import { useEffect, useRef } from 'react';
import { FeaturedInSection, Subheader, SubheaderContainer } from './styles';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import { LogoContainer } from '../../containers';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function FeaturedInContainer() {
  const containerRef = useRef();

  const descRef = useRef();

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
