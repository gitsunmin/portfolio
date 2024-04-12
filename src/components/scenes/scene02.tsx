import { P, match } from 'ts-pattern';
import ProfileImage from '../ui/ProfileImage';
import { MotionValue, motion, useTransform } from 'framer-motion';

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
      aria-label="scene02, about me section"
    >
      <div className="flex justify-center px-[18px]">
        <ProfileImage alt="Profile Image" />
      </div>
      <div className="flex justify-center mt-[12px]">
        <p className="text-[14px] lg:text-[40px]">김선민</p>
      </div>
    </motion.section>
  );
};
