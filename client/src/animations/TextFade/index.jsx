import { useEffect } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import useRefSelector from '../../hooks/useRefSelector';

export default function TextFadeAnimation({ children, id }) {
  const [q, ref] = useRefSelector();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    ScrollTrigger.saveStyles(q(`#${id}-text`));

    let lineSplit = new SplitText(q(`#${id}-text`), {
      type: 'lines',
    });

    gsap.fromTo(
      lineSplit.lines,
      //   { y: 80, opacity: 0 },
      { y: '50%', opacity: 0 },
      {
        // duration: 1,
        // y: 0,
        y: '0%',
        opacity: 1,
        // stagger: 0.1,
        ease: 'power4.out',
        overflow: 'hidden',
        duration: 1,
        // ease: 'power4.out',
        stagger: 0.2,
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
      ScrollTrigger.kill();
    };
  }, [q, ref, id]);
  return <Box ref={ref}>{children}</Box>;
}
