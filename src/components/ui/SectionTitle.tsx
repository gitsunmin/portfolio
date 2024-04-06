import { motion } from 'framer-motion';

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export default (props: Props) => {
  const { children, className } = props;

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
      className={`text-[3em] ${className}`}
    >
      {children}
    </motion.h1>
  );
};
