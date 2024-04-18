import { MotionValue } from 'framer-motion';
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
      ariaLabel="scene03"
    >
      <p className="text-center text-[20px] sm:text-[28px]">
        지금부터 제가 경험한 것들을
      </p>
      <p className="text-center text-[20px] sm:text-[28px]">소개하겠습니다.</p>
    </Section>
  );
};
