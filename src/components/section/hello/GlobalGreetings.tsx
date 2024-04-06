import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const GREETINGS = [
  'Hello',
  '안녕하세요',
  'こんにちは',
  'Hallo',
  'Bonjour',
  'Hola',
];

export default () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % GREETINGS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.ul className="flex justify-center text-[32px]">
      <motion.li
        key={index}
        aria-label={GREETINGS[index]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
      >
        {GREETINGS[index]}
      </motion.li>
    </motion.ul>
  );
};
