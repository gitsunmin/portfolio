'use client';
import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from '@/components/scenes/index/scene02/TimeLineItem';
import MarketboroDialog from '@/components/scenes/index/scene02/MarketboroDialog';

export type TimelineItemData = {
  id: string;
  company: string;
  period: string;
  role: string;
  details: React.FC<any>;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

type Props = {
  items: TimelineItemData[];
};

const Timeline: React.FC<Props> = (props) => {
  const { items } = props;

  return (
    <motion.div
      className="flex flex-col space-y-4 p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item) => (
        <item.details key={item.id}>
          <TimelineItem
            item={item}
            onClick={() => {
              console.log('item clicked', item.id);
            }}
          />
        </item.details>
      ))}
    </motion.div>
  );
};

export default Timeline;
