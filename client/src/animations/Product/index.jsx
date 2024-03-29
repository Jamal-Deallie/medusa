import { ProductContainer } from './styles';
import { useEnhancedEffect } from '../../hooks/useEnhancedEffect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useRefSelector from '../../hooks/useRefSelector';


export default function ProductAnimation({ children }) {
  const [q, ref] = useRefSelector();

  useEnhancedEffect(() => {
    let targets = gsap.utils.toArray(q('#product-cards'));
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(targets, { opacity: 0, y: 100 });

    ScrollTrigger.batch(targets, {
      trigger: ref.current,
      start: 'center bottom',
      end: 'center top',
      toggleActions: 'play none none reverse',
      invalidateOnRefresh: true,
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.1 }),
    });

    return () => {
      ScrollTrigger.refresh();
    };
  }, [q, ref]);

  return <ProductContainer ref={ref}>{children} </ProductContainer>;
}
