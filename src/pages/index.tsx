import { motion, useScroll, useSpring } from 'framer-motion';

import { useRef } from 'react';

const Dummy = () => {
  return (
    <>
      <motion.ul layoutScroll className="overflow-scroll max-h-[400px]">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.li
            key={i}
            layoutScroll
            className="bg-gray-300 h-20 mb-4 text-black"
          >
            ###{i}
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll({});
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <section className="text-center my-12">
        <h1 className="my-4">History</h1>
        <Dummy />
      </section>

      <section className="text-center my-12">
        <h1 className="my-4">Project</h1>
        <Dummy />
      </section>

      <motion.div
        className="h-[5px] bottom-[100px] inset-x-0 bg-white"
        style={{ scaleX }}
      />
    </>
  );
}
