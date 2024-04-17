import { useInView } from 'framer-motion';
import { useEffect } from 'react';

export const useInViewEffect = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) => {
  const isView = useInView(ref);

  useEffect(() => {
    if (isView) callback();
  }, [isView]);

  return isView;
};
