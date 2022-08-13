import { gsap } from 'gsap';

export default function Rotate(elem) {
  gsap.to(elem, { rotation: '+=360', repeat: -1, ease: 'none', duration: 3 });
}
