import { useRef } from 'react';
import { Box } from '@mui/material';
import useRefSelector from '../../hooks/useRefSelector';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export default function LandingAnimation({ children, id }) {
  const tl = useRef();
  const [q, ref] = useRefSelector();

  useEnhancedEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
    let arrTargets = gsap.utils.toArray(`#${id}-heading`);

    ScrollTrigger.matchMedia({
      // desktop
      '(min-width: 800px)': function () {
        // ScrollTrigger (this automatically gets killed when the breakpoint no longer matches...
        gsap.to(ref.current, {
          scrollTrigger: {
            trigger: ref.current,
          },
        });
        const lineSplit1 = new SplitText(arrTargets[0], {
          type: 'chars, words',
          linesClass: 'lineChildren',
        });

        const lineSplit2 = new SplitText(arrTargets[1], {
          type: 'chars, words',
          linesClass: 'lineChildren',
        });

        gsap.set(q(`#${id}-button`), { autoAlpha: 0 });
        // other animations that aren't ScrollTrigger-related...
        tl.current = gsap.timeline();
        tl.current

          .fromTo(
            q(`#${id}-image`),
            { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
            {
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
              ease: 'power3.in',
              duration: 0.7,
              scale: 1.1,
            }
          )
          .from(lineSplit1.chars, {
            opacity: 0,
            y: 50,
            duration: 2,
            ease: 'back',
            stagger: 0.05,
          })
          .from(
            lineSplit2.chars,
            { opacity: 0, y: 50, duration: 2, ease: 'back', stagger: 0.05 },
            '-=1.5'
          )
          .to(q(`#${id}-button`), { autoAlpha: 1, ease: 'sine.in' }, '-=1');

        // THIS IS THE KEY! Return a function that'll get called when the breakpoint no longer matches so we can kill() the animation (or whatever)
        return function () {
          tl.current.kill();
          // other cleanup code can go here.
        };
      },
    });
  }, [ref, q, id]);

  return <Box ref={ref}>{children}</Box>;
}
