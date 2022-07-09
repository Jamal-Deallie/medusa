import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const navAnimation = (
  path,
  // containerElem,
  tlElem,
  navbarElem,
  navWrapElem
) => {
  // ScrollTrigger (this automatically gets killed when the breakpoint no longer matches...

  ScrollTrigger.matchMedia({
    '(max-width: 600px)': function () {
      // ScrollTrigger (this automatically gets killed when the breakpoint no longer matches...
      gsap.to(navbarElem, {
        scrollTrigger: {
          trigger: navbarElem,
        },
      });

      // other animations that aren't ScrollTrigger-related...

      // other animations that aren't ScrollTrigger-related...
      tlElem = gsap.timeline();
      gsap.set(navWrapElem, { autoAlpha: 0 });

      tlElem.to(navWrapElem, { delay: 2.2, autoAlpha: 1 });

      // THIS IS THE KEY! Return a function that'll get called when the breakpoint no longer matches so we can kill() the animation (or whatever)
      // return function () {

      //   // other cleanup code can go here.
      // };

      // other cleanup code can go here.
    },
  });

  // THIS IS THE KEY! Return a function that'll get called when the breakpoint no longer matches so we can kill() the animation (or whatever)
  // return function () {

  //   // other cleanup code can go here.
  // };
};

// desktop
// '(min-width: 600px)': function () {
//   // ScrollTrigger (this automatically gets killed when the breakpoint no longer matches...
//   gsap.to(containerElem, {
//     scrollTrigger: {
//       trigger: containerElem,
//     },
//   });

//   // other animations that aren't ScrollTrigger-related...
//   tlElem = gsap.timeline();

//   if (path === '/') {
//     // gsap.set(navbarElem, { autoAlpha: 0 });
//     gsap.set(navWrapElem, { autoAlpha: 0 });

//     tlElem
//       // .to(navbarElem, { autoAlpha: 1, duration: 0.5, ease: 'slow' })
//       .to(navWrapElem, { autoAlpha: 1, duration: 3, ease: 'slow' });

//     // THIS IS THE KEY! Return a function that'll get called when the breakpoint no longer matches so we can kill() the animation (or whatever)
//     return function () {
//       tlElem.kill();
//       // other cleanup code can go here.
//     };
//   } else {
//     // THIS IS THE KEY! Return a function that'll get called when the breakpoint no longer matches so we can kill() the animation (or whatever)
//     return function () {
//       tlElem.kill();
//       // other cleanup code can go here.
//     };
//   }
//   // other cleanup code can go here.
// },

// ScrollTrigger.matchMedia({
//   '(max-width: 600px)': function () {
//     // ScrollTrigger (this automatically gets killed when the breakpoint no longer matches...
//     gsap.to(navbarElem, {
//       scrollTrigger: {
//         trigger: navbarElem,
//       },
//     });

//     // other animations that aren't ScrollTrigger-related...
//     tlElem = gsap.timeline();
//     gsap.set(navbarElem, { zIndex: -1 });
//     gsap.set(navWrapElem, { autoAlpha: 0 });
//     if (path === '/') {
//       tlElem
//         .to(navbarElem, { delay: 2.2, zIndex: 6 })
//         .to(navWrapElem, { autoAlpha: 1 });

//       // THIS IS THE KEY! Return a function that'll get called when the breakpoint no longer matches so we can kill() the animation (or whatever)
//       return function () {
//         tlElem.kill();
//         ScrollTrigger.kill();
//         // other cleanup code can go here.
//       };
//     } else tlElem.kill();
//     ScrollTrigger.kill();
//     // other cleanup code can go here.
//   },
// });
