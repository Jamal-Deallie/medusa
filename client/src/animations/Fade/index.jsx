import { useRef } from 'react';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import useRefSelector from '../../hooks/useRefSelector';
import { gsap } from 'gsap';
import { Box } from '@mui/material';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FadeAnimation({ children, id }) {
  const tl = useRef();
  const [q, ref] = useRefSelector();

  useEnhancedEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      q(`#${id}-fade`),
      { opacity: 0 },
      {
        duration: 1,
        opacity: 1,
        ease: 'sine.in',

        scrollTrigger: {
          trigger: ref.current,
          start: 'top 50%',
          markers: true,
        },
      }
    );

    return () => {
      ScrollTrigger.kill();
    };
  }, [q, id, ref]);

  return <Box ref={ref}>{children}</Box>;
}
