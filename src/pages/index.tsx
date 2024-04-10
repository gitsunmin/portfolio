import { motion, useScroll } from 'framer-motion';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import AboutMeSection from '../components/section/about-me/AboutMeSection';
import ExperienceSection from '../components/section/experience/ExperienceSection';
import HelloSection from '../components/section/hello/HelloSection';
import SkillSection from '../components/section/skills/SkillSection';
import { useRef } from 'react';

const SCENES = [
  {
    id: 'hello',
    title: 'Hello',
    start: 0,
    end: 0.4,
    component: HelloSection,
  },
  {
    id: 'about-me',
    title: 'About Me',
    start: 0.4,
    end: 0.6,
    component: AboutMeSection,
  },
  {
    id: 'experience',
    title: 'Experience',
    start: 0.6,
    end: 0.8,
    component: ExperienceSection,
  },
  {
    id: 'skills',
    title: 'Skills',
    start: 0.8,
    end: 1,
    component: SkillSection,
  },
];

const IndexPage = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    container,
  });

  return (
    <>
      <Header />
      <Main ref={container} sectionCount={SCENES.length}>
        <motion.div
          className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff0080] to-[#7928ca]"
          style={{ scaleX: scrollYProgress }}
        />
        {SCENES.map((scene) => (
          <scene.component
            key={scene.id}
            scrollYProgress={scrollYProgress}
            start={scene.start}
            end={scene.end}
          />
        ))}
      </Main>
      <Footer />
    </>
  );
};

export default IndexPage;
