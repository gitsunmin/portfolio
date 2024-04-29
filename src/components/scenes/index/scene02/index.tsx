'use client';
import { MotionValue } from 'framer-motion';
import { ScrollSection } from '@/components/layout/ScrollSection';
import Timeline, {
  TimelineItemData,
} from '@/components/scenes/index/scene02/Timeline';
import MarketboroDialog from '@/components/scenes/index/scene02/MarketboroDialog';
import KorensDialog from '@/components/scenes/index/scene02/KorensDialog';

const timelineItems: TimelineItemData[] = [
  {
    id: 'marketboro',
    company: '(주) 마켓보로',
    period: '2020.10 ~ 재직중',
    role: 'Frontend Developer',
    details: MarketboroDialog,
  },
  {
    id: 'korens',
    company: '(주) 코렌스',
    period: '2019.07 ~ 2020.10',
    role: 'Frontend Developer',
    details: KorensDialog,
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
