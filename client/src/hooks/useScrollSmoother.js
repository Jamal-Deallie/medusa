import {useRef, useEffect} from "react";
import {gsap} from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";

export default function useScrollSmoother() {

  gsap.registerPlugin(ScrollSmoother);

  var smoother = useRef(null);

  useEffect(() => {

    smoother.current = ScrollSmoother.create({
      smooth: 4,
      effects: true
    })

  }, [])

  return {smoother}

}