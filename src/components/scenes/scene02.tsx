import Section from '../layout/Section';
import ProfileImage from '../ui/ProfileImage';
import { MotionValue } from 'framer-motion';

type Props = {
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
};

export default (props: Props) => {
  const { scrollYProgress, start, end } = props;

  return (
    <Section
      scrollYProgress={scrollYProgress}
      start={start}
      end={end}
      ariaLabel="scene02, about me section"
    >
      <div className="flex justify-center px-[18px]">
        <ProfileImage alt="Profile Image" />
      </div>
      <div className="flex flex-col justify-center mt-[12px]">
        <p className="text-center">
          <span className="text-[18px] lg:text-[24px]">
            저는 프론트엔드 개발자
          </span>
          <br />
          <span className="text-[36px] lg :text-[42px]">김선민</span>
          <br />
          <span className="text-[18px] lg:text-[24px] text-right">입니다.</span>
        </p>
      </div>
    </Section>
  );
};
