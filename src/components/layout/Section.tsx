import { MotionValue, motion, useTransform } from 'framer-motion';

type Props = React.PropsWithChildren<{
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
  ariaLabel: string;
}>;

export default (props: Props) => {
  const { children, ...others } = props;
  const { scrollYProgress, start, end, ariaLabel } = others;

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
      style={{ opacity, display }}
      aria-label={ariaLabel}
      className={`fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full`}
    >
      {children}
    </motion.section>
  );
};
