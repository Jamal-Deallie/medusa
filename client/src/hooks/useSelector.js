import { useMemo, useRef } from 'react';
import { gsap } from 'gsap';

export default function useSelector() {
  const ref = useRef();
  const q = useMemo(() => gsap.utils.selector(ref), [ref]);
  return [q, ref];
}
