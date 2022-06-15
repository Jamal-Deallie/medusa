import { useEffect, useRef } from 'react';
import {
  LandingSection,
} from './styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function TestAnimation({ children }) {
  const tl = useRef();

  useEffect(() => {
    ScrollTrigger.matchMedia({
      // desktop
      '(min-width: 1200px)': function () {
        // ScrollTrigger (this automatically gets killed when the breakpoint no longer matches...
        gsap.to('#panel', {
          scrollTrigger: {
            trigger: '#panel',
            scrub: 1,
            end: '+=500',
          },
        });
        let lineSplit = new SplitText('#text', { type: 'lines' });
        // other animations that aren't ScrollTrigger-related...
        tl.current = gsap.timeline();
        tl.current
          .from('#image', { scale: 1.3 })
          .to('#mask', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          })
          .to('#image', {
            ease: 'power1.in',
            duration: 0.3,
            scale: 1,
          })
          .to('#image', {
            ease: 'power1.in',
            duration: 0.3,
            borderRadius: '50rem 55rem 0rem 0rem',
          })
          .fromTo(
            '#line-1',
            {
              yPercent: 100,
            },
            { yPercent: 0, duration: 0.6 },
            0
          )
          .fromTo(
            '#line-2',
            {
              yPercent: -100,
            },
            { yPercent: 0, duration: 0.6 },
            0
          )
          .from(lineSplit.lines, {
            yPercent: -100,
            stagger: 0.05,
            duration: 0.7,
            overflow: 'hidden',
          });

        // THIS IS THE KEY! Return a function that'll get called when the breakpoint no longer matches so we can kill() the animation (or whatever)
        return function () {
          tl.kill();
          // other cleanup code can go here.
        };
      },
    });
  });

  return <LandingSection id='panel'>{children}</LandingSection>;
}
