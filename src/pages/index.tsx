import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import AboutMeSection from '../components/section/about-me/AboutMeSection';
import HelloSection from '../components/section/hello/HelloSection';

const IndexPage = () => (
  <>
    <Header />
    <Main>
      <HelloSection />
      <AboutMeSection />
    </Main>
    <Footer />
  </>
);

export default IndexPage;
