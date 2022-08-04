import { useRef } from 'react';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import useRefSelector from '../../hooks/useRefSelector';
import { gsap } from 'gsap';
import { Box } from '@mui/material';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FadeUpAnimation({ children, id }) {

  const [q, ref] = useRefSelector();

  useEnhancedEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      q(`#${id}-fadeUp`),
      { opacity: 0, y: '50%' },
      {
        y: '0%',
        duration: 1,
        opacity: 1,
        ease: 'sine.in',

        scrollTrigger: {
          trigger: ref.current,
          start: 'top center',
        },
      }
    );

    return () => {
      ScrollTrigger.kill();
    };
  }, [q, id, ref]);

  return <Box ref={ref}>{children}</Box>;
}
