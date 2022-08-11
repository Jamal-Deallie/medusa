import { useRef, useEffect } from 'react';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import useRefSelector from '../../hooks/useRefSelector';
import { gsap } from 'gsap';
import { Box } from '@mui/material';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export default function ScrollLeftAnimation({ children, id }) {
  const tl = useRef();
  const [q, ref] = useRefSelector();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    let lineSplit = new SplitText(q(`#${id}-heading`), {
      type: 'lines chars',
    });
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
      )
      .fromTo(
        lineSplit.chars,
        //   { y: 80, opacity: 0 },
        { y: '110%', rotate: '-2deg', opacity: 0 },
        {
          opacity: 1,
          y: '0%',
          rotate: '0deg',
          stagger: 0.02,
          duration: 1,
          ease: 'power3.out',
          offset: 10,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top top',
          },
          onComplete() {
            lineSplit.revert();
          },
        }
      );

    let st = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top center',
      scrub: true,
      pin: true,

      animation: scrollAnimation,
    });
    return () => {
      st.kill();
    };
  }, [q, id, ref]);

  return <Box ref={ref}>{children}</Box>;
}
