import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import HelloSection from '../components/section/hello/HelloSection';

const IndexPage = () => (
  <>
    <Header />
    <Main>
      <HelloSection />
    </Main>
    <Footer />
  </>
);

export default IndexPage;
