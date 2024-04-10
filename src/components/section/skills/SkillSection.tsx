import { MotionValue, motion, useTransform } from 'framer-motion';
import Section from '../../layout/Section';
import LabeledIcon from '../../ui/LabeledIcon';
import SectionTitle from '../../ui/SectionTitle';

const SKILL_LIST = [
  {
    name: 'HTML5',
    icon: './assets/icons/html5.svg',
    description:
      '시멘틱, 웹 표준, 웹 접근성, SEO 등 기본적인 웹 기술에 대한 이해와 활용을 할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'CSS3',
    icon: './assets/icons/css3.svg',
    description:
      'Box Model, Flexbox, Grid, Animation, Media Query 등을 활용을 할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'Javascript',
    icon: './assets/icons/javascript.svg',
    description:
      'ES6+ 문법, 비동기 처리, 호이스팅, 동작 원리 등을 이해하고 활용할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'Typescript',
    icon: './assets/icons/typeScript.svg',
    description:
      '기본 타입과 인터페이스, 제네릭, 타입 합성 등 타입을 활용할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'React',
    icon: './assets/icons/react.svg',
    description:
      '기본 문법부터 훅, 라우터 등을 활용하여 다양한 프로젝트 경험이 있습니다.',
    highlight: false,
  },
  {
    name: 'Next.js',
    icon: './assets/icons/next.js.svg',
    description:
      'SSR, SSG, API Routes, Image 등을 활용하여 다양한 프로젝트 경험이 있습니다.',
    highlight: false,
  },
  {
    name: 'Vue.js',
    icon: './assets/icons/vue.js.svg',
    description:
      '2버전을 이용하여 대규모 프로젝트와 다양한 프로젝트 경험이 있습니다.',
    highlight: false,
  },
  {
    name: 'Nuxt.js',
    icon: './assets/icons/nuxt.js.svg',
    description:
      'Nuxt에서 지원하는 기능을 활용하여 다양한 프로젝트 경험이 있습니다.',
    highlight: false,
  },
  {
    name: 'Flutter',
    icon: './assets/icons/flutter.svg',
    description:
      '모바일 앱 개발과 웹뷰 앱 개발 경험이 있고, Firebase와 연동하여 사용할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'Git',
    icon: './assets/icons/git.svg',
    description:
      '기본적인 명령어부터 브렌치 전략, 리베이스 등을 활용하여 프로젝트의 버전을 관리할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'GraphQL',
    icon: './assets/icons/graphql.svg',
    description:
      'Schema를 정의하고, Query, Mutation을 작성하여 사용할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'Apollo Client',
    icon: './assets/icons/apollo.svg',
    description:
      'Link, Cache, Query, Mutation 등을 활용하여 사용할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'Relay',
    icon: './assets/icons/relay.svg',
    description:
      'compiler 설정, Query, Mutation 등을 활용하여 사용할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'Storybook',
    icon: './assets/icons/storybook.svg',
    description:
      'UI 컴포넌트를 설계하고 프로젝트 빌드 및 배포 경험이 있습니다.',
    highlight: false,
  },
  {
    name: 'Jest',
    icon: './assets/icons/jest.svg',
    description:
      '로직의 단위 테스트를 작성하고, 테스트 커버리지를 확인할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'SCSS/SASS',
    icon: './assets/icons/sass.svg',
    description: 'scss 문법을 활용하여 스타일을 모듈화하여 관리할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'Styled Components',
    icon: './assets/icons/styled-component.png',
    description:
      '스타일을 컴퓨넌트화 하고, 다른 컴포넌트와 합성 및 재사용하여 사용할 수 있습니다.',
    highlight: false,
  },
  {
    name: 'Tailwind CSS',
    icon: './assets/icons/tailwind-css.png',
    description:
      'Utility-first CSS 프레임워크를 활용하여 스타일을 작성할 수 있습니다.',
    highlight: false,
  },
];

const SkilCard = (props: {
  label: string;
  icon: string;
  description: string;
}) => {
  return (
    <div
      className="flex gap-y-[12px] w-[130px] flex-col break-words text-center"
      aria-label={props.label}
    >
      <LabeledIcon icon={props.icon} label={props.label} />
      <p className="break-words">{props.description}</p>
    </div>
  );
};

type Props = {
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
};

export default (props: Props) => {
  const { scrollYProgress, start, end } = props;

  const opacity = useTransform(
    scrollYProgress,
    [start, (start + end) / 2, end],
    [0, 1, 0]
  );
  return (
    <motion.section
      style={{ opacity }}
      className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
    >
      <Section aria-label="skill section">
        <SectionTitle className="w-full text-center">Skills</SectionTitle>
        <div className="flex flex-col justify-center items-center h-[300px] mx-auto whitespace-nowrap mt-[12px]">
          <ul className="flex flex-row overflow-x-scroll whitespace-normal max-w-[80vw] gap-x-[12px]">
            {SKILL_LIST.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col items-center max-w-[200px] whitespace-normal"
              >
                <SkilCard
                  label={skill.name}
                  icon={skill.icon}
                  description={skill.description}
                />
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </motion.section>
  );
};
