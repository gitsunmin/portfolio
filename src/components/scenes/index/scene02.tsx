import { MotionValue, useAnimation } from 'framer-motion';
import Section from '../../layout/Section';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HoverText = (props: { text: string; onClick: () => void }) => {
  const { text, onClick } = props;

  const parentVariants = {
    initial: {
      color: '#f0f0f0',
      scale: 1,
    },
    hover: {
      color: '#00FFFF', // Darken color
      scale: 1.1, // Increase size
      x: 10, // Move right
    },
  };

  const arrowVariants = {
    initial: {
      opacity: 0,
      x: -10,
    },
    hover: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.button
      variants={parentVariants}
      initial="initial"
      whileHover="hover"
      whileTap="hover"
      style={{ display: 'inline-block', cursor: 'pointer', padding: '5px' }}
      className="flex justify-center items-center p-[5px] animate-bounce"
      onClick={onClick}
    >
      {text}
      <motion.span className="pl-[8px] items-end" variants={arrowVariants}>
        👉
      </motion.span>
    </motion.button>
  );
};

type Props = React.PropsWithChildren<{
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
}>;

export default (props: Props) => {
  const { scrollYProgress, start, end } = props;
  const careerLinkAnimationController = useAnimation();
  const activityLinkAnimationController = useAnimation();
  const navigate = useNavigate();

  const goActivityPage = async (link: string) => {
    await activityLinkAnimationController.start(
      {
        x: '100%',
      },
      {
        duration: 0.8,
      }
    );
    navigate(link);
  };

  const goCareerPage = async (link: string) => {
    await careerLinkAnimationController.start(
      {
        x: '100%',
      },
      {
        duration: 0.8,
      }
    );
    navigate(link);
  };

  return (
    <Section
      scrollYProgress={scrollYProgress}
      start={start}
      end={end}
      ariaLabel="scene03"
      finished
    >
      <div className="flex justify-center">
        <ul className="text-[60px]">
          <motion.li animate={careerLinkAnimationController}>
            <HoverText
              text={'Career'}
              onClick={() => goCareerPage('/career')}
            />
          </motion.li>
          <motion.li animate={activityLinkAnimationController}>
            <HoverText
              text={'Activity'}
              onClick={() => goActivityPage('/activity')}
            />
          </motion.li>
        </ul>
      </div>
    </Section>
  );
};
