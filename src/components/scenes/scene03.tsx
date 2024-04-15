import { MotionValue } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import ActivityList from '../section/experience/ActivityList';
import ProjectList from '../section/experience/ProjectList';
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
      ariaLabel="scene03, experience section"
    >
      <SectionTitle className="w-full text-center">Experience</SectionTitle>
      <ProjectList />
      <ActivityList />
    </Section>
  );
};
