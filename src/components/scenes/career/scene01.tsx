'use client';
import { MotionValue } from 'framer-motion';
import { ScrollSection } from '@/components/layout/ScrollSection';

type Props = {
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
};

export const Scene01 = (props: Props) => {
  return (
    <ScrollSection {...props} ariaLabel="scene01" id="marketboro">
      <div className="flex justify-center">
        <h1 className="text-[60px]">마켓보로</h1>
      </div>
    </ScrollSection>
  );
};
