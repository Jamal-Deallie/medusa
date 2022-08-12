import { useRef, useEffect } from 'react';

import { gsap } from 'gsap';
import { Box } from '@mui/material';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FadeIn({ children, id }) {
  const ref = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let animation = gsap.fromTo(
      ref.current,
      { opacity: 0 },
      {
        duration: 2,
        opacity: 1,
        ease: 'sine.in',

        scrollTrigger: {
          trigger: ref.current,
          start: 'top 50%',
        },
      }
    );

    return () => {
      animation.scrollTrigger.kill();
    };
  }, []);

  return <Box ref={ref}>{children}</Box>;
}
