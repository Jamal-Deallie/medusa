import { useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function MaskOut({ children }) {
  const ref = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let animation = gsap.fromTo(
      ref.current,
      {
        maskImage: 'linear-gradient(-45deg, transparent 100%, black 150%)',
      },
      {
        duration: 3,
        ease: 'sine.out',
        maskImage: 'linear-gradient(-45deg, transparent -50%, black 0%)',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top center',
        },
      }
    );

    return () => {
      animation.scrollTrigger.kill();
    };
  }, []);

  return <Box ref={ref}>{children}</Box>;
}
