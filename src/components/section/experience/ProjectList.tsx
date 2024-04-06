import Card from '../../ui/Card';
import SectionSubtitle from '../../ui/SectionSubtitle';
import { motion } from 'framer-motion';

const PROJECT_LIST = [
  {
    name: '공지사항 관리 시스템 개발',
    period: {
      start: '2019.08',
      end: '2019.10',
    },
    description:
      'Google API를 이용하여 Google Workspace에 작성한 내용을 조회하여, 사내 공지사항 및 일정을 Digital Signage의 형태로 제공하는 시스템을 개발.',
    tags: ['Desktap'],
    link: 'https://gitsunmin.notion.site/dca6ba6ff38042ddadad31b67f3bad1c',
  },
  {
    name: '업무 협업 프로그램 개발',
    period: {
      start: '2019.10',
      end: '2020.10',
    },
    description:
      '문서 공동편집기능을 기반으로 채팅, 할일 관리 등 기능의 협업툴을 개발.',
    tags: ['Web'],
    link: 'https://gitsunmin.notion.site/179c4f41db6d4e51b132738a439e5aa6',
  },
  {
    name: '마켓봄 프로 개발',
    period: {
      start: '2020.10',
      end: '2023.08',
    },
    description:
      '마켓봄 프로의 PC, Mobile 웹 그리고 백오피스 웹 서비스를 초기 단계부터 개발 및 운영업무를 담당.',
    tags: ['Web', 'Mobile', 'B2B'],
    link: 'https://gitsunmin.notion.site/9c437384d105421aafb89ef21ea673a6',
  },
  {
    name: '마켓보로, 공통 웹뷰 개발',
    period: {
      start: '2023.08',
      end: '2023.12',
    },
    description:
      '마켓보로에서 사용중인 네이티브 하이브리드 앱들을 Flutter로 재개발하여 공통으로 사용할 수 있는 웹뷰 앱 개발',
    tags: ['App', 'Flutter', 'Web View'],
    link: 'https://gitsunmin.notion.site/f098322d80274c32b621e78d1a2588ee',
  },
  {
    name: '식봄, Next.js로 전환',
    period: {
      start: '2024.01',
      end: '2024.03',
    },
    description:
      '기존 PHP/CodeIgniter 기반의 식봄 웹 서비스를 현대적인 기술 스택인 Next.js와 Kotlin Spring으로 전환하여 서비스 품질 및 유지보수 효율을 개선',
    tags: ['E-Commerce'],
    link: 'https://gitsunmin.notion.site/Next-js-72cf7aca6d73402cbdd8b80556887aa5',
  },
];

export default () => {
  return (
    <motion.div
      key={'project-list'}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
    >
      <SectionSubtitle className="w-full text-center my-6">
        Projects
      </SectionSubtitle>
      <div className="max-w-[80vw] overflow-x-scroll mx-auto mt-[24px]">
        <ul className="flex flex-row gap-[24px] p-0 h-[400px]">
          {PROJECT_LIST.map((project) => (
            <a key={project.name} href={project.link}>
              <li className="min-w-[250px] max-w-[250px] min-h-[300px]">
                <Card
                  title={project.name}
                  subtitle={`${project.period.start} ~ ${project.period.end}`}
                  description={project.description}
                  tags={project.tags}
                />
              </li>
            </a>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
