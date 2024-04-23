'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Tag = ({
  children,
}: React.PropsWithChildren<{ key: string | number }>) => (
  <span className="p-[4px] rounded border-[1px] border-[#F5F0E6]">
    {children}
  </span>
);

type Props = {
  title: string;
  subtitle: string;
  description: string;
  tags: Array<string>;
};

export const Card = (props: Props) => {
  const { title, subtitle, description, tags } = props;

  const [hover, setHover] = useState(false);

  return (
    <motion.div
      aria-label={title}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      onTapStart={() => setHover(true)}
      onTapCancel={() => setHover(false)}
      className="flex flex-col justify-between gap-y-[18px] text-center border-2 border-[#F5F0E6] p-[24px] rounded-md shadow-slate-700"
    >
      <h3 className="text-[1.2em]">{title}</h3>
      <span>{subtitle}</span>
      <motion.div
        className="flex overflow-hidden gap-y-[18px] flex-col"
        initial={{ height: 0 }}
        animate={{ height: hover ? 'auto' : 0 }}
      >
        <p>{description}</p>
        <div className="flex flex-row justify-center gap-[8px] flex-wrap">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
