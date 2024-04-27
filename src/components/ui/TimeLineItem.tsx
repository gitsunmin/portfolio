'use client';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  item: {
    id: string;
    company: string;
    period: string;
    role: string;
  };
  onClick?: () => void;
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const TimelineItem: React.FC<Props> = ({ item, onClick }) => {
  return (
    <motion.div
      className={`border-l-4 border-blue-500 pl-4 ${
        onClick ? 'cursor-pointer' : ''
      }`}
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <h3 className="font-bold text-lg">
        {item.company} - {item.role}
      </h3>
      <p className="text-gray-600">{item.period}</p>
    </motion.div>
  );
};

export default TimelineItem;
