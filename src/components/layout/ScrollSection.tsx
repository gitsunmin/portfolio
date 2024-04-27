'use client';
import { useInViewEffect } from '@/hooks/useInViewEffect';
import { MotionValue, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';

type Props = React.PropsWithChildren<{
  id: string;
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
  ariaLabel: string;
  className?: string;
  ending?: boolean;
  onInView?: () => void;
}>;

export const ScrollSection = (props: Props) => {
  const {
    onInView = () => {},
    className,
    ending = false,
    children,
    ...others
  } = props;
  const { scrollYProgress, start, end, ariaLabel } = others;
  const ref = useRef(null);

  useInViewEffect(ref, onInView);

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, ending ? 1 : 0]
  );
  const display = useTransform(opacity, (value) =>
    value > 0 ? 'block' : 'none'
  );

  return (
    <motion.section
      id={props.id}
      ref={ref}
      style={{ opacity, display }}
      aria-label={ariaLabel}
      className={`fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full`}
    >
      {children}
    </motion.section>
  );
};
