import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const batchAnimation = (batchElem, containerElem) => {
  gsap.set(batchElem, { opacity: 0, y: 100 });
  ScrollTrigger.batch(batchElem, {
    trigger: containerElem,
    markers: true,

    start: 'top center',
    end: 'bottom',
    //reset after the trigger
    toggleActions: 'play none none reset',
    invalidateOnRefresh: true,
    onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.1 }),
  });

  return () => {
    ScrollTrigger.refresh();
  };
};
