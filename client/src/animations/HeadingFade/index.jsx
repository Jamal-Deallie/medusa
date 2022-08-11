import { useEffect } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import useRefSelector from '../../hooks/useRefSelector';

export default function HeadingFade({ children, id }) {
  const [q, ref] = useRefSelector();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    ScrollTrigger.saveStyles(q(`#${id}-heading`));

    let charsSplit = new SplitText(q(`#${id}-heading`), {
      type: 'chars, words',
    });

    gsap.fromTo(
      charsSplit.chars,

      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'back',
        stagger: 0.05,
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
      ScrollTrigger.refresh();
    };
  }, [q, ref, id]);
  return <Box ref={ref}>{children}</Box>;
}
