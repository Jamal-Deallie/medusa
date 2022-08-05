import { useEffect } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import useRefSelector from '../../hooks/useRefSelector';

export default function TextRightFade({ children, id }) {
  const [q, ref] = useRefSelector();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    ScrollTrigger.saveStyles(q(`#${id}-text`));

    let charsSplit = new SplitText(q(`#${id}-text`), {
      type: 'lines',
    });

    gsap.fromTo(
      charsSplit.lines,

      { opacity: 0, y: 20 },
      {
        y: 0,
        opacity: 1,
        ease: 'back',
        stagger: 0.5,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top center',
          invalidateOnRefresh: true,
      
        },
        onComplete() {
          charsSplit.revert();
        },
      }
    );
    return () => {
      ScrollTrigger.refresh()
    };
  }, [q, ref, id]);
  return <Box ref={ref}>{children}</Box>;
}
