'use client';
import React from 'react';
import { motion, useAnimate, useAnimation } from 'framer-motion';
import TimelineItem from './TimeLineItem';

export type TimelineItemData = {
  id: string;
  company: string;
  period: string;
  role: string;
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
        <TimelineItem
          key={item.id}
          item={item}
          onClick={() => {
            console.log('item clicked', item.id);
          }}
        />
      ))}
    </motion.div>
  );
};

export default Timeline;
