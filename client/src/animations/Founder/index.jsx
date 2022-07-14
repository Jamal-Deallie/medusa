import { useRef } from 'react';
import { FounderSection } from './styles';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import useRefSelector from '../../hooks/useRefSelector';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(DrawSVGPlugin);

export default function FounderAnimation({ children }) {
  const tl = useRef();
  const [q, ref] = useRefSelector();

  useEnhancedEffect(() => {
    let lineSplit = new SplitText(q('#founder-text'), {
      type: 'lines',
    });

    let wordSplit1 = new SplitText(q('#founder-header'), {
      type: 'words',
    });
    let wordSplit2 = new SplitText(q('#founder-name'), {
      type: 'words',
    });
    tl.current = gsap.timeline({
      onComplete() {
        lineSplit.revert();
        wordSplit1.revert();
        wordSplit2.revert();
      },
    });

    gsap.set(lineSplit.lines, { y: 40, opacity: 0 });
    gsap.set(wordSplit1.words, { y: 50, opacity: 0 });
    gsap.set(wordSplit2.words, { y: 50, opacity: 0 });

    const contentAnimation = tl.current
      .to(wordSplit1.words, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2',
        stagger: 0.05,
      })
      .to(lineSplit.lines, {
        duration: 0.7,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: 'power4.out',
        overflow: 'hidden',
      })
      .fromTo(
        q('#founder-image'),
        { autoAlpha: 0 },
        { duration: 1, autoAlpha: 1, ease: 'sine.in' },
        '-=1'
      )
      .fromTo(
        q('#founder-svg'),
        { drawSVG: '0' },
        { duration: 0.7, drawSVG: '100%' }
      )
      .to(
        wordSplit2.words,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2',
          stagger: 0.05,
        },
        '-=1'
      );

    let st = ScrollTrigger.create({
      trigger: q('#founder-container'),
      start: 'top center',
      end: 'bottom',
      animation: contentAnimation,
    });

    return () => {
      contentAnimation.progress(1); // reverts the SplitText in the onComplete
      st.kill();
    };
  }, [q, ref, tl, ]);

  return <FounderSection ref={ref}>{children}</FounderSection>;
}
