import { MotionValue, motion, useAnimation } from 'framer-motion';
import Section from '../layout/Section';

type Props = React.PropsWithChildren<{
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
}>;

export default (props: Props) => {
  const { scrollYProgress, start, end } = props;
  const writingAnimation = useAnimation();

  const onInView = async () => {
    await writingAnimation.start({
      opacity: [0, 1],
    });
  };

  return (
    <Section
      scrollYProgress={scrollYProgress}
      start={start}
      end={end}
      ariaLabel="scene04"
      onInView={onInView}
    >
      <motion.div
        className="m-auto flex justify-center items-center h-screen"
        initial={{ transform: 'rotateX(deg)' }}
      >
        <div className="bg-black w-56 h-96 rounded-lg overflow-hidden shadow-xl relative">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-xl">
            <p className="relative -left-full pt-[24px] w-48">
              {'뿐만 아니라, 모바일 환경에서도 개발 경험을 가지고 있습니다.'
                .split('')
                .map((el, i) => (
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
          </div>
          <div className="absolute top-0 left-0 right-0 h-full border-4 border-gray-800 rounded-lg" />
          <div className="h-full" />
        </div>
      </motion.div>
    </Section>
  );
};
