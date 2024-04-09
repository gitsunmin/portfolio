import { motion } from 'framer-motion';

type Props = React.HTMLAttributes<HTMLDivElement>;

export default (props: Props) => {
  const { children, ...others } = props;
  return (
    <motion.section
      whileInView={{
        opacity: 1,
        transition: { duration: 1.5 },
      }}
      initial={{ opacity: 0 }}
      className={`flex align-center justify-center w-full`}
    >
      <div {...others}>{children}</div>
    </motion.section>
  );
};
