import { MotionValue } from 'framer-motion';
import GlobalGreetings from '../animatioins/SlotMachine';
import Section from '../layout/Section';

type Props = {
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
};

export default (props: Props) => {
  const { scrollYProgress, start, end } = props;

  return (
    <Section
      scrollYProgress={scrollYProgress}
      start={start}
      end={end}
      ariaLabel="scene01, greeting section"
    >
      <GlobalGreetings
        className="mb-[24px]"
        slotList={[
          'Hello',
          '안녕하세요',
          'こんにちは',
          'Hallo',
          'Bonjour',
          'Hola',
        ]}
      />
    </Section>
  );
};
