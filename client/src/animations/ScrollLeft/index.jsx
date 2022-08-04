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
    let targets = gsap.utils.toArray(`#${id}-scroll`);
    tl.current = gsap.timeline();
    const scrollAnimation = tl.current
      .fromTo(
        q(targets[0]),
        { x: '0%' },
        {
          x: '25%',
          duration: 1,
          ease: 'sine.in',
        }
      )
      .fromTo(
        q(targets[1]),
        { x: '0%' },
        {
          x: '-25%',
          duration: 1,
          ease: 'sine.in',
        },
        '-=1'
      );

    let st = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top center',
      scrub: true,

      animation: scrollAnimation,
    });
    return () => {
      st.kill();
    };
  }, [q, id, ref]);

  return <Box ref={ref}>{children}</Box>;
}

