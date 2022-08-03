import { useRef } from 'react';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import useRefSelector from '../../hooks/useRefSelector';
import { gsap } from 'gsap';
import { Box } from '@mui/material';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ScrollLeftAnimation({ children, id }) {
  const tl = useRef();
  const [q, ref] = useRefSelector();

  useEnhancedEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    tl.current = gsap.timeline({});
    let scroll = tl.current
      .fromTo(
        q(`#${id}-left`),
        { x: '-100%' },
        {
          x: '0%',
          duration: 1,
          ease: 'sine.in',
        }
      )
      .fromTo(
        q(`#${id}-right`),
        { x: '100%' },
        {
          x: '0%',
          duration: 1,
          ease: 'sine.in',
        }
      );

    let st = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top center',
      markers: true,
      animation: scroll,
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, [q, id, ref]);

  return <Box ref={ref}>{children}</Box>;
}
