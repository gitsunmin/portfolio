'use client';
import { IntroSection } from '@/components/layout/IntroSection';
import { motion } from 'framer-motion';

const CareerCard = (props: {
  title: string;
  period: string;
  description: string;
}) => {
  const { title, period, description } = props;

  return (
    <div className="max-w-sm min-w-[300px] rounded overflow-hidden shadow-lg bg-gray-800 text-white m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-300 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">
          {period}
        </span>
      </div>
    </div>
  );
};

export const Scene00 = () => {
  const listVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
        ease: 'easeInOut',
      },
    },
    hidden: { opacity: 0, x: -50 },
    hover: { scale: 1.1, shadow: '0px 0px 8px 2px #00FFFF' },
  };

  const itemVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 },
    hover: { scale: 1.1 },
  };

  const careerList = [
    {
      key: 'marketboro',
      company: '(주) 마켓보로',
      period: '2020.10 ~ 재직중',
      position: '프론트엔드 개발',
    },
    {
      key: 'korens',
      company: '(주) 코렌스',
      period: '2019.07 ~ 2020.10',
      position: '프론트엔드 개발',
    },
  ];

  return (
    <IntroSection aria-label="scene00">
      <div className="text-center px-[12px] mt-[20px]">
        <h1 className="text-[60px]">Career</h1>
        <section className="text-cetner w-full">
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={listVariants}
            className="text-center"
          >
            {careerList.map((career) => (
              <motion.li
                key={career.key}
                whileHover="hover"
                whileTap="hover"
                variants={itemVariants}
                className="flex justify-center items-center"
              >
                <a href={`#${career.key}`}>
                  <CareerCard
                    key={career.key}
                    title={career.company}
                    period={career.period}
                    description={career.position}
                  />
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </section>
      </div>
    </IntroSection>
  );
};
