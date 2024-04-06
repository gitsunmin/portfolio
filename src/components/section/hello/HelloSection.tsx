import Section from '../../layout/Section';
import GlobalGreetings from './GlobalGreetings';

export default () => {
  return (
    <Section className="pt-[30vh]">
      <>
        <GlobalGreetings />
        <p className="flex justify-center mt-[25vh]">
          스크롤을 내리면서,
          <br />
          포트폴리오를 확인해보세요.
          <br />
          감사합니다.
        </p>
      </>
    </Section>
  );
};
