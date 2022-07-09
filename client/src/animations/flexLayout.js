import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export const flexAnimation = (
  tlElem,
  headingElem,
  descElem,
  imgElem,
  // linkElem,
  containerElem
) => {
  //register ScrollTrigger & SplitText

  let storyLineSplit = new SplitText(descElem, {
    type: 'lines',
  });

  let wordSplit = new SplitText(headingElem, {
    type: 'words',
    linesClass: 'headingChildren',
  });
  tlElem = gsap.timeline({
    onComplete() {
      storyLineSplit.revert();
      wordSplit.revert();
    },
  });

  const flexAnimation = tlElem

    .from(wordSplit.words, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2',
      stagger: 0.05,
    })
    .fromTo(
      storyLineSplit.lines,
      { y: 40, opacity: 0 },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: 'power4.out',
      }
    )
    .fromTo(
      imgElem,
      { autoAlpha: 0 },
      { duration: 2, ease: 'slow', autoAlpha: 1 }
    );
  let st = ScrollTrigger.create({
    trigger: containerElem,
    start: 'top center',
    end: 'bottom',
    animation: flexAnimation,
  });

  return () => {
    flexAnimation.progress(1); // reverts the SpliText in the onComplete
    st.kill();
  };

  // let storyLineSplit = new SplitText(descElem, {
  //   type: 'lines',
  // });

  // let wordSplit = new SplitText(headingElem, {
  //   type: 'words',
  // });

  // gsap.set(imgElem, { autoAlpha: 0 });

  // tlElem = gsap.timeline({
  //   onComplete() {
  //     storyLineSplit.revert();
  //     wordSplit.revert();
  //   },
  // });

  // const flexAnimation = tlElem
  //   // .to(wordSplit.words, {
  //   //   duration: 1,
  //   //   y: 0,
  //   //   opacity: 1,
  //   //   stagger: 0.1,
  //   //   ease: 'power2',
  //   // })

  //   .from(wordSplit.words, {
  //     opacity: 0,
  //     y: 50,
  //     duration: 1,
  //     ease: 'power2',
  //     stagger: 0.05,
  //   })
  //   .from(
  //     storyLineSplit.lines,
  //     { yPercent: 40, autoAlpha: 0 },
  //     {
  //       duration: 1,
  //       yPercent: 0,
  //       autoAlpha: 1,
  //       stagger: 0.1,
  //       ease: 'power4.out',
  //       overflow: 'hidden',
  //     }
  //   )
  //   .to(
  //     imgElem,

  //     { duration: 2, ease: 'slow', autoAlpha: 1 }
  //   );
  // // .fromTo(
  // //   linkElem,
  // //   { yPercent: 100, opacity: 0 },
  // //   {
  // //     opacity: 1,
  // //     yPercent: 0,
  // //     stagger: 0.3,
  // //     duration: 0.4,
  // //     overflow: 'hidden',
  // //   }
  // // )

  // let st = ScrollTrigger.create({
  //   trigger: containerElem,
  //   markers: true,
  //   start: 'top center',
  //   end: 'bottom',
  //   animation: flexAnimation,
  // });

  // return () => {
  //   flexAnimation.progress(1); // reverts the SpliText in the onComplete
  //   st.kill();
  // };
};
