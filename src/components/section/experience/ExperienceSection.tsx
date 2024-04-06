import Section from '../../layout/Section';
import SectionTitle from '../../ui/SectionTitle';
import ProjectList from './ProjectList';

export default () => {
  return (
    <Section className="flex justify-center flex-wrap mt-[25vh]">
      <SectionTitle className="w-full text-center">Experience</SectionTitle>
      <ProjectList />
    </Section>
  );
};
