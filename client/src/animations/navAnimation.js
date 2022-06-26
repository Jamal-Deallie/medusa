import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const navAnimation = (
  path,
  containerElem,
  tlElem,
  navbarElem,
  navWrapElem,
  navLinkElem,
  logoElem
) => {
  ScrollTrigger.matchMedia({
    // desktop
    '(min-width: 600px)': function () {
      // ScrollTrigger (this automatically gets killed when the breakpoint no longer matches...
      gsap.to(containerElem, {
        scrollTrigger: {
          trigger: containerElem,
        },
      });

      // other animations that aren't ScrollTrigger-related...
      tlElem = gsap.timeline();

      if (path === '/') {
        tlElem
          .to(navbarElem, { delay: 2.2, zIndex: 6 })
          .to(navWrapElem, { opacity: 1 })
          .to(navLinkElem, {
            opacity: 1,
            duration: 1.5,
            ease: 'power3',
            y: 0,
            stagger: 0.1,
          })
          .to(
            logoElem,

            {
              opacity: 1,
              duration: 0.5,
              ease: 'slow',
            }
          );

        // THIS IS THE KEY! Return a function that'll get called when the breakpoint no longer matches so we can kill() the animation (or whatever)
        return function () {
          tlElem.kill();
          // other cleanup code can go here.
        };
      } else tlElem.kill();
      // other cleanup code can go here.
    },
  });
};
