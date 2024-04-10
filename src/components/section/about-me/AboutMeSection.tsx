import Section from '../../layout/Section';
import ProfileImage from '../../ui/ProfileImage';
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
      className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full"
      aria-label="about me section"
    >
      <div className="flex justify-center px-[18px]">
        <ProfileImage alt="Profile Image" />
      </div>
      <div className="flex justify-center">
        <p>
          <p className="mb-[12px]">저는</p>
          <span className="text-[14px] lg:text-[40px]">프론트엔드 개발자 </span>
          <br />
          <p className="text-right mt-[12px]">입니다.</p>
          <br />
        </p>
      </div>
    </motion.section>
  );
};
