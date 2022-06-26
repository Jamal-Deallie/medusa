import { useLayoutEffect, useRef } from 'react';
import { LandingSection } from './styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function LandingAnimation({ children }) {
  const tl = useRef();
  const button = useRef();
  useLayoutEffect(() => {
    ScrollTrigger.matchMedia({
      // desktop
      '(min-width: 600px)': function () {
        // ScrollTrigger (this automatically gets killed when the breakpoint no longer matches...
        gsap.to('#panel', {
          scrollTrigger: {
            trigger: '#panel',
          },
        });
        const lineSplit1 = new SplitText('#line-1', {
          type: 'chars, words',
          linesClass: 'lineChildren',
        });

        const splitParent1 = new SplitText('#line-1', {
          type: 'chars, words',
          linesClass: 'lineParent',
        });
        const lineSplit2 = new SplitText('#line-2', {
          type: 'chars, words',
          linesClass: 'lineChildren',
        });

        const splitParent2 = new SplitText('#line-2', {
          type: 'chars, words',
          linesClass: 'lineParent',
        });

        // other animations that aren't ScrollTrigger-related...
        tl.current = gsap.timeline();
        tl.current

          .to('#mask', {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            ease: 'power3.in',
            duration: 0.7,
            scale: 1.1,
          })
          .to('#mask', {
            width: '400',
            height: '500',
            delay: 1,
            ease: 'expo.inOut',
          })
          // .to('#image', {
          //   ease: 'power3.in',
          //   duration: 0.3,
          //   borderRadius: '50rem 55rem 0rem 0rem',
          //   scale: 0.9,
          // });
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
          .to('#landing-button', { opacity: 1, ease: 'sine.in' }, '-=1');
        // .to(lineSplit.chars, {
        //   opacity: 1,
        //   y: 90,
        //   rotate: 0,
        //   stagger: 0.04,
        //   duration: 1.5,
        //   ease: 'power3.inOut',
        // });

        // THIS IS THE KEY! Return a function that'll get called when the breakpoint no longer matches so we can kill() the animation (or whatever)
        return function () {
          tl.current.kill();
          // other cleanup code can go here.
        };
      },
    });
  });

  return <LandingSection id='panel'>{children}</LandingSection>;
}
