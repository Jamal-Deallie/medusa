import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(ScrollTrigger);

export const textAnimation = (tlElem, descElem, containerElem) => {
  //register ScrollTrigger & SplitText
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  let textLineSplit = new SplitText(descElem, {
    type: 'lines',
  });

  const lineAnimation = gsap.fromTo(
    textLineSplit.lines,
    { y: 40, opacity: 0 },
    {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power4.out',
      overflow: 'hidden',
    }
  );
  ScrollTrigger.create({
    trigger: containerElem,
    markers: true,
    start: 'top center',
    end: 'bottom',
    animation: lineAnimation,
  });

  return () => {
    ScrollTrigger.refresh();
  };
};
