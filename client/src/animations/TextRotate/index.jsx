import { useEffect, useRef } from 'react';
import { Typography } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import useRefSelector from '../../hooks/useRefSelector';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function TextRotateAnimation({ children, id }) {
  const ref = useRef();
  const tl = useRef();

  useEffect(() => {
    let wordSplit = new SplitText(ref.current, {
      type: 'words, chars',
    });

    tl.current = gsap.timeline({
      onComplete() {
        wordSplit.revert();
      },
    });

    let textAnimation = tl.current.fromTo(
      wordSplit.chars,
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
      }
    );
    let st = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top center',
      end: 'bottom',
      animation: textAnimation,
    });
    return () => {
      textAnimation.progress(1); // reverts the SpliText in the onComplete
      st.kill();
    };
  }, []);
  return (
    <Typography ref={ref} variant='subheader1'>
      {children}
    </Typography>
  );
}
