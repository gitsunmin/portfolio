import { motion } from 'framer-motion';

export default () => {
  return (
    <motion.section
      className="flex justify-center items-center"
      aria-label="scene0, Portfolio Guide"
    >
      <p className="flex justify-center mt-[30vh]">
        스크롤을 내리면서,
        <br />
        포트폴리오를 확인해보세요.
      </p>
    </motion.section>
  );
};
