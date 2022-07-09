import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export const LandingAnimation = (
  tlElem,
  headingElem,
  imgElem,
  containerElem,
  btnElem
) => {
  //register ScrollTrigger & SplitText
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);
  ScrollTrigger.matchMedia({
    // desktop
    '(min-width: 600px)': function () {
      // ScrollTrigger (this automatically gets killed when the breakpoint no longer matches...
      gsap.to(containerElem, {
        scrollTrigger: {
          trigger: containerElem,
        },
      });
      const lineSplit1 = new SplitText(headingElem, {
        type: 'chars, words',
        linesClass: 'lineChildren',
      });

      const lineSplit2 = new SplitText('#line-2', {
        type: 'chars, words',
        linesClass: 'lineChildren',
      });

      // other animations that aren't ScrollTrigger-related...
      tlElem = gsap.timeline();
      tlElem

        .fromTo(
          imgElem,
          { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
          {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            ease: 'power3.in',
            duration: 0.7,
            scale: 1.1,
          }
        )
        // .to(imgElem, {
        //   width: '400',
        //   height: '500',
        //   delay: 1,
        //   ease: 'expo.inOut',
        // })
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
        .to(btnElem, { opacity: 1, ease: 'sine.in' }, '-=1');

      // THIS IS THE KEY! Return a function that'll get called when the breakpoint no longer matches so we can kill() the animation (or whatever)
      return function () {
        tlElem.kill();
        // other cleanup code can go here.
      };
    },
  });
};
