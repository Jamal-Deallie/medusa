import { useRef } from 'react';
import { ContentSection } from './styles';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import useRefSelector from '../../hooks/useRefSelector';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(DrawSVGPlugin);

export default function ContentAnimation({ children, link, id }) {
  const tl = useRef();
  const [q, ref] = useRefSelector();

  useEnhancedEffect(() => {
    let lineSplit = new SplitText(q(`#${id}-text`), {
      type: 'lines',
    });

    let wordSplit = new SplitText(q(`#${id}-heading`), {
      type: 'words',
    });
    tl.current = gsap.timeline({
      onComplete() {
        lineSplit.revert();
        wordSplit.revert();
      },
    });

    if (link) {
      gsap.set(q(`#${id}-link`), { opacity: 0 });
    }
    gsap.set(lineSplit.lines, { y: 40, opacity: 0 });
    const contentAnimation = tl.current
      // .fromTo(
      //   q(`#${id}-image`),
      //   { autoAlpha: 0 },
      //   { duration: 1, autoAlpha: 1, ease: 'sine.in' }
      // )
      .from(wordSplit.words, {
        opacity: 0,
        y: 50,
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
      });

    if (link) {
      contentAnimation.add(
        gsap.to(q(`#${id}-link`), { duration: 0.7, opacity: 1 }, '-=1')
      );
    }

    let st = ScrollTrigger.create({
      trigger: q(`#${id}-container`),
      start: 'center bottom',
      end: 'center top',
      animation: contentAnimation,
    });

    return () => {
      contentAnimation.progress(1); // reverts the SplitText in the onComplete
      st.kill();
    };
  }, [q, id, ref, q, tl]);

  return <ContentSection ref={ref}>{children}</ContentSection>;
}
