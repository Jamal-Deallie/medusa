import { useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import useRefSelector from '../../hooks/useRefSelector';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export default function LandingAnimation({ children, id }) {
  const tl = useRef();
  const [q, ref] = useRefSelector();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);

    let lineSplit = new SplitText(q(`#${id}-subheader`), {
      type: 'words',
    });

    let charSplit = new SplitText(q(`#${id}-heading`), {
      type: 'chars, words',
    });

    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
      },
    });

    tl.current = gsap.timeline({
      onComplete() {
        charSplit.revert();
        lineSplit.revert();
      },
    });

    const heroAnimation = tl.current
      .fromTo(
        charSplit.chars,

        { opacity: 0, yPercent: 25 },
        {
          opacity: 1,
          yPercent: 0,
          duration: 2,
          ease: 'back',
          stagger: 0.05,
        }
      )
      .fromTo(
        lineSplit.words,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 2, ease: 'back', stagger: 0.05 },
        '-=1.5'
      )
      .fromTo(
        q(`#${id}-link`),
        { opacity: 0 },
        { opacity: 1, ease: 'sine.in' },
        '-=1'
      );
    let st = gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top center',
        end: 'bottom',
        animation: heroAnimation,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      heroAnimation.progress(1); // reverts the SplitText in the onComplete
      st.kill();
    };
  }, [ref, q, id]);

  return <Box ref={ref}>{children}</Box>;
}
