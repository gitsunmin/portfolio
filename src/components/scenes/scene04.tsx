import { MotionValue, motion } from 'framer-motion';
import Section from '../layout/Section';

type Props = React.PropsWithChildren<{
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
}>;

export default (props: Props) => {
  const { scrollYProgress, start, end } = props;

  return (
    <Section
      scrollYProgress={scrollYProgress}
      start={start}
      end={end}
      ariaLabel="scene04"
    >
      <motion.div
        className="m-auto bg-gray-800 max-w-96 h-60 rounded-lg shadow-xl"
        initial={{ transform: 'rotateX(deg)' }}
      >
        <div className="bg-gray-800 max-w-96 h-60 rounded-lg shadow-xl relative">
          <div className="bg-black w-full h-full rounded-t-lg p-[12px]">
            <p>
              <br />
            </p>
          </div>
          <div className="w-24 h-3 bg-gray-600 rounded-b-full mx-auto -mt-3 self-center"></div>
        </div>
      </motion.div>
    </Section>
  );
};
