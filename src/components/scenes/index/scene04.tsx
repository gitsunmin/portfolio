'use client';
import { ScrollSection } from '@/components/layout/ScrollSection';
import { AnimatePresence, MotionValue, motion, useInView } from 'framer-motion';
import React, { useRef, useState } from 'react';

interface NotebookPage {
  id: number;
  content: string;
  link: string;
}

// 예제 데이터를 만들어 사용합니다.
const exampleData: NotebookPage[] = [
  {
    id: 1,
    content: 'Today I learned.',
    link: 'https://github.com/gitsunmin/til',
  },
  {
    id: 2,
    content: 'My Projects',
    link: 'https://github.com/gitsunmin/on-recliner',
  },
  {
    id: 3,
    content: 'My Posts',
    link: 'https://gitsunmin.github.io/blogs/',
  },
];

const TILNotebook: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      {exampleData.map((page) => (
        <motion.div
          key={page.id}
          className="border p-4 m-2 shadow hover:shadow-md"
          whileHover={{ scale: 1.05 }}
          onClick={() => window.open(page.link, '_blank')}
        >
          <pre>{page.content}</pre>
        </motion.div>
      ))}
    </div>
  );
};

type Props = React.PropsWithChildren<{
  id: string;
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
  ending: boolean;
}>;

export const Scene04 = (props: Props) => {
  return (
    <ScrollSection {...props} ariaLabel="scene04">
      <h1 className="flex justify-center text-[64px]">Learning Lab</h1>
      <TILNotebook />
    </ScrollSection>
  );
};
