import { useRef } from 'react';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import { gsap } from 'gsap';
import { Box } from '@mui/material';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FadeUp({ as, children, duration, delay, y, ease }) {
  const ref = useRef();

  useEnhancedEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: y || '50%' },
      {
        y: '0%',
        duration: duration || 1,
        delay: delay || 0,
        opacity: 1,
        ease: ease || 'sine.in',

        scrollTrigger: {
          trigger: ref.current,
          start: 'top center',
        },
      }
    );

    return () => {
      ScrollTrigger.refresh();
    };
  }, [ref]);

  return (
    <Box as={as} ref={ref}>
      {children}
    </Box>
  );
}
