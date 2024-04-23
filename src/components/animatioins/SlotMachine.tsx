'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Props = {
  slotList: string[];
  className?: string;
};

export const SlotMachine = (props: Props) => {
  const { className, slotList } = props;
  const [, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState(slotList[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % slotList.length;
        setCurrentText(slotList[nextIndex]);
        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [slotList]);

  return (
    <div
      className={`overflow-hidden h-[64px] w-full flex justify-center items-center ${className}`}
    >
      <motion.div
        key={currentText}
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        exit={{ y: '-100%' }}
        transition={{ type: 'tween', duration: 0.5 }}
        className="text-[32px] lg:text-[64px]"
      >
        {currentText}
      </motion.div>
    </div>
  );
};
