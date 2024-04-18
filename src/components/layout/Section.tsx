import { useInViewEffect } from '@/src/hooks/useInViewEffect';
import { MotionValue, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';

type Props = React.PropsWithChildren<{
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
  ariaLabel: string;
  className?: string;
  onInView?: () => void;
}>;

export default (props: Props) => {
  const { onInView = () => {}, className, children, ...others } = props;
  const { scrollYProgress, start, end, ariaLabel } = others;
  const ref = useRef(null);

  useInViewEffect(ref, onInView);

  const opacity = useTransform(
    scrollYProgress,
    [start, (start + end) / 2, end],
    [0, 1, 0]
  );
  const display = useTransform(opacity, (value) =>
    value > 0 ? 'block' : 'none'
  );

  return (
    <motion.section
      ref={ref}
      style={{ opacity, display }}
      aria-label={ariaLabel}
      className={`fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full`}
    >
      {children}
    </motion.section>
  );
};
