'use client';
import { MotionValue } from 'framer-motion';
import { ScrollSection } from '@/components/layout/ScrollSection';
import React, { Suspense } from 'react';
import { TagSearch } from '@/components/scenes/index/scene03/TagSearch';
import ProjectCard, {
  Project,
} from '@/components/scenes/index/scene03/ProjectCard';
import { P, match } from 'ts-pattern';
import { useRouter } from 'next/navigation';
import { ignore } from '@/lib/functions';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: '공지 사항 및 일정 관리 툴 개발',
    period: '2019.08 ~ 2019.10',
    imageUrl: '/thumbnails/project_1.webp',
    skills: ['Vue', 'Vuex', 'Quesar Framework', 'Google API', 'Electron'],
  },
  {
    id: 2,
    name: '문서 실시간 공동 편집 협업툴 개발',
    period: '2019.10 ~ 2020.1',
    imageUrl: '/thumbnails/project_2.webp',
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
    id: 3,
    name: '대규모 유통 관리 솔루션 개발',
    period: '2020.10 ~2023.08',
    imageUrl: '/thumbnails/project_3.webp',
    pathname: '/projects/marketbom-pro',
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
    name: 'Flutter 공통 웹뷰 앱 개발',
    period: '2023.08 ~ 2023.12',
    imageUrl: '/thumbnails/project_4.webp',
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
    id: 5,
    name: '식자재 E-Commerce, Next.js로 전환',
    period: '2024.01 ~ 진행중',
    imageUrl: '/thumbnails/project_5.webp',
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
].reverse();

const identity: <T>(a: T) => T = (a) => a;

type Props = React.PropsWithChildren<{
  id: string;
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
  ending: boolean;
}>;

export const Scene03 = (props: Props) => {
  const router = useRouter();

  const availableTags = Array.from(
    new Set(PROJECTS.map((project) => project.skills).flat())
  );
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  const handleSelectTag = (tag: string) => {
    setSelectedTags([...selectedTags, tag]);
  };

  const handleRemoveTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
  };

  const searchFilter = (projects: Project[]) =>
    projects.filter((project) =>
      project.skills.some((skill) => selectedTags.includes(skill))
    );

  const handleClickProject = (projectPathname?: string) =>
    match(projectPathname)
      .with(P.nonNullable, (url) => router.push(url))
      .otherwise(ignore);

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
        {match(PROJECTS)
          .when((projects) => searchFilter(projects).length > 0, searchFilter)
          .otherwise(identity)
          .map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={handleClickProject}
            />
          ))}
      </div>
    </ScrollSection>
  );
};
