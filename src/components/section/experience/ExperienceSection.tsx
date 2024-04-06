import Section from '../../layout/Section';
import SectionTitle from '../../ui/SectionTitle';
import ActivityList from './ActivityList';
import ProjectList from './ProjectList';

export default () => {
  return (
    <Section
      className="flex justify-center flex-wrap mt-[25vh]"
      aria-label="experience section"
    >
      <SectionTitle className="w-full text-center">Experience</SectionTitle>
      <ProjectList />
      <ActivityList />
    </Section>
  );
};
