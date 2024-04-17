import Section from '../layout/Section';
import ProfileImage from '../ui/ProfileImage';
import { MotionValue, motion, useAnimation } from 'framer-motion';

type Props = {
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
};

export default (props: Props) => {
  const { scrollYProgress, start, end } = props;
  const flyingAnimation = useAnimation();
  const writingAnimation = useAnimation();

  return (
    <Section
      scrollYProgress={scrollYProgress}
      start={start}
      end={end}
      ariaLabel="scene02, about me section"
      onInView={() => {
        writingAnimation.start({
          opacity: [0, 1],
        });
        flyingAnimation.start({
          opacity: [0, 1, 1, 1],
          y: [-15, 10, 5, 0],
          zoom: [1.5, 1.2, 1.1, 1],
        });
      }}
    >
      <div className="flex justify-center px-[18px]">
        <ProfileImage alt="Profile Image" />
      </div>
      <div className="flex justify-center mt-[12px]">
        <div className="text-center px-[18px] lg:w-[400px]">
          <p className="flex items-center justify-center text-[18px] lg:text-[24px]">
            {'저는 프론트엔드 개발자'.split('').map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={writingAnimation}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
              >
                {el === ' ' ? '\u00A0' : el}
              </motion.span>
            ))}
          </p>
          <br />
          <motion.p
            animate={flyingAnimation}
            transition={{ duration: 0.5, delay: 1.5, bounce: 0.5 }}
            className="text-[40px] lg:text-[54px]"
          >
            김선민
          </motion.p>
          <br />
          <p className="text-[18px] lg:text-[24px] text-center">
            {'입니다.'.split('').map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={writingAnimation}
                transition={{
                  duration: 0.25,
                  delay: i / 10 + 1,
                }}
                key={i}
              >
                {el === ' ' ? '\u00A0' : el}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
    </Section>
  );
};
