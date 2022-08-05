import { useEffect } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import useRefSelector from '../../hooks/useRefSelector';

export default function TextRotateAnimation({ children, id }) {
  const [q, ref] = useRefSelector();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    let lineSplit = new SplitText(q(`#${id}-heading`), {
      type: 'lines chars',
    });

    gsap.fromTo(
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
          start: 'top center',
        },
        onComplete() {
          lineSplit.revert();
        },
      }
    );
    return () => {
      ScrollTrigger.refresh()
    };
  }, [q, id, ref]);
  return <Box ref={ref}>{children}</Box>;
}
