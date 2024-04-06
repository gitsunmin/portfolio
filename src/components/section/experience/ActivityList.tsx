import Card from '../../ui/Card';
import SectionSubtitle from '../../ui/SectionSubtitle';
import { motion } from 'framer-motion';

const ActivityList = [
  {
    name: 'Khuthon',
    period: {
      start: '2018.11',
      end: '2018.11',
    },
    description: '경희대학교',
    tags: ['해커톤'],
    link: 'https://thon.khlug.org/',
  },
  {
    name: '정원사들 시즌 9',
    period: {
      start: '2023.08',
      end: '2023.11',
    },
    description: 'Google I/O Extended 2023',
    tags: ['Gathering'],
    link: 'https://gitsunmin.github.io/blogs/garden9-2023/',
  },
];

export default () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
    >
      <SectionSubtitle className="w-full text-center my-6">
        Activities
      </SectionSubtitle>
      <div className="max-w-[80vw] overflow-x-scroll mx-auto mt-[24px]">
        <ul className="flex flex-row gap-[24px] p-0 h-[400px]">
          {ActivityList.map((activity) => (
            <li className="min-w-[250px] max-w-[250px] max-h-[300px]">
              <a href={activity.link}>
                <Card
                  title={activity.name}
                  subtitle={`${activity.period.start} ~ ${activity.period.end}`}
                  description={activity.description}
                  tags={activity.tags}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
