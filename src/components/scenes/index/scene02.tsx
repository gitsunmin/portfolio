'use client';
import { MotionValue } from 'framer-motion';
import { ScrollSection } from '@/components/layout/ScrollSection';
import Timeline, { TimelineItemData } from '@/components/ui/Timeline';

const timelineItems: TimelineItemData[] = [
  {
    id: 'marketboro',
    company: '(주) 마켓보로',
    period: '2020.10 ~ 재직중',
    role: 'Frontend Developer',
  },
  {
    id: 'korens',
    company: '(주) 코렌스',
    period: '2019.07 ~ 2020.10',
    role: 'Frontend Developer',
  },
];

type Props = React.PropsWithChildren<{
  id: string;
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
  ending: boolean;
}>;

export const Scene02 = (props: Props) => {
  return (
    <ScrollSection {...props} ariaLabel="scene03">
      <h1 className="flex justify-center text-[64px]">Careers</h1>
      <div className="flex justify-center">
        <Timeline items={timelineItems} />
      </div>
    </ScrollSection>
  );
};
