import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import useRefSelector from '../../hooks/useRefSelector';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function TextFadeAnimation({ children, id }) {
  const [q, ref] = useRefSelector();
  const tl = useRef();

  useEffect(() => {
    let lineSplit = new SplitText(q(`#${id}-text`), {
      type: 'lines',
    });

    tl.current = gsap.timeline({
      onComplete() {
        lineSplit.revert();
      },
    });

    const flexAnimation = tl.current.fromTo(
      lineSplit.lines,
      { y: '50%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        ease: 'power4.out',
        overflow: 'hidden',
        duration: 1,
        stagger: 0.2,
      }
    );

    let st = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top center',
      end: 'bottom',
      animation: flexAnimation,
    });
    return () => {
      flexAnimation.progress(1);
      st.kill();
    };
  }, [q, ref, tl, id]);
  return <Box ref={ref}>{children}</Box>;
}
