import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop(props) {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
}
