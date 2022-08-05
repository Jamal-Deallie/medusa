import { useRef } from 'react';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import useRefSelector from '../../hooks/useRefSelector';
import { gsap } from 'gsap';
import { Box } from '@mui/material';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ScrollRightAnimation({ children, id }) {
  const tl = useRef();
  const [q, ref] = useRefSelector();

  useEnhancedEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      q(`#${id}-right`),
      { opacity: 0, x: '50%' },
      {
        x: '0%',
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
      ScrollTrigger.refresh()
    };
  }, [q, id, ref]);

  return <Box ref={ref}>{children}</Box>;
}
