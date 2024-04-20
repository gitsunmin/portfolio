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
      <div className="flex justify-center">
        <ul>
          <li>경험</li>
        </ul>
      </div>
    </Section>
  );
};
