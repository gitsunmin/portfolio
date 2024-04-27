'use client';
import { MotionValue } from 'framer-motion';
import { ScrollSection } from '@/components/layout/ScrollSection';
import React from 'react';
import TagSearch from '@/components/ui/TagSearch';
import ProjectCard, { Project } from '@/components/ui/ProjectCard';

export const projects: Project[] = [
  {
    id: 1,
    name: '식자재 E-Commerce, Next.js로 전환',
    period: '2024.01 ~ 진행중',
    imageUrl: '/thumbnails/project_1.webp',
    skills: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'React Relay',
      'Jest',
      'Typescript',
      'Bitbucket Pipeline',
      'Datadog',
    ],
  },
  {
    id: 2,
    name: 'Flutter 공통 웹뷰 앱 개발',
    period: '2023.08 ~ 2023.12',
    imageUrl: '/thumbnails/project_2.webp',
    skills: [
      'Flutter',
      'Dart',
      'Android',
      'iOS',
      'Firebase',
      'Bitbucket Pipeline',
    ],
  },
  {
    id: 3,
    name: '대규모 유통 관리 솔루션 개발',
    period: '2020.10 ~2023.08',
    imageUrl: '/thumbnails/project_3.webp',
    skills: [
      'Nuxt',
      'Vuetify',
      'Typescript',
      'Storybook',
      'React',
      'Vue',
      'Apollo Client',
      'Jest',
      'Datadog',
      'Bitbucket Pipeline',
      'Pnpm',
      'Yarn',
      'Webpack',
      'Vite',
    ],
  },
  {
    id: 4,
    name: '문서 실시간 공동 편집 협업툴 개발',
    period: '2019.10 ~ 2020.1',
    imageUrl: '/thumbnails/project_4.webp',
    skills: [
      'Vue',
      'Vuex',
      'Quesar Framework',
      'GraphQL',
      'Typescript',
      'AWS Amplify',
    ],
  },
  {
    id: 5,
    name: '공지 사항 및 일정 관리 툴 개발',
    period: '2019.08 ~ 2019.10',
    imageUrl: '/thumbnails/project_5.webp',
    skills: ['Vue', 'Vuex', 'Quesar Framework', 'Google API', 'Electron'],
  },
];

type Props = React.PropsWithChildren<{
  id: string;
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
  ending: boolean;
}>;

export const Scene03 = (props: Props) => {
  const availableTags = Array.from(
    new Set(projects.map((project) => project.skills).flat())
  );
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  const handleSelectTag = (tag: string) => {
    setSelectedTags([...selectedTags, tag]);
  };

  const handleRemoveTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
  };

  return (
    <ScrollSection {...props} ariaLabel="scene03">
      <h1 className="flex justify-center text-[64px]">Projects</h1>

      <div className="flex justify-center">
        <TagSearch
          availableTags={availableTags}
          selectedTags={selectedTags}
          onSelect={handleSelectTag}
          onRemove={handleRemoveTag}
        />
      </div>
      <div className="flex overflow-x-auto py-4 gap-x-[16px] w-full px-[32px] h-[400px]">
        {projects
          .filter((project) =>
            project.skills.some((skill) => selectedTags.includes(skill))
          )
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </ScrollSection>
  );
};
