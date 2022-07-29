import { useRef } from 'react';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import useRefSelector from '../../hooks/useRefSelector';
import { gsap } from 'gsap';
import { Box } from '@mui/material';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FadeUpAnimation({ children, id }) {
  const tl = useRef();
  const [q, ref] = useRefSelector();

  useEnhancedEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    tl.current = gsap.timeline();

    let contentAnimation = tl.current.fromTo(
      q(`#${id}-fadeUp`),
      { autoAlpha: 0 },
      { duration: 1, autoAlpha: 1, ease: 'sine.in' }
    );

    let st = ScrollTrigger.create({
      trigger: q(`#${id}-container`),
      start: 'center bottom',
      end: 'center top',
      animation: contentAnimation,
    });

    return () => {
      st.kill();
    };
  }, [q, id, ref, q, tl]);

  return <Box ref={ref}>{children}</Box>;
}
