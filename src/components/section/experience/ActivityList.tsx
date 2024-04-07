import Section from '../../layout/Section';
import Card from '../../ui/Card';
import SectionSubtitle from '../../ui/SectionSubtitle';

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
    <Section>
      <SectionSubtitle className="w-full text-center my-6">
        Activities
      </SectionSubtitle>
      <div className="max-w-[80vw] overflow-x-scroll mx-auto mt-[24px]">
        <ul className="flex flex-row gap-[24px] p-0 h-[400px]">
          {ActivityList.map((activity) => (
            <li
              key={activity.name}
              className="min-w-[250px] max-w-[250px] max-h-[300px]"
            >
              <a href={activity.link}>
                <Card
                  key={activity.name}
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
    </Section>
  );
};
