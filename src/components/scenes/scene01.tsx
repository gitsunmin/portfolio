import { MotionValue, motion, useTransform } from 'framer-motion';
import GlobalGreetings from '../ui/GlobalGreetings';
import { P, match } from 'ts-pattern';

type Props = {
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
};

export default (props: Props) => {
  const { scrollYProgress, start, end } = props;
  const opacity = useTransform(
    scrollYProgress,
    [start, (start + end) / 2, end],
    [0, 1, 0]
  );

  return (
    <motion.section
      style={{ opacity }}
      className={`fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full ${match(
        scrollYProgress
      )
        .with(P.number.gt(end), () => 'hidden')
        .with(P.number.lt(start), () => 'hidden')
        .otherwise(() => '')}`}
      aria-label="scene01, about me section"
    >
      <GlobalGreetings className="mb-[24px]" />
    </motion.section>
  );
};
