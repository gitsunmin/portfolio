import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import AboutMeSection from '../components/section/about-me/AboutMeSection';
import ExperienceSection from '../components/section/experience/ExperienceSection';
import HelloSection from '../components/section/hello/HelloSection';
import SkillSection from '../components/section/skills/SkillSection';

const IndexPage = () => (
  <>
    <Header />
    <Main>
      <HelloSection />
      <AboutMeSection />
      <ExperienceSection />
      <SkillSection />
    </Main>
    <Footer />
  </>
);

export default IndexPage;
