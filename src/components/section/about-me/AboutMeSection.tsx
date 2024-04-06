import Section from '../../layout/Section';
import ProfileImage from '../../ui/ProfileImage';
import { motion } from 'framer-motion';

export default () => {
  return (
    <Section className="flex justify-center flex-wrap mt-[25vh] gap-[50px]">
      <motion.div
        whileInView={{
          scale: 1.1,
          transition: { duration: 1.5 },
          opacity: 1,
        }}
        initial={{ opacity: 0 }}
        className="flex justify-center w-full"
      >
        <ProfileImage width={200} height={200} alt="Profile Image" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          transition: { duration: 1 },
          opacity: 1,
        }}
        className="flex justify-center max-w-[440px]"
      >
        <p className="px-[12px]">
          안녕하세요.
          <br />
          <br />
          저는 2019년부터 프론트엔드 개발을 해오고 있는 개발자입니다. 다양한
          플랫폼에서 사용자 경험을 향상시키기 위한 작업에 참여해왔으며, 특히
          Mobile, Desktop, Web 분야에서 실력을 쌓아왔습니다. 기술적인 도전을
          해결하며 성장하는 과정을 중요시하고, 항상 새로운 것을 배우려는 자세를
          가지고 있습니다.
          <br />
          <br />
          개발 작업을 할 때는 사용자 중심의 디자인을 지향하며, 웹 표준과 접근성,
          반응형 디자인을 고려하여 프로젝트를 진행합니다. JavaScript, React,
          Vue.js 같은 현대적인 기술 스택을 활용하여, 사용자에게 보다 나은 경험을
          제공하기 위해 노력합니다.
          <br />
          <br />
          저의 포트폴리오는 저의 기술과 경험을 소개하는 공간입니다. 협업에 대한
          열린 마음과 함께, 계속해서 배우고 성장하기 위한 저의 열정을 확인하실
          수 있습니다.
          <br />
          <br />
          만약 제 작업에 대해 더 알고 싶으시다면, 언제든지 연락 주세요.
          <br />
          <br />
          감사합니다.
          <br />
          <br />
          tjsals116@gmail.com
        </p>
      </motion.div>
    </Section>
  );
};
